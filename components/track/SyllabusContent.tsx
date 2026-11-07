import React from "react";
import { BookOpen, ChevronDown, GraduationCap } from "lucide-react";
import { getSyllabus } from "@/lib/data/syllabi";

interface SyllabusContentProps {
  slug: string;
}

const OPEN_SECTION_COUNT = 6;

export function SyllabusContent({ slug }: SyllabusContentProps) {
  const syllabus = getSyllabus(slug);
  if (!syllabus) return null;

  return (
    <div className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
      <div className="mb-6 flex items-center gap-3">
        <div className="rounded-lg bg-accent/10 p-2 text-accent">
          <BookOpen className="h-6 w-6" />
        </div>
        <div>
          <h2 className="font-heading text-2xl font-bold text-foreground">
            Full Course Syllabus
          </h2>
          <p className="text-xs text-muted-foreground">
            {syllabus.title} · {syllabus.subtitle}
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {syllabus.sections.map((section, index) => {
          const isOpen = index < OPEN_SECTION_COUNT;
          const body = (
            <div className="space-y-3">
              {section.paragraphs.map((paragraph, pIndex) => (
                <p
                  key={pIndex}
                  className="text-sm leading-relaxed text-muted-foreground"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          );

          if (isOpen) {
            return (
              <section key={section.id} className="space-y-3">
                <h3 className="flex items-center gap-2 font-heading text-lg font-bold text-foreground">
                  <GraduationCap className="h-4 w-4 text-accent" />
                  {section.title}
                </h3>
                {body}
              </section>
            );
          }

          return (
            <details
              key={section.id}
              className="group rounded-lg border border-border bg-background/50 p-4"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-heading text-base font-bold text-foreground [&::-webkit-details-marker]:hidden">
                {section.title}
                <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-180" />
              </summary>
              <div className="mt-4">{body}</div>
            </details>
          );
        })}
      </div>
    </div>
  );
}
