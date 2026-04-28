import * as React from "react";

export type SwitchProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type"
> & {
  label?: React.ReactNode;
};

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ label, className, ...props }, ref) => {
    return (
      <label className={["ax-switch", className].filter(Boolean).join(" ")}>
        <input ref={ref} type="checkbox" {...props} />
        <span className="ax-switch__track" aria-hidden>
          <span className="ax-switch__thumb" />
        </span>
        {label ? <span>{label}</span> : null}
      </label>
    );
  }
);

Switch.displayName = "Switch";
