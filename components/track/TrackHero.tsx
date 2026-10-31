import React from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrackData } from "@/lib/data/tracks";
import {
  Clock,
  GraduationCap,
  Award,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

interface TrackHeroProps {
  track: TrackData;
  onApplyClick?: () => void;
}

export function TrackHero({ track }: TrackHeroProps) {
  const Icon = track.icon;

  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm md:p-10">
      <div className="pointer-events-none absolute -right-12 -top-12 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />

      <div className="mb-6">
        <Button
          asChild
          variant="ghost"
          size="sm"
          className="gap-2 text-muted-foreground hover:text-foreground"
        >
          <Link href="/tracks">
            <ArrowLeft className="h-4 w-4" /> Back to All Tracks
          </Link>
        </Button>
      </div>

      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-3xl space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent dark:bg-accent/20">
              <Icon className="h-6 w-6" />
            </div>
            <Badge variant="accent" className="px-3 py-1 text-xs font-semibold">
              {track.badge}
            </Badge>
            {track.certificationAlignment.isPaidCert ? (
              <Badge
                variant="outline"
                className="flex items-center gap-1 border-primary/30 text-xs text-primary dark:text-accent"
              >
                <Award className="h-3.5 w-3.5" /> Exam Aligned (
                {track.certificationAlignment.examCode})
              </Badge>
            ) : (
              <Badge
                variant="outline"
                className="flex items-center gap-1 border-emerald-500/30 text-xs text-emerald-600 dark:text-emerald-400"
              >
                <Award className="h-3.5 w-3.5" /> Portfolio Outcome
              </Badge>
            )}
          </div>

          <div>
            <h1 className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {track.title}
            </h1>
            <p className="mt-2 text-lg font-medium text-accent dark:text-cyan-400">
              {track.tagline}
            </p>
          </div>

          <p className="text-base leading-relaxed text-muted-foreground">
            {track.description}
          </p>

          <div className="flex flex-wrap items-center gap-6 border-t border-border/60 pt-2 text-xs font-medium text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-accent" />
              <span>
                Duration:{" "}
                <strong className="text-foreground">{track.duration}</strong>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4 text-accent" />
              <span>
                Prerequisite:{" "}
                <strong className="text-foreground">
                  {track.prerequisites}
                </strong>
              </span>
            </div>
          </div>
        </div>

        <div className="flex shrink-0 flex-col gap-3 pt-4 lg:w-64 lg:pt-0">
          <Button
            asChild
            variant="accent"
            size="lg"
            className="w-full justify-between font-bold shadow-md"
          >
            <a href="#enroll-form">
              <span>Join Cohort / Enroll</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full justify-between font-semibold"
          >
            <a href="#curriculum">
              <span>View Curriculum</span>
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
