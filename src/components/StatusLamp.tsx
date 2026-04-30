import * as React from "react";

export type StatusLampTone =
  | "neutral"
  | "online"
  | "warning"
  | "danger"
  | "idle";

export type StatusLampProps = React.HTMLAttributes<HTMLSpanElement> & {
  tone?: StatusLampTone;
  label: React.ReactNode;
  description?: React.ReactNode;
  pulse?: boolean;
};

export const StatusLamp = React.forwardRef<HTMLSpanElement, StatusLampProps>(
  (
    { tone = "neutral", label, description, pulse = false, className, ...props },
    ref
  ) => {
    return (
      <span
        ref={ref}
        className={["ax-status-lamp", className].filter(Boolean).join(" ")}
        data-tone={tone}
        data-pulse={pulse || undefined}
        {...props}
      >
        <span className="ax-status-lamp__light" aria-hidden />
        <span className="ax-status-lamp__body">
          <span className="ax-status-lamp__label">{label}</span>
          {description ? (
            <span className="ax-status-lamp__description">{description}</span>
          ) : null}
        </span>
      </span>
    );
  }
);

StatusLamp.displayName = "StatusLamp";
