import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface SubscriptionData {
  email: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email }: SubscriptionData = await req.json();
    console.log("Received newsletter subscription:", email);

    // Validate email
    if (!email) {
      console.error("Missing email field");
      return new Response(
        JSON.stringify({ error: "Email is required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.error("Invalid email format:", email);
      return new Response(
        JSON.stringify({ error: "Invalid email format" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Validate email length
    if (email.length > 255) {
      console.error("Email too long");
      return new Response(
        JSON.stringify({ error: "Email is too long" }),
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
          .email-box { background: white; padding: 20px; border-radius: 6px; border: 1px solid #e5e7eb; font-size: 18px; text-align: center; }
          .footer { text-align: center; padding: 20px; color: #6b7280; font-size: 14px; }
          .highlight { color: #f97316; font-weight: bold; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>📧 New Newsletter Subscription</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Adveronix Agency Website</p>
          </div>
          <div class="content">
            <p>A new user has subscribed to your newsletter!</p>
            <div class="email-box">
              <span class="highlight">${email}</span>
            </div>
            <p style="margin-top: 20px; text-align: center;">
              <a href="mailto:${email}" style="color: #f97316;">Click here to email them</a>
            </p>
          </div>
          <div class="footer">
            <p>This notification was sent from your Adveronix Agency website.</p>
            <p>Timestamp: ${new Date().toISOString()}</p>
          </div>
        </div>
      </body>
      </html>
    `;

    console.log("Sending subscription notification to fogi.helpdesk@gmail.com...");
    
    const emailResponse = await resend.emails.send({
      from: "Adveronix Newsletter <onboarding@resend.dev>",
      to: ["fogi.helpdesk@gmail.com"],
      subject: `New Newsletter Subscriber: ${email}`,
      html: emailHtml,
    });

    console.log("Subscription notification sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, data: emailResponse }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-newsletter-subscription function:", error);
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
