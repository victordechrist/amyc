import { notFound } from "next/navigation";
import { Section } from "@/components/ui/section";
import { SKILL_TRACKS } from "@/lib/data";
import { TrackHero } from "@/components/track/TrackHero";
import { TrackOverview } from "@/components/track/TrackOverview";
import { CertificationAlignment } from "@/components/track/CertificationAlignment";
import { CurriculumOutline } from "@/components/track/CurriculumOutline";
import { TrackProjects } from "@/components/track/TrackProjects";
import { TrackOutcomes } from "@/components/track/TrackOutcomes";
import { TrackResources } from "@/components/track/TrackResources";
import { InterestForm } from "@/components/forms/InterestForm";

interface TrackDetailProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return SKILL_TRACKS.map((track) => ({
    slug: track.slug,
  }));
}

export function generateMetadata({ params }: TrackDetailProps) {
  const track = SKILL_TRACKS.find((t) => t.slug === params.slug);
  if (!track) return { title: "Track Not Found" };

  return {
    title: `${track.title} Skill Track`,
    description: track.description,
  };
}

export default function TrackDetailPage({ params }: TrackDetailProps) {
  const track = SKILL_TRACKS.find((t) => t.slug === params.slug);

  if (!track) {
    notFound();
  }

  return (
    <Section padding="lg" className="space-y-12">
      {/* 1. Track Hero */}
      <TrackHero track={track} />

      {/* 2. Overview + Why it matters */}
      <TrackOverview track={track} />

      {/* 3. Certification Alignment */}
      <CertificationAlignment track={track} />

      {/* 4. Modular Curriculum Outline */}
      <CurriculumOutline track={track} />

      {/* 5. What You'll Build (Projects & Labs) */}
      <TrackProjects track={track} />

      {/* 6. Outcomes / Career Pathways */}
      <TrackOutcomes track={track} />

      {/* 7. Related Resources */}
      <TrackResources track={track} />

      {/* 8. CTA / Interest Form Section */}
      <div id="enroll-form" className="scroll-mt-20 pt-4">
        <InterestForm
          defaultRole="student"
          defaultTrack={track.slug}
          title={`Join ${track.title} Cohort`}
          subtitle={`Submit your interest to join the upcoming ${track.title} bootcamp or access learning materials.`}
        />
      </div>
    </Section>
  );
}
