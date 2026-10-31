import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { PROGRAM_OVERVIEW, UPCOMING_COHORTS } from "@/lib/data/programs";
import { SKILL_TRACKS } from "@/lib/data/tracks";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Programs & Cohorts | Adaobi Muonago Youth Center",
  description:
    "Explore our youth tech bootcamps, cohort model, certification preparation, and mentorship structure.",
};

export default function ProgramsPage() {
  return (
    <div className="flex flex-col gap-12 py-8 md:py-12">
      {/* Hero Section */}
      <Section padding="none">
        <SectionHeading
          kicker="AMYC Programs"
          title="Youth Tech Bootcamps & Cohorts"
          description={PROGRAM_OVERVIEW.description}
        />
        <div className="mt-6 flex flex-wrap gap-4">
          <Button asChild variant="accent">
            <Link href="/get-involved">Apply for Next Cohort</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/tracks">Explore All 5 Tracks</Link>
          </Button>
        </div>
      </Section>

      {/* Program Pillars */}
      <Section padding="none">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {PROGRAM_OVERVIEW.pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-xl border border-border bg-card p-6 shadow-sm"
            >
              <h3 className="font-heading text-lg font-bold text-foreground">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Skill Tracks Overview Grid */}
      <Section padding="none">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="font-heading text-2xl font-bold text-foreground">
              Available Training Pathways
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Choose from 5 specialized tracks built for in-demand tech roles.
            </p>
          </div>
          <Link
            href="/tracks"
            className="hidden items-center gap-1.5 text-xs font-semibold text-accent hover:underline sm:flex"
          >
            Detailed Track Hub <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_TRACKS.map((track) => {
            const Icon = track.icon;
            return (
              <div
                key={track.slug}
                className="flex flex-col justify-between rounded-xl border border-border bg-card p-5"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="rounded-lg bg-primary/10 p-2 text-primary dark:bg-accent/20 dark:text-accent">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="rounded-full bg-muted px-2.5 py-0.5 text-[11px] font-semibold text-muted-foreground">
                      {track.duration}
                    </span>
                  </div>
                  <h3 className="mt-3 font-heading text-base font-bold text-foreground">
                    {track.title}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">
                    {track.description}
                  </p>
                </div>
                <div className="mt-4 border-t border-border/60 pt-3">
                  <Link
                    href={`/tracks/${track.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-accent hover:underline"
                  >
                    View Track Overview <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Upcoming Cohorts Schedule */}
      <Section padding="none">
        <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
          <div className="mb-6 flex items-center gap-2">
            <Calendar className="h-5 w-5 text-accent" />
            <h2 className="font-heading text-xl font-bold text-foreground">
              Upcoming Cohort Schedule
            </h2>
          </div>

          <div className="space-y-4">
            {UPCOMING_COHORTS.map((cohort) => (
              <div
                key={cohort.name}
                className="flex flex-col justify-between gap-4 rounded-xl border border-border/80 bg-background p-4 sm:flex-row sm:items-center"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-heading text-base font-bold text-foreground">
                      {cohort.name}
                    </h3>
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold ${
                        cohort.status === "Open for Applications"
                          ? "bg-accent/20 text-accent dark:bg-accent/30"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {cohort.status}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Start Date:{" "}
                    <span className="font-semibold text-foreground">
                      {cohort.startDate}
                    </span>{" "}
                    • Duration: {cohort.duration}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {cohort.tracksAvailable.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-muted/60 px-2 py-0.5 text-[10px] text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <Button
                  asChild
                  size="sm"
                  variant={
                    cohort.status === "Open for Applications"
                      ? "accent"
                      : "outline"
                  }
                >
                  <Link href="/get-involved">Apply Now</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
