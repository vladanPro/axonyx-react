import * as React from "react";

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "accent" | "outline";
};

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant, className, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={["ax-badge", className].filter(Boolean).join(" ")}
        data-variant={variant}
        {...props}
      />
    );
  }
);

Badge.displayName = "Badge";
