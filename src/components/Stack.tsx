import * as React from "react";

export type StackProps = React.HTMLAttributes<HTMLDivElement> & {
  gap?: "xs" | "sm" | "md" | "lg" | "xl";
  align?: "start" | "center" | "end" | "stretch";
};

export const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  ({ gap = "md", align, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={["ax-stack", className].filter(Boolean).join(" ")}
        data-gap={gap}
        data-align={align}
        {...props}
      />
    );
  }
);

Stack.displayName = "Stack";
