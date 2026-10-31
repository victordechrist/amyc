import Link from "next/link";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SKILL_TRACKS } from "@/lib/data";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function TracksSection() {
  return (
    <Section padding="default" className="border-b border-border/40">
      <SectionHeading
        kicker="Specialized Pathways"
        title="Five Core Skill Tracks"
        description="Every track is structured around real-world industry demand, certifications, and portfolio-ready capstones."
        align="center"
      />

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {SKILL_TRACKS.map((track) => {
          const Icon = track.icon;
          const trackHref = `/tracks/${track.slug}`;

          return (
            <Card
              key={track.slug}
              className="group flex flex-col justify-between transition-all duration-200 hover:border-accent/50 hover:shadow-glow"
            >
              <CardHeader>
                <div className="mb-3 flex items-center justify-between">
                  <div className="rounded-lg bg-primary/10 p-2.5 text-primary group-hover:bg-accent group-hover:text-accent-foreground dark:bg-accent/10 dark:text-accent">
                    <Icon className="h-6 w-6" />
                  </div>
                  <Badge variant="accent">{track.badge}</Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-accent">
                  {track.title}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {track.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-3">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Key Skills & Certs
                </div>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  {track.certifications.map((cert) => (
                    <li key={cert} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                      <span className="text-foreground">{cert}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="pt-2">
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="w-full justify-between font-semibold group-hover:text-accent"
                >
                  <Link href={trackHref}>
                    <span>Learn Track Pathway</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
