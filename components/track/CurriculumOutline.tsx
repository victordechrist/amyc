import React from "react";
import { TrackData } from "@/lib/data/tracks";
import { Check, Clock } from "lucide-react";

interface CurriculumOutlineProps {
  track: TrackData;
}

export function CurriculumOutline({ track }: CurriculumOutlineProps) {
  return (
    <div
      id="curriculum"
      className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8"
    >
      <div className="mb-8">
        <h2 className="font-heading text-2xl font-bold text-foreground">
          Modular Curriculum Outline
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Structured step-by-step learning modules with progress indicators and
          practical topics.
        </p>
      </div>

      <div className="relative ml-3 space-y-8 border-l-2 border-accent/30 pl-6">
        {track.modules.map((module) => (
          <div key={module.moduleNumber} className="group relative">
            {/* Step Node Circle */}
            <div className="absolute -left-[35px] top-1 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground shadow-md transition-transform group-hover:scale-110">
              {module.moduleNumber}
            </div>

            <div className="space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-heading text-lg font-bold text-foreground">
                  Module {module.moduleNumber}: {module.title}
                </h3>
                <span className="inline-flex items-center gap-1 rounded-md bg-muted px-2.5 py-1 text-xs font-semibold text-muted-foreground">
                  <Clock className="h-3.5 w-3.5 text-accent" />
                  {module.duration}
                </span>
              </div>

              <p className="text-sm leading-relaxed text-muted-foreground">
                {module.description}
              </p>

              {/* Topic Pills */}
              <div className="pt-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Key Module Topics:
                </span>
                <ul className="mt-2 grid grid-cols-1 gap-2 text-xs sm:grid-cols-2">
                  {module.keyTopics.map((topic) => (
                    <li
                      key={topic}
                      className="flex items-start gap-2 text-foreground/90"
                    >
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
