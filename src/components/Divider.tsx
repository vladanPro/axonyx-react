import * as React from "react";

export type DividerProps = React.HTMLAttributes<HTMLHRElement> & {
  orientation?: "horizontal" | "vertical";
  tone?: "default" | "strong" | "signal";
};

export const Divider = React.forwardRef<HTMLHRElement, DividerProps>(
  ({ orientation = "horizontal", tone = "default", className, ...props }, ref) => {
    return (
      <hr
        ref={ref}
        className={["ax-divider", className].filter(Boolean).join(" ")}
        data-orientation={orientation}
        data-tone={tone}
        {...props}
      />
    );
  }
);

Divider.displayName = "Divider";
