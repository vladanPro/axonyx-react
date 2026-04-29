import * as React from "react";

export type ProgressProps = React.HTMLAttributes<HTMLDivElement> & {
  value: number;
  max?: number;
  label?: React.ReactNode;
  showValue?: boolean;
};

export const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ value, max = 100, label, showValue = true, className, ...props }, ref) => {
    const safeMax = Math.max(max, 1);
    const percent = Math.min(100, Math.max(0, (value / safeMax) * 100));

    return (
      <div
        ref={ref}
        className={["ax-progress", className].filter(Boolean).join(" ")}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={safeMax}
        aria-valuenow={Math.round(Math.min(value, safeMax))}
        {...props}
      >
        {label || showValue ? (
          <div className="ax-progress__meta">
            <span>{label}</span>
            {showValue ? <span>{Math.round(percent)}%</span> : null}
          </div>
        ) : null}
        <div className="ax-progress__track">
          <div
            className="ax-progress__bar"
            style={{ "--ax-progress-value": `${percent}%` } as React.CSSProperties}
          />
        </div>
      </div>
    );
  }
);

Progress.displayName = "Progress";
