import * as React from "react";

export type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  variant?: "default" | "primary" | "ghost" | "accent" | "outline";
  surface?: "default" | "forged" | "brushed" | "inset";
};

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ label, variant, surface, className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        aria-label={label}
        className={["ax-button", className].filter(Boolean).join(" ")}
        data-variant={variant}
        data-surface={surface}
        {...props}
      >
        {children}
      </button>
    );
  }
);

IconButton.displayName = "IconButton";
