import * as React from "react";

export type FlexProps = React.HTMLAttributes<HTMLDivElement> & {
  direction?: "row" | "column";
  gap?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  align?: "start" | "center" | "end" | "stretch";
  justify?: "start" | "center" | "between" | "end";
  wrap?: boolean;
  collapse?: boolean;
};

export const Flex = React.forwardRef<HTMLDivElement, FlexProps>(
  (
    {
      direction = "row",
      gap = "md",
      align,
      justify,
      wrap,
      collapse,
      className,
      ...props
    },
    ref
  ) => (
    <div
      ref={ref}
      className={["ax-flex", className].filter(Boolean).join(" ")}
      data-direction={direction}
      data-gap={gap}
      data-align={align}
      data-justify={justify}
      data-wrap={wrap || undefined}
      data-collapse={collapse || undefined}
      {...props}
    />
  )
);

Flex.displayName = "Flex";
