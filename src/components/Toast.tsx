import * as React from "react";

export type ToastTone = "info" | "success" | "warning" | "danger";

export type ToastProps = React.HTMLAttributes<HTMLDivElement> & {
  tone?: ToastTone;
  title: React.ReactNode;
  description?: React.ReactNode;
  onClose?: () => void;
};

export function Toast({
  tone = "info",
  title,
  description,
  onClose,
  className,
  ...props
}: ToastProps) {
  return (
    <div
      className={["ax-toast", className].filter(Boolean).join(" ")}
      data-tone={tone}
      role="status"
      {...props}
    >
      <div>
        <strong className="ax-toast__title">{title}</strong>
        {description ? (
          <p className="ax-toast__description">{description}</p>
        ) : null}
      </div>
      {onClose ? (
        <button
          aria-label="Close notification"
          className="ax-toast__close"
          onClick={onClose}
          type="button"
        >
          x
        </button>
      ) : null}
    </div>
  );
}

export type ToasterProps = React.HTMLAttributes<HTMLDivElement>;

export function Toaster({ className, ...props }: ToasterProps) {
  return (
    <div
      className={["ax-toast-viewport", className].filter(Boolean).join(" ")}
      {...props}
    />
  );
}
