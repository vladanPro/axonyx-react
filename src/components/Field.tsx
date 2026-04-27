import * as React from "react";

export type FieldProps = React.HTMLAttributes<HTMLDivElement> & {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  error?: React.ReactNode;
  state?: "default" | "error" | "success" | "warning";
};

export const Field = React.forwardRef<HTMLDivElement, FieldProps>(
  ({ label, hint, error, state, children, className, ...props }, ref) => {
    const resolvedState = state ?? (error ? "error" : undefined);

    return (
      <div
        ref={ref}
        className={["ax-field", className].filter(Boolean).join(" ")}
        data-state={resolvedState}
        {...props}
      >
        {label && <label className="ax-field__label">{label}</label>}
        {children}
        {hint && !error && <p className="ax-field__hint">{hint}</p>}
        {error && <p className="ax-field__error">{error}</p>}
      </div>
    );
  }
);

Field.displayName = "Field";
