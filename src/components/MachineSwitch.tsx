"use client";

import * as React from "react";

export type MachineSwitchProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> & {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  label?: React.ReactNode;
  onLabel?: React.ReactNode;
  offLabel?: React.ReactNode;
};

export const MachineSwitch = React.forwardRef<HTMLButtonElement, MachineSwitchProps>(
  (
    {
      checked,
      defaultChecked = false,
      onCheckedChange,
      label,
      onLabel = "On",
      offLabel = "Off",
      disabled,
      className,
      onClick,
      ...props
    },
    ref
  ) => {
    const isControlled = checked !== undefined;
    const [internalChecked, setInternalChecked] = React.useState(defaultChecked);
    const isChecked = isControlled ? checked : internalChecked;

    function toggle(event: React.MouseEvent<HTMLButtonElement>) {
      onClick?.(event);
      if (event.defaultPrevented || disabled) return;

      const next = !isChecked;
      if (!isControlled) setInternalChecked(next);
      onCheckedChange?.(next);
    }

    return (
      <button
        ref={ref}
        type="button"
        role="switch"
        aria-checked={isChecked}
        aria-label={typeof label === "string" ? label : undefined}
        disabled={disabled}
        className={["ax-machine-switch", className].filter(Boolean).join(" ")}
        data-state={isChecked ? "on" : "off"}
        onClick={toggle}
        {...props}
      >
        <span className="ax-machine-switch__lamp" data-tone="danger" aria-hidden="true" />
        <span className="ax-machine-switch__track" aria-hidden="true">
          <span className="ax-machine-switch__knob" />
        </span>
        <span className="ax-machine-switch__lamp" data-tone="success" aria-hidden="true" />
        {label ? <span className="ax-machine-switch__label">{label}</span> : null}
        <span className="ax-machine-switch__label" data-state={isChecked ? "on" : "off"} aria-hidden="true">
          {isChecked ? onLabel : offLabel}
        </span>
      </button>
    );
  }
);

MachineSwitch.displayName = "MachineSwitch";
