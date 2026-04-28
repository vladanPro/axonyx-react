import * as React from "react";

export type ButtonGroupProps = React.HTMLAttributes<HTMLDivElement>;

export const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={["ax-button-group", className].filter(Boolean).join(" ")}
        role="group"
        {...props}
      />
    );
  }
);

ButtonGroup.displayName = "ButtonGroup";
