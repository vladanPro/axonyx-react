import * as React from "react";

export type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  surface?: "default" | "forged";
  uiSize?: "sm" | "md" | "lg";
  invalid?: boolean;
  leadingIcon?: React.ReactNode;
  wrapperClassName?: string;
};

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      surface,
      uiSize = "md",
      invalid,
      leadingIcon,
      wrapperClassName,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div
        className={["ax-control", wrapperClassName].filter(Boolean).join(" ")}
        data-kind="select"
        data-size={uiSize}
      >
        {leadingIcon ? (
          <span className="ax-control__icon" data-slot="start" aria-hidden="true">
            {leadingIcon}
          </span>
        ) : null}
        <select
          ref={ref}
          className={["ax-select", className].filter(Boolean).join(" ")}
          data-surface={surface}
          data-size={uiSize}
          aria-invalid={invalid || undefined}
          {...props}
        />
      </div>
    );
  }
);

Select.displayName = "Select";
