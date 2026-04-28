import * as React from "react";

export type RadioGroupProps = React.HTMLAttributes<HTMLDivElement> & {
  direction?: "row" | "column";
};

export const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ direction = "column", className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={["ax-radio-group", className].filter(Boolean).join(" ")}
        data-direction={direction}
        role="radiogroup"
        {...props}
      />
    );
  }
);

RadioGroup.displayName = "RadioGroup";

export type RadioProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type"
> & {
  label?: React.ReactNode;
};

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ label, className, ...props }, ref) => {
    return (
      <label className={["ax-radio", className].filter(Boolean).join(" ")}>
        <input ref={ref} type="radio" {...props} />
        {label ? <span>{label}</span> : null}
      </label>
    );
  }
);

Radio.displayName = "Radio";
