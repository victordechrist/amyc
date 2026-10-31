import { HeroSection } from "@/components/home/hero-section";
import { ImpactSection } from "@/components/home/impact-section";
import { TracksSection } from "@/components/home/tracks-section";
import { ShowcaseTeaser } from "@/components/home/ShowcaseTeaser";
import { SuccessStories } from "@/components/SuccessStories";
import { CTASection } from "@/components/home/cta-section";
import { Section } from "@/components/ui/section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ImpactSection />
      <TracksSection />
      <ShowcaseTeaser />
      <Section
        padding="default"
        className="border-b border-border/40 bg-muted/20"
      >
        <SuccessStories />
      </Section>
      <CTASection />
    </>
  );
}
