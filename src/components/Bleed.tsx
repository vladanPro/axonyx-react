import * as React from "react";

export type BleedProps = React.HTMLAttributes<HTMLDivElement> & {
  padding?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
};

export const Bleed = React.forwardRef<HTMLDivElement, BleedProps>(
  ({ padding, className, ...props }, ref) => (
    <div
      ref={ref}
      className={["ax-bleed", className].filter(Boolean).join(" ")}
      data-padding={padding}
      {...props}
    />
  )
);

Bleed.displayName = "Bleed";
