import React from "react";
import { TrackData } from "@/lib/data/tracks";
import { Badge } from "@/components/ui/badge";
import { Code, Terminal, CheckCircle2 } from "lucide-react";

interface TrackProjectsProps {
  track: TrackData;
}

export function TrackProjects({ track }: TrackProjectsProps) {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-1">
        <h2 className="font-heading text-2xl font-bold text-foreground">
          What You&apos;ll Build: Hands-On Projects & Labs
        </h2>
        <p className="text-sm text-muted-foreground">
          Gain real-world experience through capstones and practical laboratory
          assignments.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {track.projects.map((project, idx) => (
          <div
            key={project.title}
            className="flex flex-col justify-between rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-200 hover:border-accent/50 hover:shadow-glow"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-xs font-bold text-accent">
                  #{idx + 1}
                </span>
                <Badge variant="outline" className="text-[10px] font-semibold">
                  Lab Project
                </Badge>
              </div>

              <div>
                <h3 className="font-heading text-base font-bold text-foreground">
                  {project.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
              </div>

              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Deliverables:
                </span>
                <ul className="mt-1.5 space-y-1 text-xs text-muted-foreground">
                  {project.deliverables.map((del) => (
                    <li key={del} className="flex items-start gap-1.5">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                      <span className="text-foreground/90">{del}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-4 border-t border-border/60 pt-3">
              <div className="flex flex-wrap gap-1">
                {project.skillsLearned.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="px-2 py-0 text-[10px]"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Special Code Example for DevOps / Terraform Track if available */}
      {track.projects.some((p) => p.codeSnippet) && (
        <div className="mt-8 rounded-xl border border-slate-800 bg-slate-950 p-6 text-slate-100 shadow-xl">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Terminal className="h-5 w-5 text-accent" />
              <h3 className="font-heading text-base font-bold text-white">
                Hands-On Code Example
              </h3>
            </div>
            <div className="flex items-center gap-1.5 font-mono text-xs text-slate-400">
              <Code className="h-3.5 w-3.5" />
              <span>
                {
                  track.projects.find((p) => p.codeSnippet)?.codeSnippet
                    ?.filename
                }
              </span>
            </div>
          </div>

          <pre className="overflow-x-auto rounded-lg border border-slate-800 bg-slate-900 p-4 font-mono text-xs leading-relaxed text-cyan-300">
            <code>
              {track.projects.find((p) => p.codeSnippet)?.codeSnippet?.code}
            </code>
          </pre>
        </div>
      )}
    </div>
  );
}
