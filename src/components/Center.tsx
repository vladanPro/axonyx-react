import * as React from "react";

export type CenterProps = React.HTMLAttributes<HTMLDivElement> & {
  min?: "sm" | "md" | "lg";
};

export const Center = React.forwardRef<HTMLDivElement, CenterProps>(
  ({ min, className, ...props }, ref) => (
    <div
      ref={ref}
      className={["ax-center", className].filter(Boolean).join(" ")}
      data-min={min}
      {...props}
    />
  )
);

Center.displayName = "Center";
