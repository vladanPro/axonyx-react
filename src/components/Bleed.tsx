import * as React from "react";

export type BleedProps = React.HTMLAttributes<HTMLDivElement> & {
  mode?: "gutter" | "viewport";
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  padding?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
};

export const Bleed = React.forwardRef<HTMLDivElement, BleedProps>(
  ({ mode = "gutter", size = "md", padding, className, ...props }, ref) => (
    <div
      ref={ref}
      className={["ax-bleed", className].filter(Boolean).join(" ")}
      data-mode={mode}
      data-size={size}
      data-padding={padding}
      {...props}
    />
  )
);

Bleed.displayName = "Bleed";
