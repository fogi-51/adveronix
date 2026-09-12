import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

export default defineTool({
  name: "submit_contact_inquiry",
  title: "Submit contact inquiry",
  description:
    "Submit a contact / strategy call inquiry to the Fogee IO team. Use when a user wants to book a free strategy call or reach out about a project.",
  inputSchema: {
    firstName: z.string().min(1).describe("Contact first name."),
    lastName: z.string().min(1).describe("Contact last name."),
    email: z.string().email().describe("Contact email address."),
    phone: z.string().optional().describe("Optional phone number."),
    company: z.string().min(1).describe("Company name."),
    website: z.string().optional().describe("Optional company website URL."),
    service: z
      .string()
      .min(1)
      .describe("Service of interest (e.g. SEO, Paid Ads, Web Design, Content Marketing)."),
    budget: z.string().optional().describe("Optional monthly budget range."),
    message: z.string().min(1).describe("Message describing the project or goals."),
  },
  annotations: { readOnlyHint: false, openWorldHint: true },
  handler: async (input) => {
    const supabaseUrl = process.env.SUPABASE_URL;
    if (!supabaseUrl) {
      return {
        content: [{ type: "text", text: "Server misconfigured: SUPABASE_URL missing." }],
        isError: true,
      };
    }
    const res = await fetch(`${supabaseUrl}/functions/v1/send-contact-email`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input),
    });
    const body = await res.text();
    if (!res.ok) {
      return {
        content: [{ type: "text", text: `Contact submission failed (${res.status}): ${body}` }],
        isError: true,
      };
    }
    return {
      content: [
        { type: "text", text: `Contact inquiry submitted for ${input.firstName} ${input.lastName}.` },
      ],
      structuredContent: { status: "submitted", email: input.email },
    };
  },
});
