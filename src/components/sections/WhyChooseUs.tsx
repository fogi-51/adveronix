import { 
  Shield, 
  Zap, 
  BarChart3, 
  Users, 
  Target, 
  Clock 
} from "lucide-react";

const reasons = [
  {
    icon: BarChart3,
    title: "Data-Driven Approach",
    description:
      "Every decision is backed by analytics and real-time data to ensure maximum campaign performance.",
  },
  {
    icon: Target,
    title: "Results-Focused",
    description:
      "We're obsessed with ROI. Your success is our success, and we're not happy until you see real results.",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description:
      "Get a dedicated account manager and team of specialists working exclusively on your campaigns.",
  },
  {
    icon: Shield,
    title: "Transparent Reporting",
    description:
      "Full visibility into your campaigns with detailed reports and regular strategy calls.",
  },
  {
    icon: Zap,
    title: "Fast Implementation",
    description:
      "Launch campaigns quickly with our streamlined processes. See results in as little as 2 weeks.",
  },
  {
    icon: Clock,
    title: "No Long-Term Contracts",
    description:
      "We earn your business every month. No lock-ins, just consistent performance that speaks for itself.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-background">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block text-accent font-semibold mb-4 tracking-wide uppercase text-sm">
              Why Fogee IO
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Your Growth Partner,{" "}
              <span className="text-gradient">Not Just An Agency</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're not here to just run ads. We're here to understand your business, 
              identify growth opportunities, and execute strategies that move the needle.
            </p>
            <div className="section-divider" />
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className="p-6 rounded-xl bg-card border border-border hover:border-accent/50 transition-colors"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <reason.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{reason.title}</h3>
                <p className="text-sm text-muted-foreground">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
