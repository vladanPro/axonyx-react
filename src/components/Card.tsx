import * as React from "react";

export type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  surface?: "default" | "forged" | "brushed" | "inset";
  border?: "forged";
};

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ surface, border, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={["ax-card", className].filter(Boolean).join(" ")}
        data-surface={surface}
        data-border={border}
        {...props}
      />
    );
  }
);

Card.displayName = "Card";
