import * as React from "react";

export type ScrollAreaProps = React.HTMLAttributes<HTMLDivElement> & {
  height?: "sm" | "md" | "lg" | "full";
  orientation?: "vertical" | "horizontal" | "both";
  edge?: "fade" | "none";
  label?: string;
};

export const ScrollArea = React.forwardRef<HTMLDivElement, ScrollAreaProps>(
  (
    {
      height = "md",
      orientation = "vertical",
      edge = "fade",
      label = "Scrollable content",
      className,
      tabIndex = 0,
      ...props
    },
    ref
  ) => (
    <div
      ref={ref}
      className={["ax-scroll-area", className].filter(Boolean).join(" ")}
      data-height={height}
      data-orientation={orientation}
      data-edge={edge}
      role="region"
      aria-label={label}
      tabIndex={tabIndex}
      {...props}
    />
  )
);

ScrollArea.displayName = "ScrollArea";
