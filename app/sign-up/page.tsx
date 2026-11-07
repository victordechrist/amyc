import { Metadata } from "next";
import { Suspense } from "react";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { SignUpForm } from "@/components/auth/SignUpForm";

export const metadata: Metadata = {
  title: "Create Account",
  description: "Create your AMYC student account.",
};

export default async function SignUpPage() {
  const session = await auth();
  if (session?.user) {
    redirect("/dashboard");
  }

  return (
    <div className="container mx-auto flex max-w-md flex-col px-4 py-16 md:px-6">
      <Suspense fallback={null}>
        <SignUpForm />
      </Suspense>
    </div>
  );
}
