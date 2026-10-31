import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { IMPACT_STATS } from "@/lib/data";

export function ImpactSection() {
  return (
    <Section
      padding="default"
      className="border-b border-border/40 bg-muted/30"
    >
      <SectionHeading
        kicker="Measurable Impact"
        title="Empowering Youth Through Proven Pathways"
        description="Our programs bridge the tech skills gap through industry certifications, practical portfolio building, and direct professional mentorship."
        align="center"
      />

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {IMPACT_STATS.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.id}
              className="flex flex-col items-center justify-between rounded-xl border border-border/60 bg-card p-6 text-center shadow-sm transition-all hover:border-accent/40 hover:shadow-glow"
            >
              <div className="mb-4 rounded-full bg-accent/10 p-3 text-accent dark:bg-accent/20">
                <Icon className="h-6 w-6" />
              </div>

              <div className="font-heading text-3xl font-black tracking-tight text-foreground sm:text-4xl">
                {stat.value}
              </div>

              <div className="mt-1 text-sm font-bold text-foreground">
                {stat.label}
              </div>

              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                {stat.description}
              </p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
