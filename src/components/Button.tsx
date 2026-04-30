import * as React from "react";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "primary" | "ghost" | "accent" | "outline";
  surface?: "default" | "forged" | "brushed" | "inset";
  border?: "forged";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant,
      surface,
      border,
      size = "md",
      loading = false,
      startIcon,
      endIcon,
      className,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={["ax-button", className].filter(Boolean).join(" ")}
        data-variant={variant}
        data-surface={surface}
        data-border={border}
        data-size={size}
        data-loading={loading || undefined}
        aria-busy={loading || undefined}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <span className="ax-button__spinner" aria-hidden="true" />
        ) : startIcon ? (
          <span className="ax-button__icon" data-slot="start" aria-hidden="true">
            {startIcon}
          </span>
        ) : null}
        <span className="ax-button__label">{children}</span>
        {endIcon ? (
          <span className="ax-button__icon" data-slot="end" aria-hidden="true">
            {endIcon}
          </span>
        ) : null}
      </button>
    );
  }
);

Button.displayName = "Button";
