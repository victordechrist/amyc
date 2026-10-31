import React from "react";
import { TrackData } from "@/lib/data/tracks";
import { ExternalLink, BookOpen, Download } from "lucide-react";

interface TrackResourcesProps {
  track: TrackData;
}

export function TrackResources({ track }: TrackResourcesProps) {
  return (
    <div className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
      <div className="mb-6 flex items-center gap-3">
        <div className="rounded-lg bg-accent/10 p-2 text-accent">
          <BookOpen className="h-6 w-6" />
        </div>
        <div>
          <h2 className="font-heading text-2xl font-bold text-foreground">
            Related Learning Resources & Official Guides
          </h2>
          <p className="text-xs text-muted-foreground">
            Curated free study materials, official exam blueprints, and
            documentation.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {track.resources.map((res) => (
          <a
            key={res.title}
            href={res.url}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col justify-between rounded-lg border border-border p-4 transition-all hover:border-accent hover:bg-accent/5"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-semibold text-accent">
                <span className="inline-flex items-center gap-1">
                  <Download className="h-3.5 w-3.5" />
                  {res.type}
                </span>
                <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
              <h3 className="font-heading text-sm font-bold text-foreground group-hover:text-accent">
                {res.title}
              </h3>
              <p className="text-xs leading-relaxed text-muted-foreground">
                {res.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
