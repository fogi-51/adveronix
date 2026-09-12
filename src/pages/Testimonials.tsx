import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Quote, Play } from "lucide-react";
import { CTA } from "@/components/sections/CTA";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechStart Inc.",
    content:
      "Fogee IO transformed our digital presence completely. Our lead generation increased by 340% in just 3 months. Their strategic approach to Facebook ads is unmatched. They truly understand what it takes to scale a tech startup.",
    rating: 5,
    result: "340% increase in leads",
    service: "Facebook Ads",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Founder",
    company: "GrowthBox",
    content:
      "The ROI we've seen from working with Fogee IO has been incredible. They truly understand performance marketing and deliver results that matter to our bottom line. We've generated over $2.5M in revenue through their campaigns.",
    rating: 5,
    result: "$2.5M revenue generated",
    service: "Google Ads + SEO",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Director",
    company: "ScaleUp Co.",
    content:
      "What sets Fogee IO apart is their data-driven approach and transparency. We always know exactly how our campaigns are performing and where our money is going. The weekly reports are incredibly detailed.",
    rating: 5,
    result: "5x ROAS achieved",
    service: "Performance Marketing",
  },
  {
    id: 4,
    name: "David Park",
    role: "Owner",
    company: "Local Bites Restaurant Group",
    content:
      "Managing multiple restaurant locations is challenging enough without worrying about marketing. Fogee IO took over our entire digital presence and the results have been phenomenal. Foot traffic is up across all locations.",
    rating: 5,
    result: "55% increase in foot traffic",
    service: "Social Media Marketing",
  },
  {
    id: 5,
    name: "Jennifer Mills",
    role: "CEO",
    company: "FitLife Wellness",
    content:
      "They don't just focus on acquisition—they helped us build a sustainable growth engine. Member retention is up 65% and we've doubled our new signups. They really understand the fitness industry.",
    rating: 5,
    result: "65% better retention",
    service: "Lead Generation",
  },
  {
    id: 6,
    name: "Robert Kim",
    role: "Managing Partner",
    company: "LegalEase Partners",
    content:
      "As a law firm, we were skeptical about digital marketing. Fogee IO changed our perspective completely. They helped us compete with firms 10x our size and the quality of leads has been exceptional.",
    rating: 5,
    result: "380% more qualified leads",
    service: "SEO + PPC",
  },
  {
    id: 7,
    name: "Amanda Foster",
    role: "E-commerce Director",
    company: "StyleHub",
    content:
      "Our e-commerce sales were stagnant until we partnered with Fogee IO. Their Facebook and Instagram advertising expertise helped us reach new audiences and scale profitably. Best decision we've made.",
    rating: 5,
    result: "4.8x ROAS on social ads",
    service: "Facebook & Instagram Ads",
  },
  {
    id: 8,
    name: "James Wilson",
    role: "VP of Marketing",
    company: "CloudSync Solutions",
    content:
      "We needed a partner who understood B2B marketing, and Fogee IO delivered. They built a complete lead generation system that consistently fills our pipeline with qualified opportunities.",
    rating: 5,
    result: "300% pipeline growth",
    service: "B2B Lead Generation",
  },
  {
    id: 9,
    name: "Lisa Martinez",
    role: "Owner",
    company: "Bella Beauty Studios",
    content:
      "As a small business, I was worried about competing online. Fogee IO made it possible. They created campaigns that brought in new clients consistently without breaking our budget.",
    rating: 5,
    result: "120+ new clients monthly",
    service: "Local Marketing",
  },
];

const videoTestimonials = [
  {
    id: 1,
    name: "Mark Thompson",
    company: "Innovate Tech",
    thumbnail: null,
    duration: "2:45",
  },
  {
    id: 2,
    name: "Rachel Green",
    company: "Fashion Forward",
    thumbnail: null,
    duration: "3:12",
  },
  {
    id: 3,
    name: "Chris Anderson",
    company: "Peak Performance",
    thumbnail: null,
    duration: "2:30",
  },
];

export default function TestimonialsPage() {
  return (
    <>
      <SEOHead
        title="Client Testimonials & Reviews | Fogee IO Agency"
        description="Read what 500+ clients say about Fogee IO Agency. Real testimonials from businesses that achieved remarkable growth with our digital marketing services."
        keywords="Fogee IO reviews, digital marketing testimonials, client success stories, marketing agency reviews"
        canonicalUrl="https://adveronix.lovable.app/testimonials"
      />
      <Layout>
        {/* Hero Section */}
        <section className="py-24 hero-gradient relative overflow-hidden">
          <div className="absolute inset-0 hero-glow opacity-50" />
          <div className="container-wide relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block text-accent font-semibold mb-4 tracking-wide uppercase text-sm">
                Testimonials
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Trusted by <span className="text-gradient">500+ Businesses</span>
              </h1>
              <p className="text-xl text-primary-foreground/80 mb-8">
                Don't just take our word for it. Here's what our clients have 
                to say about their experience working with Fogee IO.
              </p>
              <div className="flex justify-center items-center gap-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-8 w-8 fill-accent text-accent" />
                ))}
                <span className="ml-2 text-xl font-bold text-primary-foreground">
                  4.9/5
                </span>
                <span className="text-primary-foreground/70">
                  (200+ reviews)
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Video Testimonials */}
        <section className="py-16 bg-card border-b border-border">
          <div className="container-wide">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
              Video Testimonials
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {videoTestimonials.map((video) => (
                <div
                  key={video.id}
                  className="relative aspect-video bg-gradient-to-br from-primary to-navy-dark rounded-xl overflow-hidden group cursor-pointer"
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="h-8 w-8 text-accent-foreground ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="text-white font-semibold">{video.name}</div>
                    <div className="text-white/70 text-sm">{video.company}</div>
                  </div>
                  <div className="absolute top-4 right-4 bg-black/50 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-24 bg-background">
          <div className="container-wide">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-card rounded-2xl p-8 border border-border relative card-hover"
                >
                  <Quote className="absolute top-6 right-6 h-10 w-10 text-accent/20" />
                  
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-accent text-accent"
                      />
                    ))}
                  </div>
                  
                  <p className="text-foreground mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-success/10 text-success font-semibold text-sm px-3 py-1 rounded-full">
                      📈 {testimonial.result}
                    </span>
                    <span className="bg-secondary text-secondary-foreground text-sm px-3 py-1 rounded-full">
                      {testimonial.service}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-4 pt-6 border-t border-border">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-orange-light flex items-center justify-center text-accent-foreground font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-primary">
          <div className="container-wide">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="stat-number text-primary-foreground">4.9</div>
                <div className="text-primary-foreground/70">Average Rating</div>
              </div>
              <div>
                <div className="stat-number text-primary-foreground">200+</div>
                <div className="text-primary-foreground/70">5-Star Reviews</div>
              </div>
              <div>
                <div className="stat-number text-primary-foreground">97%</div>
                <div className="text-primary-foreground/70">Client Retention</div>
              </div>
              <div>
                <div className="stat-number text-primary-foreground">500+</div>
                <div className="text-primary-foreground/70">Happy Clients</div>
              </div>
            </div>
          </div>
        </section>

        {/* Ready to Join */}
        <section className="py-24 bg-background">
          <div className="container-wide">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Ready to Be Our Next Success Story?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join hundreds of businesses that have transformed their 
                digital marketing with Fogee IO.
              </p>
              <Link to="/contact">
                <Button variant="accent" size="lg">
                  Get Your Free Strategy Call <ArrowRight className="ml-2 h-5 w-5" />
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
