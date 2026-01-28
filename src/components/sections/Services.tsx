import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Target,
  Search,
  Share2,
  TrendingUp,
  Megaphone,
  BarChart3,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Megaphone,
    title: "Facebook & Instagram Ads",
    description:
      "Reach your ideal customers with precision-targeted social media advertising campaigns that drive conversions and maximize ROI.",
    features: ["Audience Targeting", "Creative Testing", "Retargeting"],
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: Target,
    title: "Google Ads (PPC)",
    description:
      "Capture high-intent traffic with strategically optimized pay-per-click campaigns that put your business at the top of search results.",
    features: ["Keyword Research", "Ad Copy Optimization", "Bid Management"],
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: Search,
    title: "Search Engine Optimization",
    description:
      "Dominate organic search rankings with our comprehensive SEO strategies that drive sustainable, long-term traffic growth.",
    features: ["Technical SEO", "Content Strategy", "Link Building"],
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description:
      "Build a powerful brand presence across social platforms with engaging content strategies that grow your community.",
    features: ["Content Creation", "Community Management", "Analytics"],
    color: "from-pink-500 to-rose-600",
  },
  {
    icon: TrendingUp,
    title: "Lead Generation",
    description:
      "Fill your sales pipeline with qualified leads through multi-channel marketing funnels designed for maximum conversion.",
    features: ["Funnel Design", "Landing Pages", "Email Automation"],
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: BarChart3,
    title: "Performance Marketing",
    description:
      "Data-driven marketing campaigns optimized for measurable business outcomes and continuous improvement.",
    features: ["Attribution Modeling", "A/B Testing", "ROI Tracking"],
    color: "from-cyan-500 to-blue-600",
  },
];

export function Services() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-accent/5 to-transparent" />
      
      <div className="container-wide relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold mb-4 tracking-wide uppercase text-sm">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Digital Marketing Services That{" "}
            <span className="text-gradient">Drive Results</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From strategy to execution, we offer comprehensive digital marketing 
            solutions tailored to your business goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl p-8 border border-border hover:border-accent/50 transition-all duration-300 card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className="h-7 w-7 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6">
                {service.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="text-xs font-medium bg-secondary text-secondary-foreground px-3 py-1 rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>
              
              <Link
                to="/services"
                className="inline-flex items-center text-accent font-semibold hover:gap-3 gap-2 transition-all"
                aria-label={`Learn more about ${service.title}`}
              >
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/services">
            <Button variant="accent" size="lg">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
