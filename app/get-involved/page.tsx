import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { GET_INVOLVED_OPTIONS } from "@/lib/data/get-involved";
import { InterestForm } from "@/components/forms/InterestForm";
import {
  CheckCircle2,
  UserCheck,
  HeartHandshake,
  Building2,
  Gift,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Get Involved | Adaobi Muonago Youth Center",
  description:
    "Join AMYC as a student, mentor, corporate partner, or donor. Support youth tech skill building and career readiness.",
};

export default function GetInvolvedPage({
  searchParams,
}: {
  searchParams?: { role?: string; track?: string };
}) {
  const selectedRole = searchParams?.role || "student";
  const selectedTrack = searchParams?.track || "";

  const getRoleIcon = (id: string) => {
    switch (id) {
      case "students":
        return <UserCheck className="h-5 w-5 text-accent" />;
      case "mentors":
        return <HeartHandshake className="h-5 w-5 text-accent" />;
      case "partners":
        return <Building2 className="h-5 w-5 text-accent" />;
      case "donate":
        return <Gift className="h-5 w-5 text-accent" />;
      default:
        return null;
    }
  };

  const getRoleValue = (id: string) => {
    switch (id) {
      case "mentors":
        return "mentor";
      case "partners":
        return "partner";
      case "donate":
        return "donor";
      default:
        return "student";
    }
  };

  return (
    <div className="flex flex-col gap-12 py-8 md:py-12">
      {/* Hero Section */}
      <Section padding="none">
        <SectionHeading
          kicker="Join Our Mission"
          title="Get Involved With AMYC"
          description="Whether you are an aspiring student, experienced mentor, corporate hiring partner, or generous donor, there are meaningful ways to collaborate with us."
        />

        {/* Anchor Link Quick Nav */}
        <div className="mt-6 flex flex-wrap gap-2">
          {GET_INVOLVED_OPTIONS.map((opt) => (
            <a
              key={opt.id}
              href={`#${opt.anchorId}`}
              className="rounded-lg border border-border bg-card px-3.5 py-1.5 text-xs font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              {opt.role}
            </a>
          ))}
        </div>
      </Section>

      {/* Anchored Sections for Students, Mentors, Partners, Donate */}
      <Section padding="none">
        <div className="space-y-8">
          {GET_INVOLVED_OPTIONS.map((option) => (
            <div
              key={option.id}
              id={option.anchorId}
              className="scroll-mt-24 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-accent/50 md:p-8"
            >
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div className="space-y-3 md:max-w-2xl">
                  <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-bold text-accent">
                    {getRoleIcon(option.id)}
                    <span>{option.role}</span>
                  </div>

                  <h2 className="font-heading text-xl font-bold text-foreground sm:text-2xl">
                    {option.headline}
                  </h2>

                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {option.description}
                  </p>

                  <ul className="space-y-2 pt-2">
                    {option.bulletPoints.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-xs text-foreground"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex-shrink-0 pt-2 md:pt-0">
                  <a
                    href={`/get-involved?role=${getRoleValue(option.id)}#registration-form`}
                    className="inline-flex w-full items-center justify-center rounded-md bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground shadow transition-colors hover:bg-accent/90 md:w-auto"
                  >
                    {option.ctaLabel}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Registration & Interest Form Stub Section */}
      <Section padding="none">
        <div id="registration-form" className="scroll-mt-24">
          <InterestForm
            key={`${selectedRole}-${selectedTrack}`}
            defaultRole={selectedRole}
            defaultTrack={selectedTrack}
            title="Get Started & Register Your Interest"
            subtitle="Complete the form below to apply as a student, sign up to mentor, or inquire about partnership."
          />
        </div>
      </Section>
    </div>
  );
}
