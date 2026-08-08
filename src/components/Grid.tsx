import * as React from "react";

export type GridProps = React.HTMLAttributes<HTMLDivElement> & {
  cols?: 1 | 2 | 3 | 4 | 5 | 6;
  gap?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  align?: "start" | "center" | "end";
  min?: "sm" | "md" | "lg";
};

export const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ cols = 2, gap = "md", align, min, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={["ax-grid", className].filter(Boolean).join(" ")}
        data-cols={cols}
        data-gap={gap}
        data-align={align}
        data-min={min}
        {...props}
      />
    );
  }
);

Grid.displayName = "Grid";
