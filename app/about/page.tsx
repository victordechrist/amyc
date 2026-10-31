import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { ABOUT_CONTENT, TEAM_MEMBERS } from "@/lib/data/about";
import { Users, Target, Heart, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Adaobi Muonago Youth Center",
  description:
    "Learn about our mission, founding story, core values, and team dedicated to empowering youth through practical tech education.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-12 py-8 md:py-12">
      {/* Hero Section */}
      <Section padding="none">
        <SectionHeading
          kicker="About AMYC"
          title="Empowering the Next Generation of Tech Leaders"
          description={ABOUT_CONTENT.mission}
        />
      </Section>

      {/* Story & Vision */}
      <Section padding="none">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-6 md:p-8">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary dark:bg-accent/10 dark:text-accent">
              <Target className="h-5 w-5" />
            </div>
            <h3 className="font-heading text-xl font-bold text-foreground">
              Our Founding Story
            </h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              {ABOUT_CONTENT.story}
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 md:p-8">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary dark:bg-accent/10 dark:text-accent">
              <Heart className="h-5 w-5" />
            </div>
            <h3 className="font-heading text-xl font-bold text-foreground">
              Our Vision
            </h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              {ABOUT_CONTENT.vision}
            </p>
          </div>
        </div>
      </Section>

      {/* Core Values */}
      <Section padding="none">
        <div className="rounded-2xl border border-border bg-muted/40 p-6 md:p-10">
          <div className="mb-8 text-center">
            <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
              Our Core Principles
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              The foundational values guiding our curriculum, community, and
              support systems.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ABOUT_CONTENT.values.map((val) => (
              <div
                key={val.title}
                className="rounded-xl border border-border bg-background p-5 shadow-sm"
              >
                <div className="flex items-center gap-2 font-bold text-foreground">
                  <CheckCircle className="h-4 w-4 text-accent" />
                  <h4>{val.title}</h4>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Team Placeholders */}
      <Section padding="none">
        <div className="mb-8">
          <SectionHeading
            kicker="Our Leadership & Instructors"
            title="Meet the Team Behind AMYC"
            description="Industry professionals, educators, and mentors dedicated to guiding every student."
          />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              className="flex flex-col justify-between rounded-xl border border-border bg-card p-6 text-center shadow-sm"
            >
              <div>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 font-heading text-xl font-bold text-primary dark:bg-accent/20 dark:text-accent">
                  <Users className="h-8 w-8" />
                </div>
                <h4 className="font-heading text-base font-bold text-foreground">
                  {member.name}
                </h4>
                <p className="mt-0.5 text-xs font-medium text-accent">
                  {member.title}
                </p>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                  {member.bio}
                </p>
              </div>
              <div className="mt-4 border-t border-border/60 pt-3">
                <span className="inline-block rounded-full bg-muted px-2.5 py-0.5 text-[10px] font-semibold text-muted-foreground">
                  {member.roleType}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
