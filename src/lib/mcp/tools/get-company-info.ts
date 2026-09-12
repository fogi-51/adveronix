import { defineTool } from "@lovable.dev/mcp-js";

const INFO = {
  name: "Fogee IO",
  tagline: "Digital marketing agency helping brands grow through SEO, paid ads, web design, and content.",
  website: "https://adveronix.lovable.app",
  services: [
    "Search Engine Optimization (SEO)",
    "Paid Advertising (Google Ads, Meta Ads)",
    "Web Design & Development",
    "Content Marketing",
    "Brand Strategy",
    "Conversion Rate Optimization",
  ],
  pages: [
    "/", "/about", "/services", "/case-studies", "/blog",
    "/testimonials", "/faq", "/contact", "/careers",
  ],
  contactCta: "Book a free strategy call at /contact.",
};

export default defineTool({
  name: "get_company_info",
  title: "Get Fogee IO company info",
  description: "Return an overview of Fogee IO: services offered, key pages, and how to get in touch.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(INFO, null, 2) }],
    structuredContent: INFO,
  }),
});
