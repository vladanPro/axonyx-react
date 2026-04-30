import * as React from "react";

export type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  variant?: "default" | "primary" | "ghost" | "accent" | "outline";
  surface?: "default" | "forged" | "brushed" | "inset";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
};

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      label,
      variant,
      surface,
      size = "md",
      loading = false,
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
        aria-label={label}
        className={["ax-button", className].filter(Boolean).join(" ")}
        data-variant={variant}
        data-surface={surface}
        data-size={size}
        data-icon-only="true"
        data-loading={loading || undefined}
        aria-busy={loading || undefined}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? <span className="ax-button__spinner" aria-hidden="true" /> : children}
      </button>
    );
  }
);

IconButton.displayName = "IconButton";
