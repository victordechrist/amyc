import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link
          href="/"
          className="flex items-center gap-3 transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md"
          aria-label="Adaobi Muonago Youth Center Home"
        >
          <div className="relative h-11 w-11 overflow-hidden rounded-full shadow-sm">
            <Image
              src="/images/logo/amyc-logo-full.png"
              alt="Adaobi Muonago Youth Center (AMYC) logo"
              width={44}
              height={44}
              className="h-full w-full object-contain"
              priority
            />
          </div>
        </Link>

        <div className="flex items-center space-x-3">
          <Badge variant="accent" className="hidden sm:inline-flex">
            Phase 1 Scaffold
          </Badge>
          <ThemeToggle />
          <Button size="sm" variant="accent">
            Get Involved
          </Button>
        </div>
      </div>
    </header>
  );
}
