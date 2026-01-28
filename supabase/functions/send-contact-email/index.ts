import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

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
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: ContactFormData = await req.json();
    console.log("Received contact form submission:", formData);

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
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Adveronix Agency Website</p>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">👤 Name</div>
              <div class="value">${formData.firstName} ${formData.lastName}</div>
            </div>
            <div class="field">
              <div class="label">📧 Email</div>
              <div class="value"><a href="mailto:${formData.email}">${formData.email}</a></div>
            </div>
            ${formData.phone ? `
            <div class="field">
              <div class="label">📱 Phone</div>
              <div class="value"><a href="tel:${formData.phone}">${formData.phone}</a></div>
            </div>
            ` : ''}
            <div class="field">
              <div class="label">🏢 Company</div>
              <div class="value">${formData.company}</div>
            </div>
            ${formData.website ? `
            <div class="field">
              <div class="label">🌐 Website</div>
              <div class="value"><a href="${formData.website}" target="_blank">${formData.website}</a></div>
            </div>
            ` : ''}
            <div class="field">
              <div class="label">🎯 Service Interested In</div>
              <div class="value highlight">${formData.service}</div>
            </div>
            ${formData.budget ? `
            <div class="field">
              <div class="label">💰 Monthly Budget</div>
              <div class="value">${formData.budget}</div>
            </div>
            ` : ''}
            <div class="field">
              <div class="label">💬 Message</div>
              <div class="message-box">${formData.message}</div>
            </div>
          </div>
          <div class="footer">
            <p>This email was sent from your Adveronix Agency website contact form.</p>
            <p>Reply directly to this email or contact <strong>${formData.email}</strong></p>
          </div>
        </div>
      </body>
      </html>
    `;

    console.log("Sending email to info@supabased.site...");
    
    const emailResponse = await resend.emails.send({
      from: "Adveronix Contact <onboarding@resend.dev>",
      to: ["info@supabased.site"],
      reply_to: formData.email,
      subject: `New Contact: ${formData.firstName} ${formData.lastName} - ${formData.service}`,
      html: emailHtml,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, data: emailResponse }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
