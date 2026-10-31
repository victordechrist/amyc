import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { ShowcaseGallery } from "@/components/showcase/ShowcaseGallery";

export const metadata: Metadata = {
  title: "Project Showcase | Adaobi Muonago Youth Center",
  description:
    "Explore capstone projects built by youth graduates across Cloud Computing, Cybersecurity, Software Development, Networking, and DevOps.",
};

export default function ShowcasePage() {
  return (
    <div className="flex flex-col gap-12 py-8 md:py-12">
      {/* Hero Section */}
      <Section padding="none">
        <SectionHeading
          kicker="Student Capstone Gallery"
          title="Explore Real Projects Built By AMYC Graduates"
          description="From automated cloud deployments and security threat detection playbooks to production-grade web applications, discover proof-of-concept projects built by our talented youth."
        />
      </Section>

      {/* Filterable Showcase Component */}
      <Section padding="none">
        <ShowcaseGallery />
      </Section>
    </div>
  );
}
