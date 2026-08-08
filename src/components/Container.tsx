import * as React from "react";

export type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  max?: "sm" | "md" | "lg" | "xl";
  padding?: "none" | "sm" | "lg";
  fluid?: boolean;
  recipe?: string;
};

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ max = "xl", padding, fluid, recipe, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={["ax-container", className].filter(Boolean).join(" ")}
        data-max={max}
        data-padding={padding}
        data-fluid={fluid || undefined}
        data-recipe={recipe}
        {...props}
      />
    );
  }
);

Container.displayName = "Container";
