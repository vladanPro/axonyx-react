import * as React from "react";

export type ToggleGroupProps = React.HTMLAttributes<HTMLDivElement> & {
  size?: "sm" | "md" | "lg";
  orientation?: "horizontal" | "vertical";
  selection?: "single" | "multiple";
  label?: string;
};

export const ToggleGroup = React.forwardRef<HTMLDivElement, ToggleGroupProps>(
  (
    {
      size = "md",
      orientation = "horizontal",
      selection = "multiple",
      label = "Options",
      className,
      ...props
    },
    ref
  ) => (
    <div
      ref={ref}
      className={["ax-toggle-group", className].filter(Boolean).join(" ")}
      data-size={size}
      data-orientation={orientation}
      data-selection={selection}
      role="group"
      aria-label={label}
      {...props}
    />
  )
);

ToggleGroup.displayName = "ToggleGroup";

export type ToggleProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size" | "type"
> & {
  size?: "sm" | "md" | "lg";
  type?: "checkbox" | "radio";
  children?: React.ReactNode;
  wrapperClassName?: string;
};

export const Toggle = React.forwardRef<HTMLInputElement, ToggleProps>(
  (
    {
      size = "md",
      type = "checkbox",
      children,
      wrapperClassName,
      className,
      disabled,
      ...props
    },
    ref
  ) => (
    <label
      className={["ax-toggle", wrapperClassName].filter(Boolean).join(" ")}
      data-size={size}
      data-disabled={disabled || undefined}
    >
      <input
        ref={ref}
        className={["ax-toggle__input", className].filter(Boolean).join(" ")}
        type={type}
        disabled={disabled}
        {...props}
      />
      <span className="ax-toggle__surface">{children}</span>
    </label>
  )
);

Toggle.displayName = "Toggle";
