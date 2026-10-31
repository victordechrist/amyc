import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { IMPACT_STATS, OUTCOME_METRICS } from "@/lib/data/metrics";
import { SuccessStories } from "@/components/SuccessStories";
import Link from "next/link";
import { Sparkles, Trophy, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Impact & Metrics | Adaobi Muonago Youth Center",
  description:
    "Discover AMYC's key outcome statistics, student success stories, certification pass rates, and alumni showcases.",
};

export default function ImpactPage() {
  return (
    <div className="flex flex-col gap-12 py-8 md:py-12">
      {/* Hero Section */}
      <Section padding="none">
        <SectionHeading
          kicker="Impact & Results"
          title="Empowering Youth Through Measurable Outcomes"
          description="See how AMYC transforms lives through accessible technical education, certification readiness, and targeted industry mentorship."
        />
      </Section>

      {/* Primary Key Stats */}
      <Section padding="none">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {IMPACT_STATS.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                className="rounded-xl border border-border bg-card p-6 text-center shadow-sm"
              >
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary dark:bg-accent/20 dark:text-accent">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="font-heading text-3xl font-extrabold text-foreground sm:text-4xl">
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

      {/* Outcome Metrics Banner */}
      <Section padding="none">
        <div className="rounded-2xl border border-border bg-primary/5 p-6 dark:bg-card md:p-8">
          <div className="mb-6 flex items-center gap-2">
            <Trophy className="h-5 w-5 text-accent" />
            <h2 className="font-heading text-xl font-bold text-foreground">
              Career Placement & Graduate Outcomes
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {OUTCOME_METRICS.map((metric) => (
              <div key={metric.title} className="space-y-1">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {metric.title}
                </p>
                <p className="font-heading text-2xl font-bold text-accent">
                  {metric.value}
                </p>
                <p className="text-xs text-muted-foreground">
                  {metric.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Student Success Stories Component */}
      <Section padding="none">
        <SuccessStories />
      </Section>

      {/* Showcase Teaser Callout */}
      <Section padding="none">
        <div className="rounded-2xl border border-border bg-gradient-to-r from-primary/10 via-background to-accent/10 p-6 text-center shadow-sm md:flex md:items-center md:justify-between md:p-10 md:text-left">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold text-accent">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Alumni & Capstone Showcase</span>
            </div>
            <h3 className="font-heading text-2xl font-bold text-foreground">
              Explore What Our Students Build
            </h3>
            <p className="text-sm text-muted-foreground">
              From automated cloud deployments to full-stack web applications,
              see live capstone projects created by our graduates.
            </p>
          </div>

          <div className="mt-6 flex-shrink-0 md:mt-0">
            <Button asChild variant="accent" size="lg">
              <Link href="/showcase" className="gap-2">
                Explore Showcase <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
