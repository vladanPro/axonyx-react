import * as React from "react";

export type StatProps = React.HTMLAttributes<HTMLDivElement> & {
  label: React.ReactNode;
  value: React.ReactNode;
  delta?: React.ReactNode;
  tone?: "neutral" | "positive" | "warning" | "danger";
};

export const Stat = React.forwardRef<HTMLDivElement, StatProps>(
  ({ label, value, delta, tone = "neutral", className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={["ax-stat", className].filter(Boolean).join(" ")}
        data-tone={tone}
        {...props}
      >
        <span className="ax-stat__label">{label}</span>
        <strong className="ax-stat__value">{value}</strong>
        {delta ? <span className="ax-stat__delta">{delta}</span> : null}
      </div>
    );
  }
);

Stat.displayName = "Stat";
