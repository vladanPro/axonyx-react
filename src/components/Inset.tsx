import * as React from "react";

export type InsetProps = React.HTMLAttributes<HTMLDivElement> & {
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
};

export const Inset = React.forwardRef<HTMLDivElement, InsetProps>(
  ({ size = "md", className, ...props }, ref) => (
    <div
      ref={ref}
      className={["ax-inset", className].filter(Boolean).join(" ")}
      data-size={size}
      {...props}
    />
  )
);

Inset.displayName = "Inset";
