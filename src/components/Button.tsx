import * as React from "react";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "primary" | "ghost" | "accent" | "outline";
  surface?: "default" | "forged" | "brushed" | "inset";
  border?: "forged";
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, surface, border, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={["ax-button", className].filter(Boolean).join(" ")}
        data-variant={variant}
        data-surface={surface}
        data-border={border}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
