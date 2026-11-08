import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { SKILL_TRACKS } from "@/lib/data";
import { TrackComparison } from "@/components/track/TrackComparison";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Skill Pathways & Technical Tracks",
  description:
    "Explore AMYC's 5 technical skill pathways: Cloud Computing, Cybersecurity, Software Development, Networking Infrastructure, and DevOps Engineering.",
};

export default function TracksPage() {
  return (
    <div className="flex flex-col gap-12 py-8 md:py-12">
      {/* Header */}
      <Section padding="none">
        <SectionHeading
          kicker="Skill Pathways"
          title="Explore All Five Technical Tracks"
          description="Hands-on learning tailored to high-demand technology sectors, certifications, and real-world capstone portfolios."
        />
      </Section>

      {/* Interactive Pathfinder / Comparison Component */}
      <Section padding="none">
        <TrackComparison />
      </Section>

      {/* Track Cards Grid */}
      <Section padding="none">
        <div className="mb-6">
          <h2 className="font-heading text-xl font-bold text-foreground">
            All Specialized Pathways
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SKILL_TRACKS.map((track) => {
            const Icon = track.icon;
            return (
              <Card
                key={track.slug}
                className="group flex flex-col justify-between transition-all hover:border-accent/50 hover:shadow-glow"
              >
                <CardHeader>
                  <div className="mb-3 flex items-center justify-between">
                    <div className="rounded-lg bg-accent/10 p-2.5 text-accent dark:bg-accent/20">
                      <Icon className="h-6 w-6" />
                    </div>
                    <Badge variant="accent">{track.badge}</Badge>
                  </div>
                  <CardTitle className="transition-colors group-hover:text-accent">
                    {track.title}
                  </CardTitle>
                  <CardDescription className="text-xs leading-relaxed">
                    {track.description}
                  </CardDescription>
                </CardHeader>

                <CardFooter className="flex flex-col gap-3 pt-2">
                  <div className="flex w-full justify-between border-t border-border/60 pt-3 text-xs text-muted-foreground">
                    <span>
                      Duration:{" "}
                      <strong className="text-foreground">
                        {track.duration}
                      </strong>
                    </span>
                  </div>

                  <Button
                    asChild
                    variant="accent"
                    size="sm"
                    className="w-full justify-between font-semibold"
                  >
                    <Link href={`/tracks/${track.slug}`}>
                      <span>View Track Details</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </Section>
    </div>
  );
}
