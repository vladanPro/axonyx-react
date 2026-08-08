import * as React from "react";

export type SpinnerProps = React.HTMLAttributes<HTMLSpanElement> & {
  size?: "sm" | "md" | "lg";
  tone?: "current" | "primary" | "muted";
  label?: string;
};

export const Spinner = React.forwardRef<HTMLSpanElement, SpinnerProps>(
  (
    { size = "md", tone = "current", label = "Loading", className, ...props },
    ref
  ) => (
    <span
      ref={ref}
      className={["ax-spinner", className].filter(Boolean).join(" ")}
      data-size={size}
      data-tone={tone}
      role="status"
      aria-label={label}
      {...props}
    >
      <span className="ax-spinner__ring" aria-hidden="true" />
    </span>
  )
);

Spinner.displayName = "Spinner";
