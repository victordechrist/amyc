import React from "react";
import { TrackData } from "@/lib/data/tracks";
import { Badge } from "@/components/ui/badge";
import { Award, BookOpen } from "lucide-react";

interface CertificationAlignmentProps {
  track: TrackData;
}

export function CertificationAlignment({ track }: CertificationAlignmentProps) {
  const { certificationAlignment } = track;

  return (
    <div className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
            <Award className="h-3.5 w-3.5" />
            <span>Certification Alignment Blueprint</span>
          </div>
          <h2 className="font-heading text-2xl font-bold text-foreground">
            {certificationAlignment.certName}
          </h2>
          {certificationAlignment.examCode && (
            <p className="mt-0.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Exam Code:{" "}
              <span className="text-foreground">
                {certificationAlignment.examCode}
              </span>
            </p>
          )}
        </div>

        <Badge
          variant={certificationAlignment.isPaidCert ? "accent" : "secondary"}
          className="w-fit px-3 py-1 text-xs font-semibold"
        >
          {certificationAlignment.isPaidCert
            ? "Industry Exam Alignment"
            : "Portfolio Outcome Track"}
        </Badge>
      </div>

      <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
        {certificationAlignment.description}
      </p>

      {/* Domain Weights Table */}
      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead className="bg-muted/60 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            <tr>
              <th scope="col" className="px-4 py-3 sm:px-6">
                Domain / Core Area
              </th>
              <th scope="col" className="px-4 py-3 text-right sm:px-6">
                Weight
              </th>
              <th
                scope="col"
                className="hidden px-4 py-3 sm:px-6 md:table-cell"
              >
                Focus Description
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {certificationAlignment.domains.map((domain) => (
              <tr
                key={domain.name}
                className="transition-colors hover:bg-muted/30"
              >
                <td className="flex items-center gap-2 px-4 py-3.5 font-medium text-foreground sm:px-6">
                  <BookOpen className="h-4 w-4 shrink-0 text-accent" />
                  <span>{domain.name}</span>
                </td>
                <td className="px-4 py-3.5 text-right font-mono font-bold text-accent sm:px-6">
                  {domain.weight}
                </td>
                <td className="hidden px-4 py-3.5 text-xs text-muted-foreground sm:px-6 md:table-cell">
                  {domain.description || "N/A"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
