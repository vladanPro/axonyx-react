import * as React from "react";

export type ClusterProps = React.HTMLAttributes<HTMLDivElement> & {
  gap?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  align?: "start" | "center" | "end";
  justify?: "start" | "center" | "between" | "end";
};

export const Cluster = React.forwardRef<HTMLDivElement, ClusterProps>(
  ({ gap = "md", align, justify, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={["ax-cluster", className].filter(Boolean).join(" ")}
        data-gap={gap}
        data-align={align}
        data-justify={justify}
        {...props}
      />
    );
  }
);

Cluster.displayName = "Cluster";
