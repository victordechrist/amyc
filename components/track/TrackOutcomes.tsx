import React from "react";
import { TrackData } from "@/lib/data/tracks";
import { Briefcase, TrendingUp } from "lucide-react";

interface TrackOutcomesProps {
  track: TrackData;
}

export function TrackOutcomes({ track }: TrackOutcomesProps) {
  return (
    <div className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
      <div className="mb-6 flex items-center gap-3">
        <div className="rounded-lg bg-accent/10 p-2 text-accent">
          <Briefcase className="h-6 w-6" />
        </div>
        <div>
          <h2 className="font-heading text-2xl font-bold text-foreground">
            Outcomes & Career Pathways
          </h2>
          <p className="text-xs text-muted-foreground">
            High-demand job roles and career trajectories for graduates of this
            skill pathway.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {track.outcomes.map((outcome) => (
          <div
            key={outcome.role}
            className="flex flex-col justify-between rounded-lg border border-border/80 bg-muted/30 p-5 transition-colors hover:bg-muted/60"
          >
            <div className="space-y-2">
              <h3 className="font-heading text-base font-bold text-foreground">
                {outcome.role}
              </h3>
              <p className="text-xs leading-relaxed text-muted-foreground">
                {outcome.description}
              </p>
            </div>

            {outcome.avgSalaryRange && (
              <div className="mt-4 flex items-center justify-between border-t border-border/50 pt-3 text-xs font-semibold text-accent">
                <span className="flex items-center gap-1 font-normal text-muted-foreground">
                  <TrendingUp className="h-3.5 w-3.5 text-accent" /> Est.
                  Salary:
                </span>
                <span className="font-mono">{outcome.avgSalaryRange}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
