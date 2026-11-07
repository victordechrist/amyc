import { Metadata } from "next";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { Section } from "@/components/ui/section";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SignOutButton } from "@/components/auth/SignOutButton";
import { roleLabel } from "@/lib/roles";

export const metadata: Metadata = {
  title: "Account",
  description: "Your AMYC account details.",
};

export default async function AccountPage() {
  const session = await auth();
  if (!session?.user?.id) {
    redirect("/sign-in");
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: { name: true, email: true, role: true, createdAt: true },
  });

  if (!user) {
    redirect("/sign-in");
  }

  return (
    <Section padding="lg">
      <div className="mx-auto flex max-w-2xl flex-col gap-8">
        <div>
          <h1 className="font-heading text-3xl font-bold text-foreground">
            Account
          </h1>
          <p className="mt-2 text-muted-foreground">
            Your AMYC profile and membership details.
          </p>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between gap-4">
              <div>
                <CardTitle>{user.name ?? "AMYC Member"}</CardTitle>
                <CardDescription>{user.email}</CardDescription>
              </div>
              <Badge variant="accent">{roleLabel(user.role)}</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <dl className="grid grid-cols-1 gap-4 text-sm sm:grid-cols-2">
              <div>
                <dt className="font-semibold text-foreground">Email</dt>
                <dd className="text-muted-foreground">{user.email}</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Role</dt>
                <dd className="text-muted-foreground">{roleLabel(user.role)}</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Member since</dt>
                <dd className="text-muted-foreground">
                  {user.createdAt.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </dd>
              </div>
            </dl>
          </CardContent>
        </Card>

        <div className="flex flex-wrap items-center gap-3">
          <SignOutButton />
          <p className="text-sm text-muted-foreground">
            Profile editing and password changes are coming soon.
          </p>
        </div>
      </div>
    </Section>
  );
}
