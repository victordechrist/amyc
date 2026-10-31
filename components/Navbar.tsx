"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SKILL_TRACKS, MAIN_NAV_LINKS } from "@/lib/data";
import {
  Code2,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [tracksDropdownOpen, setTracksDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const hamburgerButtonRef = useRef<HTMLButtonElement>(null);

  // Close dropdown or mobile menu when navigating
  useEffect(() => {
    setMobileMenuOpen(false);
    setTracksDropdownOpen(false);
  }, [pathname]);

  // Handle Escape key to close mobile menu or dropdown
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (tracksDropdownOpen) {
          setTracksDropdownOpen(false);
        }
        if (mobileMenuOpen) {
          setMobileMenuOpen(false);
          hamburgerButtonRef.current?.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [tracksDropdownOpen, mobileMenuOpen]);

  // Focus trapping and focus management for mobile menu
  useEffect(() => {
    if (!mobileMenuOpen || !mobileMenuRef.current) return;

    const focusableElements = mobileMenuRef.current.querySelectorAll<
      HTMLAnchorElement | HTMLButtonElement | HTMLInputElement
    >(
      "a[href], button, input, select, textarea, [tabindex]:not([tabindex='-1'])",
    );

    if (focusableElements.length > 0) {
      focusableElements[0].focus();
    }

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== "Tab" || focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    window.addEventListener("keydown", handleTabKey);
    return () => window.removeEventListener("keydown", handleTabKey);
  }, [mobileMenuOpen]);

  // Close tracks dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setTracksDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Active route checking
  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-2.5 font-heading text-lg font-bold tracking-tight transition-opacity hover:opacity-90"
          aria-label="Adaobi Muonago Youth Center Home"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary font-black text-primary-foreground shadow-sm">
            <Code2 className="h-5 w-5 text-accent" aria-hidden="true" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold leading-tight text-foreground">
              AMYC
            </span>
            <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
              Youth Tech Center
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden items-center space-x-1 md:flex"
          aria-label="Main Navigation"
        >
          {MAIN_NAV_LINKS.map((link) => {
            if (link.label === "Tracks") {
              const isTracksActive = isActive("/tracks");
              return (
                <div key={link.href} className="relative" ref={dropdownRef}>
                  <button
                    type="button"
                    onClick={() => setTracksDropdownOpen((prev) => !prev)}
                    onKeyDown={(e) => {
                      if (e.key === "ArrowDown" && !tracksDropdownOpen) {
                        setTracksDropdownOpen(true);
                      }
                    }}
                    className={`inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                      isTracksActive
                        ? "bg-accent/10 font-semibold text-accent dark:bg-accent/20"
                        : "text-muted-foreground"
                    }`}
                    aria-expanded={tracksDropdownOpen}
                    aria-haspopup="true"
                    aria-label="Skill Tracks menu"
                  >
                    <span>{link.label}</span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        tracksDropdownOpen ? "rotate-180 text-accent" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  {/* Tracks Dropdown Menu */}
                  {tracksDropdownOpen && (
                    <div
                      className="animate-in fade-in-50 zoom-in-95 absolute left-0 top-full mt-2 w-72 rounded-xl border border-border/80 bg-background/95 p-2 shadow-xl backdrop-blur-md"
                      role="menu"
                      aria-orientation="vertical"
                      aria-label="Skill Tracks"
                    >
                      <div className="mb-2 px-3 pt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        All 5 Skill Tracks
                      </div>
                      <div className="space-y-1">
                        {SKILL_TRACKS.map((track) => {
                          const Icon = track.icon;
                          const trackHref = `/tracks/${track.slug}`;
                          const isTrackActive = pathname === trackHref;

                          return (
                            <Link
                              key={track.slug}
                              href={trackHref}
                              role="menuitem"
                              onClick={() => setTracksDropdownOpen(false)}
                              className={`group flex items-start gap-3 rounded-lg p-2.5 transition-colors hover:bg-muted/80 ${
                                isTrackActive
                                  ? "bg-accent/10 font-medium text-accent"
                                  : "text-foreground"
                              }`}
                            >
                              <div className="mt-0.5 rounded-md bg-primary/10 p-1.5 text-primary group-hover:bg-accent group-hover:text-accent-foreground dark:bg-accent/10 dark:text-accent">
                                <Icon className="h-4 w-4" aria-hidden="true" />
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center justify-between text-xs font-semibold">
                                  <span>{track.title}</span>
                                  <Badge
                                    variant="outline"
                                    className="px-1.5 py-0 text-[10px]"
                                  >
                                    {track.badge}
                                  </Badge>
                                </div>
                                <p className="mt-0.5 line-clamp-1 text-[11px] text-muted-foreground">
                                  {track.description}
                                </p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>

                      <div className="mt-2 border-t border-border/50 pt-2 text-center">
                        <Link
                          href="/tracks"
                          onClick={() => setTracksDropdownOpen(false)}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:underline"
                        >
                          View All Skill Pathways{" "}
                          <ArrowRight className="h-3 w-3" aria-hidden="true" />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                  active
                    ? "bg-accent/10 font-semibold text-accent dark:bg-accent/20"
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA & Utilities */}
        <div className="hidden items-center space-x-3 md:flex">
          <ThemeToggle />
          <Button
            asChild
            variant="accent"
            size="sm"
            className="font-semibold shadow-sm"
          >
            <Link href="/get-involved">Start Your Journey</Link>
          </Button>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center space-x-2 md:hidden">
          <ThemeToggle />
          <button
            ref={hamburgerButtonRef}
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={
              mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          ref={mobileMenuRef}
          className="bg-background/98 animate-in slide-in-from-top-2 fixed inset-x-0 bottom-0 top-16 z-50 flex flex-col overflow-y-auto border-t border-border p-6 backdrop-blur-lg duration-200 md:hidden"
        >
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Navigation Menu
            </p>

            <nav
              className="flex flex-col space-y-1"
              aria-label="Mobile Navigation"
            >
              {MAIN_NAV_LINKS.map((link) => {
                const active = isActive(link.href);

                if (link.label === "Tracks") {
                  return (
                    <div key={link.href} className="space-y-1">
                      <Link
                        href="/tracks"
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center justify-between rounded-lg px-3 py-2.5 text-base font-semibold transition-colors ${
                          active
                            ? "bg-accent/10 text-accent dark:bg-accent/20"
                            : "text-foreground hover:bg-muted"
                        }`}
                      >
                        <span>Tracks</span>
                        <Badge variant="accent" className="text-[10px]">
                          5 Pathways
                        </Badge>
                      </Link>

                      {/* Sub-list of tracks */}
                      <div className="ml-3 space-y-1 border-l-2 border-border pl-3">
                        {SKILL_TRACKS.map((track) => {
                          const Icon = track.icon;
                          const trackHref = `/tracks/${track.slug}`;
                          const isTrackActive = pathname === trackHref;

                          return (
                            <Link
                              key={track.slug}
                              href={trackHref}
                              onClick={() => setMobileMenuOpen(false)}
                              className={`flex items-center gap-2.5 rounded-md px-2.5 py-2 text-sm transition-colors ${
                                isTrackActive
                                  ? "font-semibold text-accent"
                                  : "text-muted-foreground hover:text-foreground"
                              }`}
                            >
                              <Icon
                                className="h-4 w-4 text-accent"
                                aria-hidden="true"
                              />
                              <span>{track.title}</span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`rounded-lg px-3 py-2.5 text-base font-medium transition-colors ${
                      active
                        ? "bg-accent/10 font-semibold text-accent dark:bg-accent/20"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className="space-y-3 border-t border-border pt-4">
              <Button
                asChild
                variant="accent"
                size="lg"
                className="w-full gap-2 font-semibold shadow-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Link href="/get-involved">
                  <Sparkles className="h-4 w-4" aria-hidden="true" />
                  Start Your Journey
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
