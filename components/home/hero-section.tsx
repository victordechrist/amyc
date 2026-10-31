import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Code,
  Cloud,
  Users,
} from "lucide-react";

export function HeroSection() {
  return (
    <Section
      padding="lg"
      className="relative overflow-hidden border-b border-border/40 bg-gradient-to-b from-primary/10 via-background to-background pt-16 md:pt-24 lg:pt-32"
    >
      {/* Background ambient lighting effects */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-96 w-[600px] -translate-x-1/2 rounded-full bg-accent/15 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 top-1/2 -z-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />

      <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
        <Badge
          variant="accent"
          className="mb-6 gap-1.5 px-3.5 py-1.5 text-xs font-semibold shadow-sm"
        >
          <Sparkles className="h-3.5 w-3.5" />
          Empowering Next-Gen Tech Talent
        </Badge>

        <h1 className="mb-6 font-heading text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Launch Your Tech Career with <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-primary via-accent to-accent bg-clip-text text-transparent">
            Market-Ready Industry Skills
          </span>
        </h1>

        <p className="mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
          Adaobi Muonago Youth Center (AMYC) equips young leaders with hands-on
          technical tracks, industry certifications, 1:1 mentorship, and
          real-world project portfolios.
        </p>

        <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
          <Button
            asChild
            size="lg"
            variant="accent"
            className="gap-2 font-semibold shadow-md"
          >
            <Link href="/tracks">
              Explore Tracks <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-border/80 font-semibold"
          >
            <Link href="/get-involved">Get Involved</Link>
          </Button>
        </div>

        {/* Feature Highlights Pill Bar */}
        <div className="mt-14 grid grid-cols-2 gap-4 text-xs font-medium text-muted-foreground sm:grid-cols-4">
          <div className="flex items-center justify-center gap-2 rounded-lg border border-border/40 bg-muted/50 px-3 py-2">
            <Cloud className="h-4 w-4 text-accent" />
            <span>Cloud & DevOps</span>
          </div>
          <div className="flex items-center justify-center gap-2 rounded-lg border border-border/40 bg-muted/50 px-3 py-2">
            <ShieldCheck className="h-4 w-4 text-accent" />
            <span>Cybersecurity</span>
          </div>
          <div className="flex items-center justify-center gap-2 rounded-lg border border-border/40 bg-muted/50 px-3 py-2">
            <Code className="h-4 w-4 text-accent" />
            <span>Full-Stack Software</span>
          </div>
          <div className="flex items-center justify-center gap-2 rounded-lg border border-border/40 bg-muted/50 px-3 py-2">
            <Users className="h-4 w-4 text-accent" />
            <span>1:1 Mentorship</span>
          </div>
        </div>
      </div>
    </Section>
  );
}
