import * as React from "react";

export type StatProps = React.HTMLAttributes<HTMLDivElement> & {
  label: React.ReactNode;
  value: React.ReactNode;
  delta?: React.ReactNode;
  tone?: "neutral" | "positive" | "warning" | "danger";
  icon?: React.ReactNode;
  description?: React.ReactNode;
};

export const Stat = React.forwardRef<HTMLDivElement, StatProps>(
  (
    {
      label,
      value,
      delta,
      tone = "neutral",
      icon,
      description,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={["ax-stat", className].filter(Boolean).join(" ")}
        data-tone={tone}
        {...props}
      >
        <div className="ax-stat__header">
          <span className="ax-stat__label">{label}</span>
          {icon ? <span className="ax-stat__icon">{icon}</span> : null}
        </div>
        <strong className="ax-stat__value">{value}</strong>
        {delta ? <span className="ax-stat__delta">{delta}</span> : null}
        {description ? <p className="ax-stat__description">{description}</p> : null}
      </div>
    );
  }
);

Stat.displayName = "Stat";
