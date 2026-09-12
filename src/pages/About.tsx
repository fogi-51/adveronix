import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Users, Target, TrendingUp, Heart, Lightbulb } from "lucide-react";
import { CTA } from "@/components/sections/CTA";

const values = [
  {
    icon: Target,
    title: "Results-Obsessed",
    description: "We measure success by your business growth, not vanity metrics.",
  },
  {
    icon: Heart,
    title: "Client-First",
    description: "Your goals become our mission. We succeed when you succeed.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We stay ahead of trends to give you a competitive edge.",
  },
  {
    icon: Users,
    title: "Transparency",
    description: "No hidden fees, no jargon. Clear communication, always.",
  },
];

const milestones = [
  { year: "2019", title: "Founded", description: "Started with a vision to democratize digital marketing" },
  { year: "2020", title: "100 Clients", description: "Helped 100 businesses scale during uncertain times" },
  { year: "2021", title: "$5M Ad Spend", description: "Managed over $5M in advertising budgets" },
  { year: "2022", title: "Team of 25", description: "Grew our team of marketing experts" },
  { year: "2023", title: "500+ Clients", description: "Crossed 500 successful client partnerships" },
  { year: "2024", title: "$10M+ Managed", description: "Managing over $10M in annual ad spend" },
];

const team = [
  { name: "Mirjahan Ali", role: "Founder & CEO", specialty: "Growth Strategy" },
  { name: "Manish Singh", role: "Head of Performance", specialty: "Paid Media" },
  { name: "Sara Ross", role: "SEO Director", specialty: "Organic Growth" },
  { name: "Vishal Singh", role: "Creative Lead", specialty: "Brand & Content" },
];

export default function About() {
  return (
    <>
      <SEOHead
        title="About Fogee IO | Digital Marketing Agency Team"
        description="Meet the team behind Fogee IO Agency. Learn about our mission to help businesses scale with data-driven digital marketing. 500+ clients, $10M+ managed."
        keywords="about Fogee IO, digital marketing team, marketing agency story, marketing experts"
        canonicalUrl="https://adveronix.lovable.app/about"
      />
      <Layout>
        {/* Hero Section */}
        <section className="py-24 hero-gradient relative overflow-hidden">
          <div className="absolute inset-0 hero-glow opacity-50" />
          <div className="container-wide relative z-10">
            <div className="max-w-3xl">
              <span className="inline-block text-accent font-semibold mb-4 tracking-wide uppercase text-sm">
                About Us
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                We're on a Mission to{" "}
                <span className="text-gradient">Fuel Business Growth</span>
              </h1>
              <p className="text-xl text-primary-foreground/80 mb-8">
                Fogee IO was founded with a simple belief: every business deserves 
                access to world-class digital marketing. We combine data, creativity, 
                and strategy to deliver results that matter.
              </p>
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  Work With Us <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="py-12 bg-card border-y border-border">
          <div className="container-wide">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="stat-number text-foreground">500+</div>
                <div className="text-muted-foreground">Clients Served</div>
              </div>
              <div className="text-center">
                <div className="stat-number text-foreground">$10M+</div>
                <div className="text-muted-foreground">Ad Spend Managed</div>
              </div>
              <div className="text-center">
                <div className="stat-number text-foreground">50+</div>
                <div className="text-muted-foreground">Team Members</div>
              </div>
              <div className="text-center">
                <div className="stat-number text-foreground">5+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-24 bg-background">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-block text-accent font-semibold mb-4 tracking-wide uppercase text-sm">
                  Our Story
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  From Startup to Industry Leader
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Fogee IO started in 2019 with a small team and a big vision: 
                    to make performance marketing accessible to businesses of all sizes.
                  </p>
                  <p>
                    We saw too many businesses struggle with agencies that promised 
                    the world but delivered confusion, wasted budgets, and zero accountability.
                  </p>
                  <p>
                    So we built something different. An agency built on transparency, 
                    data-driven decisions, and a genuine obsession with client results.
                  </p>
                  <p>
                    Today, we've helped over 500 businesses scale their digital presence, 
                    manage over $10M in advertising spend, and generate millions in 
                    revenue for our clients.
                  </p>
                </div>
                <div className="section-divider mt-8" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {milestones.map((milestone, index) => (
                  <div
                    key={milestone.year}
                    className={`p-6 rounded-xl bg-card border border-border ${
                      index % 3 === 0 ? "col-span-2" : ""
                    }`}
                  >
                    <div className="text-3xl font-bold text-accent mb-2">
                      {milestone.year}
                    </div>
                    <div className="font-semibold text-foreground mb-1">
                      {milestone.title}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {milestone.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-24 bg-secondary/50">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block text-accent font-semibold mb-4 tracking-wide uppercase text-sm">
                Our Values
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                What Drives Us Every Day
              </h2>
              <p className="text-lg text-muted-foreground">
                These core values guide every decision we make and every 
                campaign we launch.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="bg-card rounded-2xl p-8 border border-border text-center card-hover"
                >
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 bg-background">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block text-accent font-semibold mb-4 tracking-wide uppercase text-sm">
                Our Team
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Meet the Marketing Experts
              </h2>
              <p className="text-lg text-muted-foreground">
                A diverse team of strategists, creatives, and data nerds 
                united by a passion for growth.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="bg-card rounded-2xl p-6 border border-border text-center card-hover"
                >
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent to-orange-light flex items-center justify-center mx-auto mb-4 text-3xl font-bold text-accent-foreground">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <h3 className="text-lg font-bold text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-accent font-medium mb-1">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.specialty}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">
                Plus 40+ more talented marketing professionals
              </p>
              <Link to="/careers">
                <Button variant="outline" size="lg">
                  Join Our Team
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Awards */}
        <section className="py-16 bg-primary">
          <div className="container-wide">
            <div className="flex flex-wrap items-center justify-center gap-8">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-white/10 rounded-full px-6 py-3"
                >
                  <Award className="h-6 w-6 text-accent" />
                  <span className="text-primary-foreground font-medium">
                    Top Marketing Agency 202{i + 3}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTA />
      </Layout>
    </>
  );
}
