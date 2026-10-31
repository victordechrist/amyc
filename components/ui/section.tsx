import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const sectionVariants = cva("w-full transition-colors", {
  variants: {
    padding: {
      none: "py-0",
      sm: "py-8 md:py-12",
      default: "py-12 md:py-20",
      lg: "py-16 md:py-28",
    },
    background: {
      default: "bg-background text-foreground",
      muted: "bg-muted/50 text-foreground border-y border-border/40",
      primary: "bg-primary text-primary-foreground",
      dark: "bg-slate-950 text-white dark:bg-slate-950",
    },
  },
  defaultVariants: {
    padding: "default",
    background: "default",
  },
});

export interface SectionProps
  extends
    React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {
  container?: boolean;
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  (
    { className, padding, background, container = true, children, ...props },
    ref,
  ) => {
    return (
      <section
        ref={ref}
        className={cn(sectionVariants({ padding, background, className }))}
        {...props}
      >
        {container ? (
          <div className="container mx-auto px-4 md:px-6">{children}</div>
        ) : (
          children
        )}
      </section>
    );
  },
);
Section.displayName = "Section";

export { Section, sectionVariants };
