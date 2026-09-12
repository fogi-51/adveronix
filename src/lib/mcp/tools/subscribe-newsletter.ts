import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

export default defineTool({
  name: "subscribe_newsletter",
  title: "Subscribe to newsletter",
  description:
    "Subscribe an email address to the Fogee IO newsletter. Sends a notification to the Fogee IO team.",
  inputSchema: {
    email: z.string().email().describe("Email address to subscribe."),
  },
  annotations: { readOnlyHint: false, openWorldHint: true },
  handler: async ({ email }) => {
    const supabaseUrl = process.env.SUPABASE_URL;
    if (!supabaseUrl) {
      return {
        content: [{ type: "text", text: "Server misconfigured: SUPABASE_URL missing." }],
        isError: true,
      };
    }
    const res = await fetch(`${supabaseUrl}/functions/v1/send-newsletter-subscription`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    const body = await res.text();
    if (!res.ok) {
      return {
        content: [{ type: "text", text: `Subscription failed (${res.status}): ${body}` }],
        isError: true,
      };
    }
    return {
      content: [{ type: "text", text: `Subscribed ${email} to the Fogee IO newsletter.` }],
      structuredContent: { email, status: "subscribed" },
    };
  },
});
