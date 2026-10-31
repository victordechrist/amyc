import React from "react";
import { TrackData } from "@/lib/data/tracks";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Target, CheckCircle2 } from "lucide-react";

interface TrackOverviewProps {
  track: TrackData;
}

export function TrackOverview({ track }: TrackOverviewProps) {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      {/* Overview & Why it Matters */}
      <div className="space-y-6 lg:col-span-2">
        <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <div className="mb-3 flex items-center gap-2 text-accent">
            <Lightbulb className="h-5 w-5" />
            <h2 className="font-heading text-xl font-bold text-foreground">
              Why This Track Matters
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            {track.whyItMatters}
          </p>
        </div>

        {/* Skills Covered */}
        <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <h3 className="mb-3 font-heading text-lg font-bold text-foreground">
            Core Skills & Competencies You Will Master
          </h3>
          <div className="flex flex-wrap gap-2">
            {track.skills.map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="px-3 py-1 text-xs font-semibold"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Certifications Card */}
      <div className="flex flex-col justify-between rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-accent">
            <Target className="h-5 w-5" />
            <h2 className="font-heading text-xl font-bold text-foreground">
              Target Certifications
            </h2>
          </div>
          <p className="text-xs text-muted-foreground">
            This track is tailored to prepare learners directly for
            industry-accredited certifications or verified portfolio milestones.
          </p>
          <ul className="space-y-3 pt-2 text-sm">
            {track.certifications.map((cert) => (
              <li key={cert} className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span className="font-medium text-foreground">{cert}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
