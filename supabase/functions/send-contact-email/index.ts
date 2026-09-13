import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

// Simple in-memory rate limiting (resets on function cold start)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_MAX = 5; // Max requests per window
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);
  
  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  
  if (record.count >= RATE_LIMIT_MAX) {
    return true;
  }
  
  record.count++;
  return false;
}

// HTML escape function to prevent XSS in emails
function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company: string;
  website?: string;
  service: string;
  budget?: string;
  message: string;
  captchaToken?: string;
  /** Honeypot field — must stay empty; only bots fill it in. */
  companyWebsiteConfirm?: string;
  /** "website" (default, saved by the browser client) or "mcp" (saved here). */
  source?: string;
}

/** Stores an inquiry that did not come from the website form (e.g. an AI agent via MCP). */
async function saveInquiry(formData: ContactFormData, source: string): Promise<void> {
  const url = Deno.env.get("SUPABASE_URL");
  const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  if (!url || !serviceKey) {
    console.error("Cannot save inquiry: backend credentials missing");
    return;
  }
  const res = await fetch(`${url}/rest/v1/contacts`, {
    method: "POST",
    headers: {
      apikey: serviceKey,
      Authorization: `Bearer ${serviceKey}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify({
      name: `${formData.firstName} ${formData.lastName}`.trim(),
      email: formData.email,
      company: formData.company || null,
      service: formData.service || null,
      budget: formData.budget || null,
      message: formData.message,
      source,
    }),
  });
  if (!res.ok) {
    console.error("Failed to save inquiry:", res.status, await res.text());
  }
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Rate limiting check
    const clientIp = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || 
                     req.headers.get("x-real-ip") || 
                     "unknown";
    
    if (isRateLimited(clientIp)) {
      console.warn(`Rate limit exceeded for IP: ${clientIp}`);
      return new Response(
        JSON.stringify({ error: "Too many requests. Please try again later." }),
        {
          status: 429,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const formData: ContactFormData = await req.json();

    // Honeypot: real users never see or fill this field.
    if (formData.companyWebsiteConfirm) {
      console.warn(`Honeypot triggered for IP: ${clientIp}`);
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    // CAPTCHA verification (active once TURNSTILE_SECRET_KEY is configured).
    const turnstileSecret = Deno.env.get("TURNSTILE_SECRET_KEY");
    if (turnstileSecret) {
      if (!formData.captchaToken) {
        return new Response(
          JSON.stringify({ error: "Please complete the spam-protection challenge." }),
          { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } },
        );
      }
      const verifyRes = await fetch(
        "https://challenges.cloudflare.com/turnstile/v0/siteverify",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            secret: turnstileSecret,
            response: formData.captchaToken,
            remoteip: clientIp !== "unknown" ? clientIp : undefined,
          }),
        },
      );
      const verifyBody = await verifyRes.json().catch(() => null);
      if (!verifyRes.ok || !verifyBody?.success) {
        console.warn("Turnstile verification failed:", verifyBody);
        return new Response(
          JSON.stringify({ error: "Spam-protection check failed. Please try again." }),
          { status: 403, headers: { "Content-Type": "application/json", ...corsHeaders } },
        );
      }
    }

    console.log("Received contact form submission from:", clientIp);

    // Validate required fields
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.company || !formData.service || !formData.message) {
      console.error("Missing required fields");
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Validate field lengths
    if (formData.firstName.length > 100 || formData.lastName.length > 100 || 
        formData.email.length > 255 || formData.company.length > 200 ||
        formData.message.length > 5000) {
      console.error("Field length exceeded");
      return new Response(
        JSON.stringify({ error: "Input exceeds maximum length" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      console.error("Invalid email format");
      return new Response(
        JSON.stringify({ error: "Invalid email format" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Escape all user inputs for safe HTML rendering
    const safeFirstName = escapeHtml(formData.firstName);
    const safeLastName = escapeHtml(formData.lastName);
    const safeEmail = escapeHtml(formData.email);
    const safePhone = formData.phone ? escapeHtml(formData.phone) : null;
    const safeCompany = escapeHtml(formData.company);
    const safeWebsite = formData.website ? escapeHtml(formData.website) : null;
    const safeService = escapeHtml(formData.service);
    const safeBudget = formData.budget ? escapeHtml(formData.budget) : null;
    const safeMessage = escapeHtml(formData.message);

    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #0a1628 0%, #1a365d 100%); color: white; padding: 30px; border-radius: 8px 8px 0 0; }
          .header h1 { margin: 0; font-size: 24px; }
          .content { background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; }
          .field { margin-bottom: 20px; }
          .label { font-weight: bold; color: #374151; margin-bottom: 5px; }
          .value { background: white; padding: 12px; border-radius: 6px; border: 1px solid #e5e7eb; }
          .message-box { background: white; padding: 20px; border-radius: 6px; border: 1px solid #e5e7eb; white-space: pre-wrap; }
          .footer { text-align: center; padding: 20px; color: #6b7280; font-size: 14px; }
          .highlight { color: #f97316; font-weight: bold; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🚀 New Contact Form Submission</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Fogee IO Agency Website</p>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">👤 Name</div>
              <div class="value">${safeFirstName} ${safeLastName}</div>
            </div>
            <div class="field">
              <div class="label">📧 Email</div>
              <div class="value"><a href="mailto:${safeEmail}">${safeEmail}</a></div>
            </div>
            ${safePhone ? `
            <div class="field">
              <div class="label">📱 Phone</div>
              <div class="value"><a href="tel:${safePhone}">${safePhone}</a></div>
            </div>
            ` : ''}
            <div class="field">
              <div class="label">🏢 Company</div>
              <div class="value">${safeCompany}</div>
            </div>
            ${safeWebsite ? `
            <div class="field">
              <div class="label">🌐 Website</div>
              <div class="value"><a href="${safeWebsite}" target="_blank">${safeWebsite}</a></div>
            </div>
            ` : ''}
            <div class="field">
              <div class="label">🎯 Service Interested In</div>
              <div class="value highlight">${safeService}</div>
            </div>
            ${safeBudget ? `
            <div class="field">
              <div class="label">💰 Monthly Budget</div>
              <div class="value">${safeBudget}</div>
            </div>
            ` : ''}
            <div class="field">
              <div class="label">💬 Message</div>
              <div class="message-box">${safeMessage}</div>
            </div>
          </div>
          <div class="footer">
            <p>This email was sent from your Fogee IO Agency website contact form.</p>
            <p>Reply directly to this email or contact <strong>${safeEmail}</strong></p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Until fogi.co.in is verified in Resend, notifications go to the Resend account owner.
    const NOTIFY_TO = "info.ai.fogi@gmail.com";
    console.log(`Sending email to ${NOTIFY_TO}...`);

    const emailResponse = await resend.emails.send({
      from: "Fogee IO Contact <onboarding@resend.dev>",
      to: [NOTIFY_TO],
      reply_to: formData.email,
      subject: `New Contact: ${safeFirstName} ${safeLastName} - ${safeService}`,
      html: emailHtml,
    });

    if ((emailResponse as any)?.error) {
      console.error("Email provider rejected the send:", (emailResponse as any).error);
      return new Response(
        JSON.stringify({ error: "Your message was received, but the notification email could not be delivered." }),
        {
          status: 502,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    // Return generic error message to prevent information leakage
    return new Response(
      JSON.stringify({ error: "Unable to process your request. Please try again later." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);