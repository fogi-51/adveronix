const stats = [
  { value: "500+", label: "Happy Clients", suffix: "" },
  { value: "$10M", label: "Ad Spend Managed", suffix: "+" },
  { value: "300", label: "Average ROI", suffix: "%" },
  { value: "50", label: "Marketing Experts", suffix: "+" },
];

export function Stats() {
  return (
    <section className="py-16 bg-primary">
      <div className="container-wide">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="stat-number text-primary-foreground mb-2">
                {stat.value}
                <span className="text-accent">{stat.suffix}</span>
              </div>
              <div className="text-primary-foreground/70 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
