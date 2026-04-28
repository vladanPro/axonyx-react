import * as React from "react";

export type LinkButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "default" | "primary" | "ghost" | "accent" | "outline";
  surface?: "default" | "forged" | "brushed" | "inset";
  border?: "forged";
};

export const LinkButton = React.forwardRef<HTMLAnchorElement, LinkButtonProps>(
  ({ variant, surface, border, className, ...props }, ref) => {
    return (
      <a
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

LinkButton.displayName = "LinkButton";
