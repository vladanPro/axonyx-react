import * as React from "react";

export type InputGroupProps = React.HTMLAttributes<HTMLDivElement> & {
  size?: "sm" | "md" | "lg";
  surface?: "default" | "inset" | "forged";
};

export const InputGroup = React.forwardRef<HTMLDivElement, InputGroupProps>(
  ({ size = "md", surface = "inset", className, ...props }, ref) => (
    <div
      ref={ref}
      className={["ax-input-group", className].filter(Boolean).join(" ")}
      data-size={size}
      data-surface={surface}
      {...props}
    />
  )
);

InputGroup.displayName = "InputGroup";

export type InputAddonProps = React.HTMLAttributes<HTMLSpanElement> & {
  side?: "start" | "end";
};

export const InputAddon = React.forwardRef<HTMLSpanElement, InputAddonProps>(
  ({ side = "start", className, ...props }, ref) => (
    <span
      ref={ref}
      className={["ax-input-addon", className].filter(Boolean).join(" ")}
      data-side={side}
      {...props}
    />
  )
);

InputAddon.displayName = "InputAddon";
