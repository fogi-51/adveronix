import { useState } from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin, ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const footerLinks = {
  services: [{
    name: "Facebook & Instagram Ads",
    href: "/services#social-ads"
  }, {
    name: "Google Ads (PPC)",
    href: "/services#google-ads"
  }, {
    name: "SEO Services",
    href: "/services#seo"
  }, {
    name: "Social Media Marketing",
    href: "/services#smm"
  }, {
    name: "Lead Generation",
    href: "/services#lead-gen"
  }],
  company: [{
    name: "About Us",
    href: "/about"
  }, {
    name: "Case Studies",
    href: "/case-studies"
  }, {
    name: "Blog",
    href: "/blog"
  }, {
    name: "Testimonials",
    href: "/testimonials"
  }, {
    name: "Careers",
    href: "/careers"
  }],
  support: [{
    name: "Contact Us",
    href: "/contact"
  }, {
    name: "FAQ",
    href: "/faq"
  }, {
    name: "Privacy Policy",
    href: "/privacy"
  }, {
    name: "Terms of Service",
    href: "/terms"
  }]
};

const socialLinks = [{
  icon: Facebook,
  href: "https://www.facebook.com/share/18KTKeokXK/",
  label: "Facebook"
}, {
  icon: Instagram,
  href: "https://instagram.com",
  label: "Instagram"
}, {
  icon: Linkedin,
  href: "https://linkedin.com",
  label: "LinkedIn"
}, {
  icon: Twitter,
  href: "https://twitter.com",
  label: "Twitter"
}];

export function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      toast.error("Please enter your email address");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('send-newsletter-subscription', {
        body: { email: email.trim() }
      });

      if (error) throw error;

      toast.success("Thank you for subscribing! You'll receive our marketing insights soon.");
      setEmail("");
    } catch (error: any) {
      console.error("Subscription error:", error);
      toast.error("Failed to subscribe. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="container-wide py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold font-display mb-2">
                Get Marketing Insights Delivered
              </h3>
              <p className="text-primary-foreground/70">
                Subscribe for weekly tips on growing your business online.
              </p>
            </div>
            <form onSubmit={handleSubscribe} className="flex gap-3 w-full lg:w-auto">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
                className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/50 w-full lg:w-80" 
              />
              <Button type="submit" variant="accent" className="shrink-0" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Subscribing...
                  </>
                ) : (
                  <>
                    Subscribe <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-xl font-display">A</span>
              </div>
              <span className="text-xl font-bold font-display">Adveronix</span>
            </Link>
            <p className="text-primary-foreground/70 mb-6 max-w-sm">
              Your trusted partner for digital growth. We help businesses scale 
              with data-driven marketing strategies that deliver measurable results.
            </p>
            <div className="space-y-3">
              <a href="mailto:info@supabased.site" className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors">
                <Mail className="h-5 w-5" />
                info@supabased.site
              </a>
              <a href="tel:+916290403092" className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors">
                <Phone className="h-5 w-5" />
                +91 6290403092
              </a>
              <div className="flex items-center gap-3 text-primary-foreground/70">
                <MapPin className="h-5 w-5" />
                Kolkata, India
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold font-display text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map(link => (
                <li key={link.name}>
                  <Link to={link.href} className="text-primary-foreground/70 hover:text-accent transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold font-display text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map(link => (
                <li key={link.name}>
                  <Link to={link.href} className="text-primary-foreground/70 hover:text-accent transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold font-display text-lg mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map(link => (
                <li key={link.name}>
                  <Link to={link.href} className="text-primary-foreground/70 hover:text-accent transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-wide py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} Adveronix Agency. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map(social => (
                <a 
                  key={social.label} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors" 
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
