import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Target,
  Search,
  Share2,
  TrendingUp,
  Megaphone,
  BarChart3,
  Globe,
  Mail,
} from "lucide-react";
import { CTA } from "@/components/sections/CTA";

const services = [
  {
    id: "social-ads",
    icon: Megaphone,
    title: "Facebook & Instagram Ads",
    subtitle: "Social Media Advertising",
    description:
      "Reach your ideal customers with precision-targeted social media advertising campaigns that drive conversions and maximize ROI across Facebook and Instagram.",
    benefits: [
      "Custom audience targeting and lookalike audiences",
      "A/B tested ad creatives and copy",
      "Dynamic retargeting campaigns",
      "Full-funnel campaign strategy",
      "Real-time optimization and reporting",
      "ROAS-focused budget management",
    ],
    results: "Average 4.5x ROAS",
  },
  {
    id: "google-ads",
    icon: Target,
    title: "Google Ads (PPC)",
    subtitle: "Pay-Per-Click Advertising",
    description:
      "Capture high-intent traffic with strategically optimized Google Ads campaigns that put your business at the top of search results when customers are ready to buy.",
    benefits: [
      "Comprehensive keyword research and strategy",
      "Search, Display, and Shopping campaigns",
      "Quality Score optimization",
      "Conversion tracking setup",
      "Negative keyword management",
      "Bid strategy optimization",
    ],
    results: "Average 35% reduction in CPA",
  },
  {
    id: "seo",
    icon: Search,
    title: "Search Engine Optimization",
    subtitle: "Organic Search Growth",
    description:
      "Dominate organic search rankings with our comprehensive SEO strategies that drive sustainable, long-term traffic growth and establish your brand authority.",
    benefits: [
      "Technical SEO audit and implementation",
      "On-page optimization and content strategy",
      "High-quality link building",
      "Local SEO for regional businesses",
      "Keyword ranking tracking",
      "Monthly performance reporting",
    ],
    results: "Average 200% traffic increase",
  },
  {
    id: "smm",
    icon: Share2,
    title: "Social Media Marketing",
    subtitle: "Brand Building & Engagement",
    description:
      "Build a powerful brand presence across social platforms with engaging content strategies that grow your community and turn followers into customers.",
    benefits: [
      "Content calendar and strategy",
      "Community management",
      "Influencer partnership facilitation",
      "Social listening and monitoring",
      "Brand voice development",
      "Engagement analytics and reporting",
    ],
    results: "Average 150% engagement increase",
  },
  {
    id: "lead-gen",
    icon: TrendingUp,
    title: "Lead Generation",
    subtitle: "Pipeline Building",
    description:
      "Fill your sales pipeline with qualified leads through multi-channel marketing funnels designed for maximum conversion and quality.",
    benefits: [
      "Multi-channel funnel design",
      "High-converting landing pages",
      "Email automation sequences",
      "Lead scoring and qualification",
      "CRM integration",
      "Conversion rate optimization",
    ],
    results: "Average 300% lead increase",
  },
  {
    id: "performance",
    icon: BarChart3,
    title: "Performance Marketing",
    subtitle: "Data-Driven Campaigns",
    description:
      "Data-driven marketing campaigns optimized for measurable business outcomes with continuous improvement and transparent reporting.",
    benefits: [
      "Cross-channel attribution modeling",
      "Advanced A/B and multivariate testing",
      "Customer lifetime value optimization",
      "Predictive analytics and forecasting",
      "Custom dashboard and reporting",
      "Continuous optimization cycles",
    ],
    results: "Average 250% ROI improvement",
  },
  {
    id: "branding",
    icon: Globe,
    title: "Branding & Strategy",
    subtitle: "Brand Development",
    description:
      "Develop a compelling brand identity and go-to-market strategy that resonates with your target audience and differentiates you from competitors.",
    benefits: [
      "Brand positioning and messaging",
      "Visual identity development",
      "Competitor analysis",
      "Target audience research",
      "Brand guidelines creation",
      "Launch strategy planning",
    ],
    results: "Complete brand transformation",
  },
  {
    id: "email",
    icon: Mail,
    title: "Email Marketing",
    subtitle: "Customer Retention",
    description:
      "Nurture leads and retain customers with strategic email marketing campaigns that drive repeat purchases and maximize customer lifetime value.",
    benefits: [
      "Email automation workflows",
      "Segmentation strategy",
      "Newsletter design and copywriting",
      "A/B testing and optimization",
      "Deliverability optimization",
      "Revenue attribution tracking",
    ],
    results: "Average 40% open rate",
  },
];

export default function ServicesPage() {
  return (
    <>
      <SEOHead
        title="Digital Marketing Services | Adveronix Agency"
        description="Full-service digital marketing: Facebook & Instagram Ads, Google Ads PPC, SEO, Social Media Marketing, Lead Generation. Get results that matter."
        keywords="digital marketing services, Facebook Ads, Instagram Ads, Google Ads, SEO services, PPC, lead generation, social media marketing, performance marketing"
        canonicalUrl="https://adveronix.lovable.app/services"
      />
      <Layout>
        {/* Hero Section */}
        <section className="py-24 hero-gradient relative overflow-hidden">
          <div className="absolute inset-0 hero-glow opacity-50" />
          <div className="container-wide relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block text-accent font-semibold mb-4 tracking-wide uppercase text-sm">
                Our Services
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Digital Marketing Services That{" "}
                <span className="text-gradient">Drive Revenue</span>
              </h1>
              <p className="text-xl text-primary-foreground/80 mb-8">
                From paid ads to organic growth, we offer comprehensive digital 
                marketing solutions tailored to your business goals and budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button variant="hero" size="xl">
                    Get Free Audit <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/case-studies">
                  <Button variant="hero-outline" size="xl">
                    See Results
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-24 bg-background">
          <div className="container-wide">
            <div className="space-y-24">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  id={service.id}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                        <service.icon className="h-7 w-7 text-accent" />
                      </div>
                      <div>
                        <span className="text-sm text-accent font-medium">
                          {service.subtitle}
                        </span>
                        <h2 className="text-3xl font-bold text-foreground">
                          {service.title}
                        </h2>
                      </div>
                    </div>
                    <p className="text-lg text-muted-foreground mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {service.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span className="text-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact">
                      <Button variant="accent" size="lg">
                        Get Started <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="bg-card rounded-2xl p-8 border border-border">
                      <div className="text-center mb-6">
                        <div className="text-5xl font-bold text-gradient mb-2">
                          {service.results}
                        </div>
                        <p className="text-muted-foreground">
                          Client Results
                        </p>
                      </div>
                      <div className="aspect-video bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl flex items-center justify-center">
                        <service.icon className="h-20 w-20 text-accent/30" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing CTA */}
        <section className="py-24 bg-secondary/50">
          <div className="container-wide">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Flexible Pricing for Every Business
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We customize our services to fit your goals and budget. 
                No long-term contracts required—just results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button variant="accent" size="lg">
                    Get Custom Quote
                  </Button>
                </Link>
                <Link to="/faq">
                  <Button variant="outline" size="lg">
                    View Pricing FAQ
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <CTA />
      </Layout>
    </>
  );
}
