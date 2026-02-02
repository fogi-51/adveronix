import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle2,
  ArrowRight,
  Calendar,
  Loader2,
} from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    content: "info@supabased.site",
    subtext: "We'll respond within 24 hours",
  },
  {
    icon: Phone,
    title: "Call Us",
    content: "+91 6290403092",
    subtext: "Mon-Fri 9am-6pm IST",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    content: "Kolkata, India",
    subtext: "By appointment only",
  },
  {
    icon: Clock,
    title: "Response Time",
    content: "< 24 Hours",
    subtext: "Usually much faster",
  },
];

const services = [
  "Facebook & Instagram Ads",
  "Google Ads (PPC)",
  "SEO Services",
  "Social Media Marketing",
  "Lead Generation",
  "Performance Marketing",
  "Branding & Strategy",
  "Other",
];

const budgets = [
  "Under $2,000/month",
  "$2,000 - $5,000/month",
  "$5,000 - $10,000/month",
  "$10,000 - $25,000/month",
  "$25,000+/month",
];

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    service: "",
    budget: "",
    message: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Save to database
      const { error: dbError } = await supabase.from("contacts").insert({
        name: `${formData.firstName} ${formData.lastName}`.trim(),
        email: formData.email,
        company: formData.company || null,
        service: formData.service || null,
        budget: formData.budget || null,
        message: formData.message,
      });

      if (dbError) {
        console.error("Error saving to database:", dbError);
        toast.error("Failed to save message. Please try again.");
        return;
      }

      // Send email notification
      const { error: emailError } = await supabase.functions.invoke("send-contact-email", {
        body: formData,
      });

      if (emailError) {
        console.error("Error sending email notification:", emailError);
        // Don't fail the submission - the data is already saved
      }

      setFormSubmitted(true);
      toast.success("Message sent successfully!");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEOHead
        title="Contact Us | Book a Free Strategy Call | Adveronix Agency"
        description="Ready to grow your business with digital marketing? Contact Adveronix for a free strategy call. Let's discuss how we can help you achieve your marketing goals."
        keywords="contact Adveronix, digital marketing consultation, free marketing audit, marketing strategy call"
        canonicalUrl="https://adveronix.com/contact"
      />
      <Layout>
        {/* Hero Section */}
        <section className="py-24 hero-gradient relative overflow-hidden">
          <div className="absolute inset-0 hero-glow opacity-50" />
          <div className="container-wide relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block text-accent font-semibold mb-4 tracking-wide uppercase text-sm">
                Get In Touch
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Let's <span className="text-gradient">Grow Together</span>
              </h1>
              <p className="text-xl text-primary-foreground/80">
                Ready to scale your business with digital marketing? 
                Get in touch for a free strategy consultation.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Bar */}
        <section className="py-8 bg-card border-b border-border">
          <div className="container-wide">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {contactInfo.map((info) => (
                <div key={info.title} className="text-center">
                  <info.icon className="h-6 w-6 text-accent mx-auto mb-2" />
                  <div className="font-semibold text-foreground">{info.content}</div>
                  <div className="text-sm text-muted-foreground">{info.subtext}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-24 bg-background">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Form */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Book Your Free Strategy Call
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and one of our marketing experts will 
                  reach out within 24 hours to schedule your consultation.
                </p>

                {formSubmitted ? (
                  <div className="bg-success/10 border border-success/30 rounded-2xl p-8 text-center">
                    <CheckCircle2 className="h-16 w-16 text-success mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      Thank You!
                    </h3>
                    <p className="text-muted-foreground">
                      We've received your message and will get back to you within 
                      24 hours. Check your email for confirmation.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input 
                          id="firstName" 
                          required 
                          placeholder="John"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input 
                          id="lastName" 
                          required 
                          placeholder="Smith"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email">Work Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          placeholder="john@company.com"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+91 1234567890"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name *</Label>
                        <Input 
                          id="company" 
                          required 
                          placeholder="Your Company"
                          value={formData.company}
                          onChange={(e) => handleInputChange("company", e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="website">Website URL</Label>
                        <Input
                          id="website"
                          type="url"
                          placeholder="https://yourcompany.com"
                          value={formData.website}
                          onChange={(e) => handleInputChange("website", e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label>Service Interested In *</Label>
                        <Select 
                          required
                          value={formData.service}
                          onValueChange={(value) => handleInputChange("service", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service} value={service}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Monthly Marketing Budget</Label>
                        <Select
                          value={formData.budget}
                          onValueChange={(value) => handleInputChange("budget", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            {budgets.map((budget) => (
                              <SelectItem key={budget} value={budget}>
                                {budget}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Tell Us About Your Goals *</Label>
                      <Textarea
                        id="message"
                        required
                        rows={5}
                        placeholder="What are your main marketing challenges? What would success look like for you?"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                      />
                    </div>

                    <Button 
                      type="submit" 
                      variant="accent" 
                      size="lg" 
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Book My Free Strategy Call
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      By submitting this form, you agree to our privacy policy. 
                      We'll never share your information.
                    </p>
                  </form>
                )}
              </div>

              {/* Right Side - Benefits */}
              <div>
                <div className="bg-card rounded-2xl border border-border p-8 mb-8">
                  <h3 className="text-xl font-bold text-foreground mb-6">
                    What You'll Get
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Free 30-minute strategy consultation",
                      "Comprehensive marketing audit",
                      "Custom growth roadmap",
                      "Competitor analysis insights",
                      "Clear pricing and timeline",
                      "No obligation to proceed",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-primary to-navy-dark rounded-2xl p-8 text-primary-foreground">
                  <Calendar className="h-10 w-10 text-accent mb-4" />
                  <h3 className="text-xl font-bold mb-2">
                    Prefer to Book Directly?
                  </h3>
                  <p className="text-primary-foreground/80 mb-6">
                    Skip the form and book a time that works best for you 
                    using our online calendar.
                  </p>
                  <Button
                    variant="hero-outline"
                    className="w-full"
                    onClick={() => window.open("https://calendly.com", "_blank")}
                  >
                    Schedule on Calendar
                  </Button>
                </div>

                <div className="mt-8 text-center">
                  <p className="text-muted-foreground mb-4">
                    Trusted by industry leaders
                  </p>
                  <div className="flex justify-center gap-8 opacity-50">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-16 h-8 bg-muted rounded flex items-center justify-center text-xs font-bold text-muted-foreground"
                      >
                        Logo
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-secondary/50">
          <div className="container-wide">
            <div className="bg-card rounded-2xl border border-border overflow-hidden">
              <div className="aspect-[3/1] bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-accent mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Interactive map would go here
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
