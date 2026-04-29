import * as React from "react";

export type SkeletonProps = React.HTMLAttributes<HTMLSpanElement> & {
  width?: string | number;
  height?: string | number;
  shape?: "line" | "circle" | "card";
};

function toCssSize(value: string | number | undefined) {
  return typeof value === "number" ? `${value}px` : value;
}

export const Skeleton = React.forwardRef<HTMLSpanElement, SkeletonProps>(
  ({ width, height, shape = "line", style, className, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={["ax-skeleton", className].filter(Boolean).join(" ")}
        data-shape={shape}
        style={{
          "--ax-skeleton-width": toCssSize(width),
          "--ax-skeleton-height": toCssSize(height),
          ...style,
        } as React.CSSProperties}
        aria-hidden="true"
        {...props}
      />
    );
  }
);

Skeleton.displayName = "Skeleton";
