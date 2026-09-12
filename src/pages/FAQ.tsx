import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CTA } from "@/components/sections/CTA";

const faqCategories = [
  {
    title: "General Questions",
    faqs: [
      {
        question: "What makes Fogee IO different from other marketing agencies?",
        answer:
          "We're 100% focused on measurable results, not vanity metrics. Our data-driven approach, transparent reporting, and no long-term contracts set us apart. We only succeed when you succeed, which is why we're obsessed with ROI and client results.",
      },
      {
        question: "What industries do you work with?",
        answer:
          "We work with businesses across various industries including e-commerce, SaaS, professional services, healthcare, real estate, restaurants, fitness, and more. Our strategies are customized to each industry's unique challenges and opportunities.",
      },
      {
        question: "How long does it take to see results?",
        answer:
          "Most clients start seeing initial results within 2-4 weeks for paid advertising campaigns. SEO typically takes 3-6 months for significant organic growth. We provide clear timelines and milestones during our strategy phase so you know exactly what to expect.",
      },
      {
        question: "Do you require long-term contracts?",
        answer:
          "No, we don't believe in locking clients into long-term contracts. We offer month-to-month agreements because we're confident in our ability to deliver results. We earn your business every month through performance.",
      },
    ],
  },
  {
    title: "Services & Pricing",
    faqs: [
      {
        question: "What services do you offer?",
        answer:
          "We offer comprehensive digital marketing services including Facebook & Instagram Ads, Google Ads (PPC), SEO, Social Media Marketing, Lead Generation, Email Marketing, Branding & Strategy, and Performance Marketing. We can bundle services or offer them individually based on your needs.",
      },
      {
        question: "How much do your services cost?",
        answer:
          "Our pricing is customized based on your business goals, industry, and scope of work. We offer packages starting from $2,000/month for small businesses up to enterprise solutions. Schedule a free consultation and we'll provide a detailed quote tailored to your needs.",
      },
      {
        question: "What's included in your management fee?",
        answer:
          "Our management fee covers strategy development, campaign setup, ongoing optimization, creative development, reporting, and dedicated account management. Ad spend is billed separately directly to the platforms (Facebook, Google, etc.).",
      },
      {
        question: "Do you offer one-time projects or only ongoing retainers?",
        answer:
          "We offer both. While most of our clients work with us on ongoing retainers for continuous optimization, we also offer one-time projects like marketing audits, campaign setups, and strategy development.",
      },
    ],
  },
  {
    title: "Working With Us",
    faqs: [
      {
        question: "What does the onboarding process look like?",
        answer:
          "Our onboarding includes a discovery call, comprehensive audit of your current marketing, competitor analysis, strategy development, and campaign setup. The entire process typically takes 1-2 weeks, and you'll have a dedicated account manager throughout.",
      },
      {
        question: "How often will we communicate?",
        answer:
          "You'll receive weekly performance reports and have access to a real-time dashboard. We schedule bi-weekly or monthly strategy calls depending on your preference. Your account manager is also available via email or Slack for urgent matters.",
      },
      {
        question: "Do you handle creative (ads, graphics, copy)?",
        answer:
          "Yes! We have an in-house creative team that handles ad copy, graphic design, video editing, and landing page design. If you have your own creative team, we're happy to collaborate with them as well.",
      },
      {
        question: "Will I have a dedicated account manager?",
        answer:
          "Absolutely. Every client gets a dedicated account manager who knows your business inside and out. They're your single point of contact and ensure seamless communication and execution across all campaigns.",
      },
    ],
  },
  {
    title: "Results & Reporting",
    faqs: [
      {
        question: "How do you measure success?",
        answer:
          "We focus on metrics that matter to your business: leads, sales, revenue, and ROI. While we track all relevant marketing metrics, our success is tied to your business outcomes, not clicks and impressions.",
      },
      {
        question: "What kind of reporting do you provide?",
        answer:
          "You'll receive comprehensive weekly reports covering campaign performance, key metrics, insights, and recommendations. You'll also have access to a real-time dashboard for on-demand visibility into your campaigns.",
      },
      {
        question: "What if I'm not happy with the results?",
        answer:
          "Your satisfaction is our priority. If you're not seeing the results you expected, we'll analyze what's not working and adjust our strategy. Our month-to-month agreements mean you're never stuck if things aren't working out.",
      },
      {
        question: "Can you guarantee results?",
        answer:
          "While we can't guarantee specific outcomes (be wary of anyone who does), we can guarantee our commitment to data-driven optimization and transparent communication. Our track record of 4.9-star reviews and 500+ successful clients speaks to our ability to deliver.",
      },
    ],
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqCategories.flatMap((category) =>
    category.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    }))
  ),
};

export default function FAQ() {
  return (
    <>
      <SEOHead
        title="FAQ | Frequently Asked Questions | Fogee IO Agency"
        description="Find answers to common questions about Fogee IO's digital marketing services, pricing, process, and results. Everything you need to know before getting started."
        keywords="digital marketing FAQ, marketing agency questions, Facebook Ads FAQ, SEO questions, marketing pricing"
        canonicalUrl="https://adveronix.lovable.app/faq"
        structuredData={faqSchema}
      />
      <Layout>
        {/* Hero Section */}
        <section className="py-24 hero-gradient relative overflow-hidden">
          <div className="absolute inset-0 hero-glow opacity-50" />
          <div className="container-wide relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block text-accent font-semibold mb-4 tracking-wide uppercase text-sm">
                FAQ
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Frequently Asked{" "}
                <span className="text-gradient">Questions</span>
              </h1>
              <p className="text-xl text-primary-foreground/80">
                Everything you need to know about working with Fogee IO. 
                Can't find the answer you're looking for? Reach out to our team.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="py-24 bg-background">
          <div className="container-wide">
            <div className="max-w-4xl mx-auto">
              {faqCategories.map((category, categoryIndex) => (
                <div key={category.title} className="mb-12">
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    {category.title}
                  </h2>
                  <Accordion type="single" collapsible className="space-y-4">
                    {category.faqs.map((faq, faqIndex) => (
                      <AccordionItem
                        key={faqIndex}
                        value={`${categoryIndex}-${faqIndex}`}
                        className="bg-card rounded-xl border border-border px-6"
                      >
                        <AccordionTrigger className="text-left font-semibold text-foreground hover:text-accent">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground pb-6">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="py-16 bg-secondary/50">
          <div className="container-wide">
            <div className="max-w-2xl mx-auto text-center">
              <MessageCircle className="h-12 w-12 text-accent mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Still Have Questions?
              </h2>
              <p className="text-muted-foreground mb-8">
                Can't find what you're looking for? Our team is happy to help. 
                Schedule a free call or send us a message.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button variant="accent" size="lg">
                    Contact Us <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg">
                  Schedule a Call
                </Button>
              </div>
            </div>
          </div>
        </section>

        <CTA />
      </Layout>
    </>
  );
}
