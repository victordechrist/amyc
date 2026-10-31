import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Heart, Sparkles } from "lucide-react";

export function CTASection() {
  return (
    <Section
      padding="lg"
      className="relative overflow-hidden bg-slate-950 text-slate-100 dark:bg-slate-950"
    >
      {/* Background glow graphics */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -z-0 h-96 w-[600px] -translate-x-1/2 rounded-full bg-accent/20 blur-3xl" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
        <Badge variant="accent" className="mb-4 gap-1.5 px-3 py-1 text-xs">
          <Sparkles className="h-3.5 w-3.5" />
          Join the Movement
        </Badge>

        <h2 className="mb-4 font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
          Ready to Build Your Tech Future?
        </h2>

        <p className="mb-8 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
          Whether you are a student ready to learn or an industry partner
          looking to mentor, donate, or recruit, Adaobi Muonago Youth Center
          welcomes you.
        </p>

        <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
          <Button
            asChild
            size="lg"
            variant="accent"
            className="gap-2 font-semibold shadow-lg"
          >
            <Link href="/get-involved">
              Start Your Journey <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="gap-2 border-slate-700 bg-slate-900/60 text-slate-200 hover:bg-slate-800 hover:text-white"
          >
            <Link href="/contact">
              <Heart className="h-4 w-4 text-accent" />
              Contact Our Team
            </Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
