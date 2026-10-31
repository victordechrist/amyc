import Link from "next/link";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { SHOWCASE_PROJECTS } from "@/lib/data/showcase";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, User } from "lucide-react";

export function ShowcaseTeaser() {
  const featuredProjects = SHOWCASE_PROJECTS.filter((p) => p.featured).slice(
    0,
    3,
  );

  return (
    <Section padding="default" className="border-b border-border/40">
      <div className="mb-8 flex flex-col md:flex-row md:items-end md:justify-between">
        <SectionHeading
          kicker="Proof of Work"
          title="Featured Student Projects"
          description="Explore real capstone applications built by our youth during their training tracks."
          align="left"
          className="mb-0 max-w-2xl"
        />
        <div className="mt-4 md:mt-0">
          <Button asChild variant="outline" size="sm">
            <Link href="/showcase" className="gap-2">
              Explore Full Gallery <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {featuredProjects.map((project) => (
          <div
            key={project.id}
            className="group flex flex-col justify-between rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-accent/50 hover:shadow-glow"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Badge variant="accent" className="text-[10px] font-bold">
                  {project.trackName}
                </Badge>
                <div className="flex items-center gap-1 text-[11px] font-medium text-muted-foreground">
                  <User className="h-3 w-3 text-accent" />
                  <span>{project.studentName}</span>
                </div>
              </div>

              <h3 className="font-heading text-base font-bold text-foreground transition-colors group-hover:text-accent">
                {project.title}
              </h3>

              <p className="line-clamp-3 text-xs leading-relaxed text-muted-foreground">
                {project.description}
              </p>
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-4">
              <div className="flex flex-wrap gap-1">
                {project.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="rounded bg-muted px-1.5 py-0.5 text-[10px] text-muted-foreground"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <Link
                href={`/showcase#project-${project.id}`}
                className="flex items-center gap-1 text-xs font-semibold text-accent hover:underline"
              >
                View Project <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
