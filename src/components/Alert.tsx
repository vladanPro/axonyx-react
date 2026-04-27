import * as React from "react";

export type AlertProps = React.HTMLAttributes<HTMLDivElement> & {
  tone?: "info" | "warning" | "danger" | "success";
  title?: React.ReactNode;
};

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ tone = "info", title, children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={["ax-alert", className].filter(Boolean).join(" ")}
        data-tone={tone}
        role="status"
        {...props}
      >
        <div className="ax-alert__marker" aria-hidden />
        <div className="ax-alert__body">
          {title && <strong className="ax-alert__title">{title}</strong>}
          <div className="ax-alert__content">{children}</div>
        </div>
      </div>
    );
  }
);

Alert.displayName = "Alert";
