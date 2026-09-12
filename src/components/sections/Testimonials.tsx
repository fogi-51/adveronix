import { Star, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    image: null,
    content:
      "Fogee IO transformed our digital presence completely. Our lead generation increased by 340% in just 3 months. Their strategic approach to Facebook ads is unmatched.",
    rating: 5,
    result: "340% increase in leads",
  },
  {
    name: "Michael Chen",
    role: "Founder, GrowthBox",
    image: null,
    content:
      "The ROI we've seen from working with Fogee IO has been incredible. They truly understand performance marketing and deliver results that matter to our bottom line.",
    rating: 5,
    result: "$2.5M revenue generated",
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director, ScaleUp Co.",
    image: null,
    content:
      "What sets Fogee IO apart is their data-driven approach and transparency. We always know exactly how our campaigns are performing and where our money is going.",
    rating: 5,
    result: "5x ROAS achieved",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-cream relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
      
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold mb-4 tracking-wide uppercase text-sm">
            Client Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Trusted by <span className="text-gradient">500+ Businesses</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it. Here's what our clients have to say 
            about working with Fogee IO Agency.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-card rounded-2xl p-8 border border-border relative card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="absolute top-6 right-6 h-10 w-10 text-accent/20" />
              
              <div className="flex gap-1 mb-6">
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
              
              <div className="inline-block bg-success/10 text-success font-semibold text-sm px-4 py-2 rounded-full mb-6">
                📈 {testimonial.result}
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
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/testimonials">
            <Button variant="outline" size="lg">
              Read More Success Stories
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
