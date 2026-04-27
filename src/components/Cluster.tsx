import * as React from "react";

export type ClusterProps = React.HTMLAttributes<HTMLDivElement> & {
  gap?: "xs" | "sm" | "md" | "lg" | "xl";
};

export const Cluster = React.forwardRef<HTMLDivElement, ClusterProps>(
  ({ gap = "md", className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={["ax-cluster", className].filter(Boolean).join(" ")}
        data-gap={gap}
        {...props}
      />
    );
  }
);

Cluster.displayName = "Cluster";
