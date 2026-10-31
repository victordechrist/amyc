"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SKILL_TRACKS, FOOTER_NAV_LINKS, SOCIAL_LINKS } from "@/lib/data";
import { Code2, Send, CheckCircle2, AlertCircle } from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setStatus("success");
    setEmail("");
    setErrorMessage("");
  };

  return (
    <footer className="w-full border-t border-border bg-slate-950 text-slate-100 dark:border-border/40 dark:bg-slate-950">
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Logo & Mission Line */}
          <div className="space-y-4 lg:col-span-2">
            <Link
              href="/"
              className="inline-flex items-center space-x-2.5 font-heading text-lg font-bold tracking-tight text-white transition-opacity hover:opacity-90"
              aria-label="Adaobi Muonago Youth Center Home"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary font-black text-primary-foreground shadow-sm">
                <Code2 className="h-5 w-5 text-accent" aria-hidden="true" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold leading-tight text-white">
                  AMYC
                </span>
                <span className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
                  Adaobi Muonago Youth Center
                </span>
              </div>
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-slate-400">
              Empowering youth through market-driven tech skills, industry
              certifications, hands-on portfolio projects, and structured
              mentorship pathways.
            </p>

            {/* Newsletter Field */}
            <div className="pt-2">
              <label
                htmlFor="footer-newsletter-email"
                className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-200"
              >
                Subscribe to Community Updates
              </label>
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <div className="flex max-w-sm items-center space-x-2">
                  <input
                    id="footer-newsletter-email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (status !== "idle") setStatus("idle");
                    }}
                    className="flex h-9 w-full rounded-md border border-slate-800 bg-slate-900 px-3 py-1 text-xs text-slate-100 placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    aria-label="Newsletter email input"
                  />
                  <Button
                    type="submit"
                    variant="accent"
                    size="sm"
                    className="gap-1 font-semibold"
                  >
                    <Send className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Join</span>
                  </Button>
                </div>
                <div aria-live="polite">
                  {status === "success" && (
                    <p className="flex items-center gap-1.5 text-xs text-emerald-400">
                      <CheckCircle2
                        className="h-3.5 w-3.5"
                        aria-hidden="true"
                      />
                      Thank you! You are subscribed to updates.
                    </p>
                  )}
                  {status === "error" && (
                    <p className="flex items-center gap-1.5 text-xs text-rose-400">
                      <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
                      {errorMessage}
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>

          {/* Skill Tracks */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Skill Tracks
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              {SKILL_TRACKS.map((track) => (
                <li key={track.slug}>
                  <Link
                    href={`/tracks/${track.slug}`}
                    className="transition-colors hover:text-accent"
                  >
                    {track.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Programs
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              {FOOTER_NAV_LINKS.programs.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Organization */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Organization
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              {FOOTER_NAV_LINKS.organization.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar & Socials */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 text-xs text-slate-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Adaobi Muonago Youth Center (AMYC). All
            rights reserved.
          </p>

          <div className="flex items-center space-x-6">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 transition-colors hover:text-accent"
                aria-label={social.label}
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
