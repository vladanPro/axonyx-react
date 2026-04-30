import * as React from "react";

export type ChipProps = React.HTMLAttributes<HTMLSpanElement> & {
  tone?: "neutral" | "accent" | "success" | "warning" | "danger";
  size?: "sm" | "md";
};

export const Chip = React.forwardRef<HTMLSpanElement, ChipProps>(
  ({ tone = "neutral", size = "md", className, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={["ax-chip", className].filter(Boolean).join(" ")}
        data-tone={tone}
        data-size={size}
        {...props}
      />
    );
  }
);

Chip.displayName = "Chip";
