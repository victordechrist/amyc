"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { SHOWCASE_PROJECTS, ShowcaseProject } from "@/lib/data/showcase";
import { SKILL_TRACKS } from "@/lib/data/tracks";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Code2,
  User,
  ExternalLink,
  FolderSearch,
  Sparkles,
} from "lucide-react";

export function ShowcaseGallery() {
  const [selectedTrack, setSelectedTrack] = useState<string>("all");

  const filterCategories = useMemo(() => {
    return [
      { slug: "all", title: "All Tracks" },
      ...SKILL_TRACKS.map((track) => ({
        slug: track.slug,
        title: track.title,
      })),
    ];
  }, []);

  const filteredProjects = useMemo(() => {
    if (selectedTrack === "all") return SHOWCASE_PROJECTS;
    return SHOWCASE_PROJECTS.filter((p) => p.trackSlug === selectedTrack);
  }, [selectedTrack]);

  return (
    <div className="space-y-8">
      {/* Category Filter Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-2 md:justify-start">
        {filterCategories.map((category) => {
          const isActive = selectedTrack === category.slug;
          return (
            <button
              key={category.slug}
              type="button"
              onClick={() => setSelectedTrack(category.slug)}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                isActive
                  ? "bg-accent text-accent-foreground shadow-sm ring-2 ring-accent/30"
                  : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
              }`}
            >
              {category.title}
            </button>
          );
        })}
      </div>

      {/* Projects Grid or Empty State */}
      {filteredProjects.length === 0 ? (
        <div className="my-12 flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-card p-12 text-center shadow-sm">
          <div className="mb-4 rounded-full bg-muted p-4 text-muted-foreground">
            <FolderSearch className="h-8 w-8" />
          </div>
          <h3 className="font-heading text-lg font-bold text-foreground">
            No projects found for this filter
          </h3>
          <p className="mt-2 max-w-md text-sm text-muted-foreground">
            We are currently compiling capstone submissions for this specific
            skill track cohort. Check back soon or select another category
            above.
          </p>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setSelectedTrack("all")}
            className="mt-6"
          >
            Reset Filters
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project: ShowcaseProject) => (
            <div
              key={project.id}
              id={`project-${project.id}`}
              className="group flex scroll-mt-24 flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-accent/50 hover:shadow-glow"
            >
              {/* Screenshot / Preview Graphic Placeholder */}
              <div className="relative flex h-48 w-full items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 via-muted to-accent/10 p-6 dark:from-primary/20 dark:via-card dark:to-accent/20">
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] opacity-30 [background-size:16px_16px] dark:bg-[radial-gradient(#374151_1px,transparent_1px)]" />

                {/* Simulated IDE / Window frame */}
                <div className="relative z-10 w-full rounded-lg border border-border/80 bg-background/90 p-4 shadow-md backdrop-blur-sm transition-transform duration-300 group-hover:scale-105">
                  <div className="mb-3 flex items-center justify-between border-b border-border/60 pb-2">
                    <div className="flex space-x-1.5">
                      <div className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                      <div className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                      <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="font-mono text-[10px] text-muted-foreground">
                      capstone-v1.0
                    </span>
                  </div>

                  <div className="space-y-1.5 text-left">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-accent">
                      <Code2 className="h-3.5 w-3.5" />
                      <span className="truncate">{project.title}</span>
                    </div>
                    <div className="h-2 w-3/4 rounded bg-muted" />
                    <div className="h-2 w-1/2 rounded bg-muted/60" />
                  </div>
                </div>

                {/* Track Badge on Top Right */}
                <div className="absolute right-3 top-3 z-20">
                  <Badge
                    variant="accent"
                    className="text-[10px] font-bold shadow-sm"
                  >
                    {project.trackName}
                  </Badge>
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col justify-between p-6">
                <div className="space-y-3">
                  {/* Student Name Placeholder */}
                  <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                    <User className="h-3.5 w-3.5 text-accent" />
                    <span>
                      Built by{" "}
                      <strong className="text-foreground">
                        {project.studentName}
                      </strong>
                    </span>
                  </div>

                  <h3 className="font-heading text-lg font-bold text-foreground transition-colors group-hover:text-accent">
                    {project.title}
                  </h3>

                  <p className="line-clamp-3 text-xs leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                </div>

                <div className="mt-6 space-y-4 border-t border-border/60 pt-4">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Links / Action */}
                  <div className="flex items-center justify-between pt-1 text-xs">
                    <span className="inline-flex items-center gap-1 font-semibold text-accent">
                      <Sparkles className="h-3.5 w-3.5" /> AMYC Capstone
                    </span>
                    <Link
                      href={`/tracks/${project.trackSlug}`}
                      className="inline-flex items-center gap-1 font-semibold text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <span>View Track</span>
                      <ExternalLink className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
