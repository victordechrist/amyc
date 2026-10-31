import React from "react";
import { TESTIMONIALS, Testimonial } from "@/lib/data/testimonials";
import { SectionHeading } from "@/components/ui/section-heading";
import { Quote, Award } from "lucide-react";

interface SuccessStoriesProps {
  kicker?: string;
  title?: string;
  description?: string;
  limit?: number;
  className?: string;
}

export function SuccessStories({
  kicker = "Youth Success Stories",
  title = "Hear From Our Alumni",
  description = "Real stories from graduates who turned their passion into rewarding technical careers through AMYC pathways.",
  limit,
  className = "",
}: SuccessStoriesProps) {
  const stories = limit ? TESTIMONIALS.slice(0, limit) : TESTIMONIALS;

  return (
    <div className={`space-y-8 ${className}`}>
      <SectionHeading
        kicker={kicker}
        title={title}
        description={description}
        align="center"
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stories.map((t: Testimonial) => (
          <div
            key={t.id}
            className="group flex flex-col justify-between rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-accent/40 hover:shadow-glow"
          >
            <div>
              {/* Top Row: Photo Placeholder + Track Tag */}
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 font-heading text-sm font-bold text-primary shadow-inner dark:bg-accent/20 dark:text-accent">
                  {t.avatarInitials}
                </div>
                <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-[10px] font-bold text-accent">
                  {t.track}
                </span>
              </div>

              {/* Quote */}
              <div className="relative">
                <Quote className="mb-2 h-5 w-5 text-accent/40" />
                <p className="text-xs italic leading-relaxed text-foreground/90">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>
            </div>

            {/* Author Footer */}
            <div className="mt-6 border-t border-border/60 pt-4">
              <h4 className="font-heading text-sm font-bold text-foreground transition-colors group-hover:text-accent">
                {t.name}
              </h4>
              <p className="text-xs font-medium text-muted-foreground">
                {t.role} {t.company && `• ${t.company}`}
              </p>

              {t.certificationEarned && (
                <div className="mt-2.5 flex items-center gap-1.5 rounded-md bg-muted px-2 py-1 text-[10px] text-muted-foreground">
                  <Award className="h-3 w-3 flex-shrink-0 text-accent" />
                  <span className="truncate">{t.certificationEarned}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
