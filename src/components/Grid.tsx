import * as React from "react";

export type GridProps = React.HTMLAttributes<HTMLDivElement> & {
  cols?: 1 | 2 | 3 | 4 | 5 | 6;
  gap?: "sm" | "md" | "lg" | "xl";
  align?: "start" | "center" | "end";
};

export const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ cols = 2, gap = "md", align, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={["ax-grid", className].filter(Boolean).join(" ")}
        data-cols={cols}
        data-gap={gap}
        data-align={align}
        {...props}
      />
    );
  }
);

Grid.displayName = "Grid";
