import * as React from "react";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  invalid?: boolean;
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ invalid, className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={["ax-input", className].filter(Boolean).join(" ")}
        aria-invalid={invalid || undefined}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
