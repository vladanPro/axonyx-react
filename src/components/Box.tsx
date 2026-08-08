import * as React from "react";

export type BoxProps = React.HTMLAttributes<HTMLDivElement> & {
  padding?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  surface?: boolean | "brushed" | "inset" | "forged";
};

export const Box = React.forwardRef<HTMLDivElement, BoxProps>(
  ({ padding, surface, className, ...props }, ref) => (
    <div
      ref={ref}
      className={["ax-box", className].filter(Boolean).join(" ")}
      data-padding={padding}
      data-surface={surface || undefined}
      {...props}
    />
  )
);

Box.displayName = "Box";
