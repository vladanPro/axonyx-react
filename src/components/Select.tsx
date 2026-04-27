import * as React from "react";

export type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  surface?: "default" | "forged";
};

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ surface, className, ...props }, ref) => {
    return (
      <select
        ref={ref}
        className={["ax-select", className].filter(Boolean).join(" ")}
        data-surface={surface}
        {...props}
      />
    );
  }
);

Select.displayName = "Select";
