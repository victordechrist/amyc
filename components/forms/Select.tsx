import React, { SelectHTMLAttributes, forwardRef } from "react";

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: SelectOption[];
  error?: string;
  helperText?: string;
  placeholder?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      options,
      error,
      helperText,
      id,
      className = "",
      required,
      placeholder = "Select an option",
      ...props
    },
    ref,
  ) => {
    const selectId = id || props.name;

    return (
      <div className="w-full space-y-1.5">
        <label
          htmlFor={selectId}
          className="block text-sm font-medium text-foreground"
        >
          {label} {required && <span className="text-destructive">*</span>}
        </label>
        <select
          id={selectId}
          ref={ref}
          aria-invalid={!!error}
          aria-describedby={
            error
              ? `${selectId}-error`
              : helperText
                ? `${selectId}-helper`
                : undefined
          }
          className={`flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
            error
              ? "border-destructive focus-visible:ring-destructive"
              : "border-input"
          } ${className}`}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error ? (
          <p
            id={`${selectId}-error`}
            className="text-xs font-medium text-destructive"
          >
            {error}
          </p>
        ) : helperText ? (
          <p
            id={`${selectId}-helper`}
            className="text-xs text-muted-foreground"
          >
            {helperText}
          </p>
        ) : null}
      </div>
    );
  },
);

Select.displayName = "Select";
