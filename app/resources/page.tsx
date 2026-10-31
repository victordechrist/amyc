import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { RESOURCE_ITEMS } from "@/lib/data/resources";
import {
  BookOpen,
  ExternalLink,
  Code2,
  ShieldAlert,
  Cpu,
  Wrench,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Resource Hub | Adaobi Muonago Youth Center",
  description:
    "Free learning resources, developer starter kits, certification study guides, and toolkits for youth tech learners.",
};

export default function ResourcesPage() {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Starter Projects":
        return <Code2 className="h-4 w-4 text-accent" />;
      case "Toolkits & Setup":
        return <Wrench className="h-4 w-4 text-accent" />;
      case "Certification Prep":
        return <ShieldAlert className="h-4 w-4 text-accent" />;
      default:
        return <Cpu className="h-4 w-4 text-accent" />;
    }
  };

  return (
    <div className="flex flex-col gap-12 py-8 md:py-12">
      {/* Hero Section */}
      <Section padding="none">
        <SectionHeading
          kicker="Learning Hub"
          title="Starter Kits & Technical Resources"
          description="Access curated starter projects, developer setup guides, certification cheatsheets, and external learning paths curated by AMYC instructors."
        />
      </Section>

      {/* Resource Items Grid */}
      <Section padding="none">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {RESOURCE_ITEMS.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:border-accent/60"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-1.5 rounded-md bg-accent/10 px-2.5 py-1 text-xs font-semibold text-accent">
                    {getCategoryIcon(item.category)}
                    <span>{item.category}</span>
                  </div>
                  {item.isExternal && (
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                  )}
                </div>

                <h3 className="mt-4 font-heading text-lg font-bold text-foreground">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {item.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 border-t border-border/60 pt-4">
                <a
                  href={item.linkUrl}
                  target={item.isExternal ? "_blank" : "_self"}
                  rel={item.isExternal ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:underline"
                >
                  <BookOpen className="h-3.5 w-3.5" />
                  {item.isExternal
                    ? "Access External Repository"
                    : "View Resource Guide"}
                </a>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
