import * as React from "react";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  invalid?: boolean;
  uiSize?: "sm" | "md" | "lg";
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  wrapperClassName?: string;
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      invalid,
      uiSize = "md",
      leadingIcon,
      trailingIcon,
      wrapperClassName,
      className,
      ...props
    },
    ref
  ) => {
    const input = (
      <input
        ref={ref}
        className={["ax-input", className].filter(Boolean).join(" ")}
        data-size={uiSize}
        aria-invalid={invalid || undefined}
        {...props}
      />
    );

    if (!leadingIcon && !trailingIcon) {
      return input;
    }

    return (
      <div
        className={["ax-control", wrapperClassName].filter(Boolean).join(" ")}
        data-kind="input"
        data-size={uiSize}
      >
        {leadingIcon ? (
          <span className="ax-control__icon" data-slot="start" aria-hidden="true">
            {leadingIcon}
          </span>
        ) : null}
        {input}
        {trailingIcon ? (
          <span className="ax-control__icon" data-slot="end" aria-hidden="true">
            {trailingIcon}
          </span>
        ) : null}
      </div>
    );
  }
);

Input.displayName = "Input";
