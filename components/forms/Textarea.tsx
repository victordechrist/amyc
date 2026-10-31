import React, { TextareaHTMLAttributes, forwardRef } from "react";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  helperText?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    { label, error, helperText, id, className = "", required, ...props },
    ref,
  ) => {
    const textareaId = id || props.name;

    return (
      <div className="w-full space-y-1.5">
        <label
          htmlFor={textareaId}
          className="block text-sm font-medium text-foreground"
        >
          {label} {required && <span className="text-destructive">*</span>}
        </label>
        <textarea
          id={textareaId}
          ref={ref}
          aria-invalid={!!error}
          aria-describedby={
            error
              ? `${textareaId}-error`
              : helperText
                ? `${textareaId}-helper`
                : undefined
          }
          className={`flex min-h-[120px] w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
            error
              ? "border-destructive focus-visible:ring-destructive"
              : "border-input"
          } ${className}`}
          {...props}
        />
        {error ? (
          <p
            id={`${textareaId}-error`}
            className="text-xs font-medium text-destructive"
          >
            {error}
          </p>
        ) : helperText ? (
          <p
            id={`${textareaId}-helper`}
            className="text-xs text-muted-foreground"
          >
            {helperText}
          </p>
        ) : null}
      </div>
    );
  },
);

Textarea.displayName = "Textarea";
