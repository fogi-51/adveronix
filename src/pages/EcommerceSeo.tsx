import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Search, ShoppingCart, BarChart3, Layers, Link2, Gauge } from "lucide-react";

const pillars = [
  {
    icon: Search,
    title: "Keyword & Intent Mapping",
    body: "We map transactional, commercial and informational queries to the right template — category pages for head terms, product pages for long-tail SKUs, guides for research intent.",
  },
  {
    icon: Layers,
    title: "Site Architecture & Faceted Navigation",
    body: "Flat, crawlable category trees with controlled faceted URLs, canonical rules and pagination handling so crawl budget goes to pages that convert.",
  },
  {
    icon: ShoppingCart,
    title: "Product & Category Page Optimization",
    body: "Unique titles, buying-guide copy on category pages, Product and Offer schema, review markup and internal links from the highest-authority pages.",
  },
  {
    icon: Gauge,
    title: "Technical SEO & Core Web Vitals",
    body: "Log-file crawl analysis, index bloat cleanup, image and JS payload budgets, and LCP work on templates — not one-off pages.",
  },
  {
    icon: Link2,
    title: "Digital PR & Link Acquisition",
    body: "Data-led campaigns and supplier, publisher and comparison-site placements that lift category-level authority, not just a single URL.",
  },
  {
    icon: BarChart3,
    title: "Revenue Reporting",
    body: "Every ranking is tied to sessions, assisted revenue and margin so you can see organic search as a channel P&L, not a vanity chart.",
  },
];

const process = [
  { step: "01", title: "Technical & Revenue Audit", body: "Crawl, index and analytics review to find the pages losing money today." },
  { step: "02", title: "Keyword & Competitor Gap", body: "Where competitors capture demand you do not, sized by volume and intent." },
  { step: "03", title: "Template-Level Fixes", body: "Changes shipped once to a template compound across thousands of URLs." },
  { step: "04", title: "Content & Authority", body: "Category guides, comparison pages and digital PR to earn and hold position." },
  { step: "05", title: "Measure & Iterate", body: "Monthly reporting against organic revenue targets, with the next sprint planned." },
];

const faqs = [
  {
    q: "How long does ecommerce SEO take to show results?",
    a: "Technical wins on existing ranking pages often move within 4–8 weeks. New category and guide content typically compounds over 4–6 months, which is when most stores see meaningful organic revenue growth.",
  },
  {
    q: "Is ecommerce SEO better than paid ads?",
    a: "They are complementary. Paid search buys demand immediately; SEO lowers blended customer acquisition cost over time. Most of our clients run both, with SEO taking over high-volume head terms that are expensive to buy.",
  },
  {
    q: "Do you work with Shopify, WooCommerce and Magento?",
    a: "Yes. We work across Shopify, WooCommerce, Magento and headless builds, adapting the technical fixes to what each platform actually allows.",
  },
  {
    q: "How do you handle duplicate product content?",
    a: "We consolidate variants with canonical tags, rewrite thin descriptions on revenue-driving SKUs, and use structured data so search engines can distinguish variants from duplicates.",
  },
];

const results = [
  { client: "GrowthBox", metric: "312%", label: "increase in organic revenue in 9 months" },
  { client: "StyleHub", metric: "4.6x", label: "growth in non-brand category traffic" },
];

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Ecommerce SEO Services",
      serviceType: "Ecommerce SEO",
      description:
        "Ecommerce SEO strategy for online stores: technical SEO, category and product page optimization, content and digital PR tied to organic revenue.",
      url: "https://adveronix.lovable.app/services/ecommerce-seo",
      provider: {
        "@type": "Organization",
        name: "Fogee IO Agency",
        url: "https://adveronix.lovable.app",
      },
      areaServed: "Worldwide",
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://adveronix.lovable.app/" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://adveronix.lovable.app/services" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Ecommerce SEO",
          item: "https://adveronix.lovable.app/services/ecommerce-seo",
        },
      ],
    },
  ],
};

const EcommerceSeo = () => {
  return (
    <>
      <SEOHead
        title="Ecommerce SEO Services & Strategy Guide | Fogee IO"
        description="A complete ecommerce SEO strategy: technical fixes, category and product page optimization, content and links — measured in organic revenue, not rankings."
        keywords="ecommerce seo, ecommerce seo services, ecommerce seo strategy, online store seo, product page seo, category page seo"
        canonicalUrl="https://adveronix.lovable.app/services/ecommerce-seo"
        structuredData={pageSchema}
      />
      <Layout>
        <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container-wide">
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
              <Link to="/" className="hover:underline">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/services" className="hover:underline">Services</Link>
              <span className="mx-2">/</span>
              <span className="text-foreground">Ecommerce SEO</span>
            </nav>
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">
                Ecommerce SEO That Grows <span className="text-primary">Revenue</span>, Not Just Rankings
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Most online stores lose organic revenue to the same handful of problems: index bloat, thin
                category pages and product templates that search engines cannot tell apart. This guide walks
                through the ecommerce SEO strategy we use to fix them — and the results it produces.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link to="/contact" aria-label="Get a Free Marketing Audit - Ecommerce SEO">
                    Get a Free Marketing Audit <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/case-studies" aria-label="See ecommerce SEO case studies">
                    See Ecommerce Results
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container-wide">
            <h2 className="text-3xl font-bold font-display mb-4">The Six Pillars of an Ecommerce SEO Strategy</h2>
            <p className="text-muted-foreground max-w-2xl mb-12">
              Ecommerce SEO is a template problem, not a page problem. Each pillar below is applied once and
              compounds across every category and SKU in your catalogue.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pillars.map((pillar) => (
                <Card key={pillar.title} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                      <pillar.icon className="h-6 w-6 text-accent" aria-hidden="true" />
                    </div>
                    <CardTitle className="text-xl">{pillar.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{pillar.body}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/40">
          <div className="container-wide">
            <h2 className="text-3xl font-bold font-display mb-12">How We Run an Ecommerce SEO Engagement</h2>
            <ol className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {process.map((item) => (
                <li key={item.step} className="bg-background rounded-xl p-6 border">
                  <span className="text-accent font-display font-bold text-2xl">{item.step}</span>
                  <h3 className="font-semibold mt-3 mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="py-16">
          <div className="container-wide">
            <h2 className="text-3xl font-bold font-display mb-12">Ecommerce Results From Our Case Studies</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
              {results.map((r) => (
                <Card key={r.client}>
                  <CardContent className="pt-6">
                    <p className="text-4xl font-bold font-display text-accent">{r.metric}</p>
                    <p className="text-muted-foreground mt-2">{r.label}</p>
                    <p className="mt-4 font-semibold">{r.client}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-muted-foreground mt-8">
              Full breakdowns of both programmes are in our{" "}
              <Link to="/case-studies" className="text-primary hover:underline">
                case studies
              </Link>
              , alongside our wider{" "}
              <Link to="/services" className="text-primary hover:underline">
                digital marketing services
              </Link>
              .
            </p>
          </div>
        </section>

        <section className="py-16 bg-muted/40">
          <div className="container-wide">
            <h2 className="text-3xl font-bold font-display mb-12">Ecommerce SEO FAQs</h2>
            <div className="max-w-3xl space-y-8">
              {faqs.map((f) => (
                <div key={f.q}>
                  <h3 className="text-xl font-semibold mb-2">{f.q}</h3>
                  <p className="text-muted-foreground">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container-wide text-center">
            <h2 className="text-3xl font-bold font-display mb-4">Find out what your store is leaving on the table</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              We will audit your crawl, index and category structure and show you the organic revenue
              opportunity before you commit to anything.
            </p>
            <Button asChild size="lg">
              <Link to="/contact" aria-label="Book a Free Strategy Call - Ecommerce SEO">
                Book a Free Strategy Call <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default EcommerceSeo;
