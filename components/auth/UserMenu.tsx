"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import {
  ChevronDown,
  LayoutDashboard,
  UserCircle,
  LogOut,
} from "lucide-react";

function getInitials(name?: string | null, email?: string | null): string {
  const source = name?.trim() || email?.trim() || "?";
  return source.charAt(0).toUpperCase();
}

export function UserMenu() {
  const { data: session } = useSession();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const userName = session?.user?.name?.trim();
  const userEmail = session?.user?.email ?? "";
  const displayName = userName || userEmail.split("@")[0] || "Account";

  // Close menu on navigation
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Close on Escape and outside click
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2 rounded-full border border-border bg-card py-1 pl-1 pr-2.5 transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        aria-expanded={open}
        aria-haspopup="true"
        aria-label="Account menu"
      >
        <span
          className="flex h-7 w-7 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground"
          aria-hidden="true"
        >
          {getInitials(userName, userEmail)}
        </span>
        <span className="hidden max-w-[120px] truncate text-sm font-medium text-foreground lg:inline">
          {displayName}
        </span>
        <ChevronDown
          className={`h-3.5 w-3.5 text-muted-foreground transition-transform duration-200 ${
            open ? "rotate-180 text-accent" : ""
          }`}
          aria-hidden="true"
        />
      </button>

      {open && (
        <div
          className="animate-in fade-in-50 zoom-in-95 absolute right-0 top-full mt-2 w-56 rounded-xl border border-border/80 bg-background/95 p-2 shadow-xl backdrop-blur-md"
          role="menu"
          aria-orientation="vertical"
          aria-label="Account"
        >
          <div className="mb-1 border-b border-border/50 px-3 pb-2 pt-1">
            <p className="truncate text-sm font-semibold text-foreground">
              {displayName}
            </p>
            <p className="truncate text-xs text-muted-foreground">{userEmail}</p>
          </div>

          <div className="space-y-0.5">
            <Link
              href="/dashboard"
              role="menuitem"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              <LayoutDashboard
                className="h-4 w-4 text-accent"
                aria-hidden="true"
              />
              Dashboard
            </Link>
            <Link
              href="/account"
              role="menuitem"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              <UserCircle className="h-4 w-4 text-accent" aria-hidden="true" />
              Account
            </Link>
          </div>

          <div className="mt-1 border-t border-border/50 pt-1">
            <button
              type="button"
              role="menuitem"
              onClick={() => signOut({ callbackUrl: "/" })}
              className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium text-destructive transition-colors hover:bg-destructive/10"
            >
              <LogOut className="h-4 w-4" aria-hidden="true" />
              Sign out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
