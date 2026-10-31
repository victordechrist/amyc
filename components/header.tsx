import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code2 } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link
          href="/"
          className="flex items-center space-x-2.5 font-heading text-lg font-bold tracking-tight transition-opacity hover:opacity-90"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary font-black text-primary-foreground shadow-sm">
            <Code2 className="h-5 w-5 text-accent" />
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
