import * as React from "react";
import { cn } from "@/lib/utils";

export interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  kicker?: string;
  title: string;
  description?: string;
  align?: "left" | "center" | "right";
  size?: "sm" | "default" | "lg";
}

export function SectionHeading({
  kicker,
  title,
  description,
  align = "left",
  size = "default",
  className,
  ...props
}: SectionHeadingProps) {
  const alignClasses = {
    left: "text-left items-start",
    center: "text-center items-center max-w-3xl mx-auto",
    right: "text-right items-end ml-auto",
  };

  const titleSizes = {
    sm: "text-xl md:text-2xl font-bold",
    default: "text-2xl md:text-4xl font-extrabold tracking-tight",
    lg: "text-3xl md:text-5xl font-black tracking-tight",
  };

  return (
    <div
      className={cn(
        "mb-8 flex flex-col space-y-3 md:mb-12",
        alignClasses[align],
        className,
      )}
      {...props}
    >
      {kicker && (
        <span className="text-xs font-bold uppercase tracking-wider text-accent drop-shadow-sm md:text-sm">
          {kicker}
        </span>
      )}
      <h2
        className={cn(
          "font-heading leading-tight text-foreground",
          titleSizes[size],
        )}
      >
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
