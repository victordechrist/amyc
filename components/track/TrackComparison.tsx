"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SKILL_TRACKS, TrackData } from "@/lib/data/tracks";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Sparkles,
  Compass,
  CheckCircle2,
  ArrowRight,
  Layers,
} from "lucide-react";

export function TrackComparison() {
  const [activeTab, setActiveTab] = useState<"compare" | "finder">("finder");
  const [selectedInterest, setSelectedInterest] = useState<string>("");

  const interests = [
    {
      id: "cloud",
      label: "Cloud & Virtual Servers",
      trackSlug: "cloud-computing",
      description: "Building scalable AWS systems and cloud storage.",
    },
    {
      id: "sec",
      label: "Security & Threat Defense",
      trackSlug: "cybersecurity",
      description: "Ethical hacking, SIEM monitoring, and defense.",
    },
    {
      id: "web",
      label: "Web Apps & Coding",
      trackSlug: "software-development",
      description: "Building modern websites with TypeScript & React.",
    },
    {
      id: "net",
      label: "Networks & Hardware",
      trackSlug: "networking",
      description: "Routers, switches, IP subnetting, and Cisco gear.",
    },
    {
      id: "devops",
      label: "Automation & Infrastructure as Code",
      trackSlug: "devops-infra",
      description: "Terraform automation, CI/CD pipelines, and Docker.",
    },
  ];

  const matchedTrack = SKILL_TRACKS.find((t) => t.slug === selectedInterest);

  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
      {/* Header Tabs */}
      <div className="mb-6 flex flex-col gap-4 border-b border-border/60 pb-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Interactive Guidance</span>
          </div>
          <h2 className="mt-2 font-heading text-2xl font-bold text-foreground">
            Find Your Ideal Learning Path
          </h2>
          <p className="text-sm text-muted-foreground">
            Compare our 5 technical tracks side-by-side or use our quick
            pathfinder.
          </p>
        </div>

        <div className="flex rounded-lg bg-muted p-1">
          <button
            type="button"
            onClick={() => setActiveTab("finder")}
            className={`flex items-center gap-1.5 rounded-md px-3.5 py-1.5 text-xs font-bold transition-colors ${
              activeTab === "finder"
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Compass className="h-3.5 w-3.5 text-accent" />
            <span>Pathfinder Quiz</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("compare")}
            className={`flex items-center gap-1.5 rounded-md px-3.5 py-1.5 text-xs font-bold transition-colors ${
              activeTab === "compare"
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Layers className="h-3.5 w-3.5 text-accent" />
            <span>Compare Matrix</span>
          </button>
        </div>
      </div>

      {/* Pathfinder View */}
      {activeTab === "finder" && (
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Step 1: Select your main area of technical interest
          </p>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {interests.map((item) => {
              const isSelected = selectedInterest === item.trackSlug;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedInterest(item.trackSlug)}
                  className={`flex flex-col items-start rounded-xl border p-4 text-left transition-all ${
                    isSelected
                      ? "border-accent bg-accent/10 shadow-sm"
                      : "border-border bg-background hover:border-accent/50"
                  }`}
                >
                  <div className="flex w-full items-center justify-between">
                    <span className="font-heading text-sm font-bold text-foreground">
                      {item.label}
                    </span>
                    {isSelected && (
                      <CheckCircle2 className="h-4 w-4 text-accent" />
                    )}
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {item.description}
                  </p>
                </button>
              );
            })}
          </div>

          {matchedTrack && (
            <div className="mt-6 rounded-xl border border-accent/40 bg-accent/5 p-6 dark:bg-card">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="accent">Recommended Match</Badge>
                    <span className="text-xs font-bold text-muted-foreground">
                      {matchedTrack.duration}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground">
                    {matchedTrack.title} Track
                  </h3>
                  <p className="max-w-xl text-xs text-muted-foreground">
                    {matchedTrack.whyItMatters}
                  </p>
                </div>

                <div className="flex-shrink-0 pt-2 md:pt-0">
                  <Button
                    asChild
                    variant="accent"
                    size="sm"
                    className="gap-2 font-bold"
                  >
                    <Link href={`/tracks/${matchedTrack.slug}`}>
                      <span>Explore {matchedTrack.title}</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Side-by-side Matrix View */}
      {activeTab === "compare" && (
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="p-3 font-bold text-foreground">Track Name</th>
                <th className="p-3 font-bold text-foreground">Duration</th>
                <th className="p-3 font-bold text-foreground">
                  Aligned Cert / Outcome
                </th>
                <th className="p-3 font-bold text-foreground">Prerequisite</th>
                <th className="p-3 font-bold text-foreground">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60">
              {SKILL_TRACKS.map((track: TrackData) => (
                <tr
                  key={track.slug}
                  className="transition-colors hover:bg-muted/30"
                >
                  <td className="p-3 font-bold text-foreground">
                    <div className="flex items-center gap-2">
                      <Badge
                        variant="accent"
                        className="px-1.5 py-0 text-[10px]"
                      >
                        {track.title}
                      </Badge>
                    </div>
                  </td>
                  <td className="p-3 text-muted-foreground">
                    {track.duration}
                  </td>
                  <td className="p-3 font-medium text-foreground">
                    {track.certifications[0]}
                  </td>
                  <td className="p-3 text-muted-foreground">
                    {track.prerequisites}
                  </td>
                  <td className="p-3">
                    <Link
                      href={`/tracks/${track.slug}`}
                      className="inline-flex items-center gap-1 font-semibold text-accent hover:underline"
                    >
                      View Pathway <ArrowRight className="h-3 w-3" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
