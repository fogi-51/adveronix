import { Search, Lightbulb, Rocket, BarChart3 } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery & Audit",
    description:
      "We dive deep into your business, competitors, and market to identify opportunities and create a custom strategy.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Strategy Development",
    description:
      "Our team crafts a comprehensive marketing plan with clear goals, KPIs, and tactics tailored to your objectives.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Launch & Execute",
    description:
      "We implement your campaigns across all channels, continuously optimizing for maximum performance.",
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Analyze & Scale",
    description:
      "With detailed analytics, we identify winning strategies and scale what works to drive exponential growth.",
  },
];

export function Process() {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold mb-4 tracking-wide uppercase text-sm">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            How We <span className="text-gradient">Drive Growth</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A proven 4-step process that has helped 500+ businesses achieve 
            their digital marketing goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-accent to-accent/20 z-0" />
              )}
              
              <div className="bg-card rounded-2xl p-8 border border-border relative z-10 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-5xl font-bold text-accent/70 font-display">
                    {step.number}
                  </span>
                  <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center">
                    <step.icon className="h-7 w-7 text-accent-foreground" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
