import * as React from "react";

export type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  max?: "sm" | "md" | "lg" | "xl";
};

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ max = "xl", className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={["ax-container", className].filter(Boolean).join(" ")}
        data-max={max}
        {...props}
      />
    );
  }
);

Container.displayName = "Container";
