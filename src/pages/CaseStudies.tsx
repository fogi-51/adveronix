import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Users, DollarSign, Target } from "lucide-react";
import { CTA } from "@/components/sections/CTA";

const caseStudies = [
  {
    id: 1,
    client: "TechStart Inc.",
    industry: "SaaS / Technology",
    service: "Facebook & Instagram Ads",
    challenge: "Low brand awareness and high customer acquisition costs were limiting growth potential.",
    solution: "Implemented a full-funnel social advertising strategy with custom audiences and lookalike targeting.",
    results: [
      { metric: "Lead Increase", value: "340%", icon: Users },
      { metric: "Cost Per Lead", value: "-65%", icon: DollarSign },
      { metric: "ROAS", value: "5.2x", icon: TrendingUp },
    ],
    testimonial: "Foggy IO transformed our digital presence completely. Their strategic approach to Facebook ads is unmatched.",
    author: "Sarah Johnson, CEO",
  },
  {
    id: 2,
    client: "GrowthBox",
    industry: "E-commerce",
    service: "Google Ads + SEO",
    challenge: "Struggling to compete with larger retailers in paid search and organic rankings.",
    solution: "Combined PPC campaign optimization with comprehensive SEO strategy targeting long-tail keywords.",
    results: [
      { metric: "Revenue Generated", value: "$2.5M", icon: DollarSign },
      { metric: "Organic Traffic", value: "+280%", icon: TrendingUp },
      { metric: "Conversion Rate", value: "+45%", icon: Target },
    ],
    testimonial: "The ROI we've seen from working with Foggy IO has been incredible. They truly understand performance marketing.",
    author: "Michael Chen, Founder",
  },
  {
    id: 3,
    client: "ScaleUp Co.",
    industry: "Professional Services",
    service: "Lead Generation",
    challenge: "Inconsistent lead flow and difficulty tracking marketing ROI across channels.",
    solution: "Built a multi-channel lead generation funnel with automated nurturing and attribution tracking.",
    results: [
      { metric: "ROAS Achieved", value: "5x", icon: TrendingUp },
      { metric: "Lead Quality Score", value: "+85%", icon: Target },
      { metric: "Sales Cycle", value: "-30%", icon: DollarSign },
    ],
    testimonial: "What sets Foggy IO apart is their data-driven approach and transparency. We always know exactly how our campaigns are performing.",
    author: "Emily Rodriguez, Marketing Director",
  },
  {
    id: 4,
    client: "Local Bites Restaurant Group",
    industry: "Food & Hospitality",
    service: "Social Media Marketing",
    challenge: "Multiple locations struggling with brand consistency and local engagement.",
    solution: "Developed unified brand strategy with localized content and community management across all locations.",
    results: [
      { metric: "Social Engagement", value: "+420%", icon: Users },
      { metric: "Foot Traffic", value: "+55%", icon: TrendingUp },
      { metric: "Online Orders", value: "+180%", icon: DollarSign },
    ],
    testimonial: "Our social presence went from non-existent to the talk of the town. Foggy IO understands local marketing.",
    author: "David Park, Owner",
  },
  {
    id: 5,
    client: "FitLife Wellness",
    industry: "Health & Fitness",
    service: "Performance Marketing",
    challenge: "Seasonal fluctuations and difficulty retaining members beyond initial signup period.",
    solution: "Implemented year-round campaigns with retention-focused automation and referral programs.",
    results: [
      { metric: "Member Retention", value: "+65%", icon: Users },
      { metric: "New Signups", value: "+210%", icon: TrendingUp },
      { metric: "Revenue Growth", value: "+150%", icon: DollarSign },
    ],
    testimonial: "They don't just focus on acquisition—they helped us build a sustainable growth engine.",
    author: "Jennifer Mills, CEO",
  },
  {
    id: 6,
    client: "LegalEase Partners",
    industry: "Legal Services",
    service: "SEO + PPC",
    challenge: "Highly competitive market with expensive keywords and low organic visibility.",
    solution: "Strategic keyword targeting with quality score optimization and content-driven SEO approach.",
    results: [
      { metric: "Qualified Leads", value: "+380%", icon: Users },
      { metric: "Cost Per Case", value: "-50%", icon: DollarSign },
      { metric: "First Page Rankings", value: "45", icon: Target },
    ],
    testimonial: "Foggy IO helped us compete with firms 10x our size. The results speak for themselves.",
    author: "Robert Kim, Managing Partner",
  },
];

export default function CaseStudies() {
  return (
    <>
      <SEOHead
        title="Case Studies | Client Success Stories | Foggy IO Agency"
        description="See how we've helped 500+ businesses grow with digital marketing. Real results: 340% lead increase, 5x ROAS, $2.5M revenue generated. Read our case studies."
        keywords="digital marketing case studies, marketing success stories, Facebook Ads results, SEO case studies, lead generation examples"
        canonicalUrl="https://adveronix.lovable.app/case-studies"
      />
      <Layout>
        {/* Hero Section */}
        <section className="py-24 hero-gradient relative overflow-hidden">
          <div className="absolute inset-0 hero-glow opacity-50" />
          <div className="container-wide relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block text-accent font-semibold mb-4 tracking-wide uppercase text-sm">
                Case Studies
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Real Results for{" "}
                <span className="text-gradient">Real Businesses</span>
              </h1>
              <p className="text-xl text-primary-foreground/80 mb-8">
                See how we've helped businesses across industries achieve 
                remarkable growth through strategic digital marketing.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 text-center">
                  <div className="text-3xl font-bold text-primary-foreground">500+</div>
                  <div className="text-primary-foreground/70">Clients Served</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 text-center">
                  <div className="text-3xl font-bold text-primary-foreground">$50M+</div>
                  <div className="text-primary-foreground/70">Revenue Generated</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 text-center">
                  <div className="text-3xl font-bold text-primary-foreground">4.5x</div>
                  <div className="text-primary-foreground/70">Average ROAS</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-24 bg-background">
          <div className="container-wide">
            <div className="space-y-16">
              {caseStudies.map((study, index) => (
                <div
                  key={study.id}
                  className="bg-card rounded-2xl border border-border overflow-hidden"
                >
                  <div className="grid lg:grid-cols-2">
                    <div className="p-8 lg:p-12">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="bg-accent/10 text-accent text-sm font-medium px-3 py-1 rounded-full">
                          {study.industry}
                        </span>
                        <span className="bg-secondary text-secondary-foreground text-sm px-3 py-1 rounded-full">
                          {study.service}
                        </span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                        {study.client}
                      </h2>
                      <div className="space-y-4 mb-6">
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">
                            The Challenge
                          </h3>
                          <p className="text-muted-foreground">{study.challenge}</p>
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">
                            Our Solution
                          </h3>
                          <p className="text-muted-foreground">{study.solution}</p>
                        </div>
                      </div>
                      <blockquote className="border-l-4 border-accent pl-4 italic text-muted-foreground mb-4">
                        "{study.testimonial}"
                        <cite className="block mt-2 text-sm font-medium text-foreground not-italic">
                          — {study.author}
                        </cite>
                      </blockquote>
                    </div>
                    <div className="bg-gradient-to-br from-primary to-navy-dark p-8 lg:p-12 flex flex-col justify-center">
                      <h3 className="text-xl font-bold text-primary-foreground mb-6 text-center">
                        Results Achieved
                      </h3>
                      <div className="grid gap-6">
                        {study.results.map((result) => (
                          <div
                            key={result.metric}
                            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex items-center gap-4"
                          >
                            <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center">
                              <result.icon className="h-6 w-6 text-accent-foreground" />
                            </div>
                            <div>
                              <div className="text-3xl font-bold text-primary-foreground">
                                {result.value}
                              </div>
                              <div className="text-primary-foreground/70">
                                {result.metric}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <p className="text-muted-foreground mb-6">
                Ready to become our next success story?
              </p>
              <Link to="/contact">
                <Button variant="accent" size="lg">
                  Start Your Growth Journey <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <CTA />
      </Layout>
    </>
  );
}
