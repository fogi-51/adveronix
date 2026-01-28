import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, TrendingUp, Users, Target } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { value: "500+", label: "Clients Served", icon: Users },
  { value: "10M+", label: "Ad Spend Managed", icon: Target },
  { value: "300%", label: "Average ROI", icon: TrendingUp },
];

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image - Using img tag for LCP optimization */}
      <img 
        src={heroBg}
        alt=""
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-primary/80" />
      {/* Background Effects */}
      <div className="absolute inset-0 hero-glow" />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="container-wide relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-primary-foreground/90 border border-white/10">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              Trusted by 500+ Growing Businesses
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
              Scale Your Business with{" "}
              <span className="text-gradient">Data-Driven</span>{" "}
              Digital Marketing
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-xl">
              From Facebook Ads to SEO, we craft performance marketing strategies 
              that turn clicks into customers and drive measurable growth for your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button variant="hero" size="xl" className="w-full sm:w-auto">
                  Book Free Strategy Call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button variant="hero-outline" size="xl" className="w-full sm:w-auto">
                <Play className="mr-2 h-5 w-5" />
                Watch Our Story
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-orange-light border-2 border-primary"
                    />
                  ))}
                </div>
                <span className="text-sm text-primary-foreground/70">
                  ⭐ 4.9/5 from 200+ reviews
                </span>
              </div>
            </div>
          </div>

          {/* Right Content - Stats Cards */}
          <div className="relative">
            <div className="grid gap-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`glass rounded-2xl p-6 card-hover ${
                    index === 1 ? "ml-8" : index === 2 ? "ml-16" : ""
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                      <stat.icon className="h-7 w-7 text-accent" />
                    </div>
                    <div>
                      <div className="stat-number text-foreground">{stat.value}</div>
                      <div className="text-muted-foreground font-medium">{stat.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground rounded-2xl px-6 py-3 font-bold shadow-glow float">
              🚀 Results Guaranteed
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
