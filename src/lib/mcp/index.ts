import { defineMcp } from "@lovable.dev/mcp-js";
import getCompanyInfo from "./tools/get-company-info";
import subscribeNewsletter from "./tools/subscribe-newsletter";
import submitContact from "./tools/submit-contact";

export default defineMcp({
  name: "adveronix-mcp",
  title: "Foggy IO MCP",
  version: "0.1.0",
  instructions:
    "Tools for the Foggy IO marketing agency website. Use get_company_info to learn about services, subscribe_newsletter to add an email to the newsletter, and submit_contact_inquiry to book a free strategy call or send a project inquiry.",
  tools: [getCompanyInfo, subscribeNewsletter, submitContact],
});
