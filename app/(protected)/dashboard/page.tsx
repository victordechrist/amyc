import { Metadata } from "next";
import Link from "next/link";
import { auth } from "@/auth";
import { Section } from "@/components/ui/section";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { roleLabel } from "@/lib/roles";
import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  FolderKanban,
  Trophy,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Your AMYC learning dashboard.",
};

const QUICK_LINKS = [
  {
    title: "Skill Tracks",
    description: "Explore the 5 specialized pathways and their curricula.",
    href: "/tracks",
    icon: BookOpen,
  },
  {
    title: "Bootcamps & Programs",
    description: "See upcoming cohorts, schedules, and outcomes.",
    href: "/programs",
    icon: GraduationCap,
  },
  {
    title: "Project Showcase",
    description: "Browse student projects and portfolio work.",
    href: "/showcase",
    icon: FolderKanban,
  },
  {
    title: "Learning Resources",
    description: "Toolkits, guides, and cheatsheets to accelerate learning.",
    href: "/resources",
    icon: Trophy,
  },
];

export default async function DashboardPage() {
  const session = await auth();
  const user = session?.user;
  const firstName = user?.name?.trim().split(" ")[0] || "there";

  return (
    <Section padding="lg">
      <div className="flex flex-col gap-8">
        {/* Greeting */}
        <div>
          <Badge variant="accent" className="mb-3">
            {roleLabel(user?.role)} Account
          </Badge>
          <h1 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
            Welcome back, {firstName}
          </h1>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Your AMYC learning hub is ready. Pick a pathway, follow the
            curriculum, and build your portfolio.
          </p>
        </div>

        {/* Quick links */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {QUICK_LINKS.map((link) => {
            const Icon = link.icon;
            return (
              <Link key={link.href} href={link.href} className="group">
                <Card className="flex h-full flex-col transition-colors group-hover:border-accent">
                  <CardHeader>
                    <div className="mb-2 w-fit rounded-lg bg-primary/10 p-2 text-primary dark:bg-accent/10 dark:text-accent">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <CardTitle className="text-lg">{link.title}</CardTitle>
                    <CardDescription>{link.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto">
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent">
                      Explore{" "}
                      <ArrowRight
                        className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* Progress placeholder */}
        <Card>
          <CardHeader>
            <CardTitle>Your learning journey</CardTitle>
            <CardDescription>
              Track your module progress, lab submissions, and mentor sessions
              here once your cohort starts.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Not enrolled in a cohort yet?{" "}
              <Link
                href="/get-involved"
                className="font-semibold text-accent hover:underline"
              >
                Get involved
              </Link>{" "}
              to join the next bootcamp.
            </p>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
