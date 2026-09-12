import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, MapPin, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const openPositions = [
  {
    title: "Senior Digital Marketing Specialist",
    department: "Marketing",
    location: "Remote / Kolkata",
    type: "Full-time",
    description: "Lead and execute digital marketing campaigns across multiple channels.",
  },
  {
    title: "PPC Campaign Manager",
    department: "Advertising",
    location: "Remote",
    type: "Full-time",
    description: "Manage and optimize Google Ads and Facebook Ads campaigns for clients.",
  },
  {
    title: "SEO Analyst",
    department: "SEO",
    location: "Kolkata, India",
    type: "Full-time",
    description: "Develop and implement SEO strategies to improve organic search rankings.",
  },
  {
    title: "Content Marketing Intern",
    department: "Content",
    location: "Remote",
    type: "Internship",
    description: "Assist in creating compelling content for blogs, social media, and campaigns.",
  },
];

const Careers = () => {
  return (
    <>
      <SEOHead
        title="Careers at Fogee IO | Join Our Digital Marketing Team"
        description="Join Fogee IO Agency and build your career in digital marketing. Explore open positions in SEO, PPC, social media marketing, and more."
        keywords="digital marketing careers, marketing jobs, SEO jobs, PPC specialist jobs, Fogee IO careers"
        canonicalUrl="https://adveronix.lovable.app/careers"
      />
      <Layout>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container-wide">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">
                Build Your Career at <span className="text-primary">Fogee IO</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Join our team of passionate digital marketers and help businesses grow online. 
                We offer exciting opportunities, continuous learning, and a collaborative culture.
              </p>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-16">
          <div className="container-wide">
            <h2 className="text-3xl font-bold font-display text-center mb-12">Open Positions</h2>
            <div className="grid gap-6 max-w-4xl mx-auto">
              {openPositions.map((position, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl">{position.title}</CardTitle>
                        <CardDescription className="mt-1">{position.department}</CardDescription>
                      </div>
                      <Button asChild>
                        <Link to="/contact" aria-label={`Apply for ${position.title} position`}>
                          Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{position.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" /> {position.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" /> {position.type}
                      </span>
                      <span className="flex items-center gap-1">
                        <Briefcase className="h-4 w-4" /> {position.department}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="py-16 bg-muted/30">
          <div className="container-wide">
            <h2 className="text-3xl font-bold font-display text-center mb-12">Why Join Fogee IO?</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Growth Opportunities</h3>
                <p className="text-muted-foreground">Continuous learning and career advancement paths.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌍</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Remote Flexibility</h3>
                <p className="text-muted-foreground">Work from anywhere with flexible schedules.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Collaborative Culture</h3>
                <p className="text-muted-foreground">Supportive team environment and mentorship.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container-wide text-center">
            <h2 className="text-2xl font-bold font-display mb-4">Don't see a perfect fit?</h2>
            <p className="text-muted-foreground mb-6">
              We're always looking for talented individuals. Send us your resume!
            </p>
            <Button asChild size="lg">
              <Link to="/contact" aria-label="Contact us about career opportunities">
                Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Careers;
