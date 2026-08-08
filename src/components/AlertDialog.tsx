"use client";

import * as React from "react";

type AlertDialogContextValue = {
  close: () => void;
};

const AlertDialogContext = React.createContext<AlertDialogContextValue | null>(null);

export type AlertDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  label?: string;
  children: React.ReactNode;
};

export function AlertDialog({
  open,
  onOpenChange,
  label = "Confirm action",
  children,
}: AlertDialogProps) {
  const panelRef = React.useRef<HTMLElement>(null);
  const previousFocusRef = React.useRef<HTMLElement | null>(null);

  React.useEffect(() => {
    if (!open) return;

    previousFocusRef.current =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;
    document.documentElement.dataset.dialogOpen = "true";
    panelRef.current
      ?.querySelector<HTMLElement>("[data-ax-alert-dialog-cancel]")
      ?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onOpenChange(false);
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) return;
      const focusable = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!first || !last) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      delete document.documentElement.dataset.dialogOpen;
      previousFocusRef.current?.focus();
      previousFocusRef.current = null;
    };
  }, [open, onOpenChange]);

  if (!open) return null;

  return (
    <AlertDialogContext.Provider value={{ close: () => onOpenChange(false) }}>
      <div
        className="ax-dialog ax-alert-dialog"
        data-open="true"
        role="alertdialog"
        aria-modal="true"
        aria-label={label}
      >
        <div className="ax-dialog__backdrop" />
        <section
          className="ax-dialog__panel ax-alert-dialog__panel"
          ref={panelRef}
        >
          {children}
        </section>
      </div>
    </AlertDialogContext.Provider>
  );
}

export function AlertDialogHeader({ children }: { children: React.ReactNode }) {
  return (
    <header className="ax-dialog__header ax-alert-dialog__header">
      <span className="ax-alert-dialog__signal" aria-hidden="true" />
      <div>{children}</div>
    </header>
  );
}

export function AlertDialogTitle({ children }: { children: React.ReactNode }) {
  return <strong className="ax-dialog__title">{children}</strong>;
}

export function AlertDialogDescription({ children }: { children: React.ReactNode }) {
  return <p className="ax-alert-dialog__description">{children}</p>;
}

export function AlertDialogContent({ children }: { children: React.ReactNode }) {
  return <div className="ax-dialog__content">{children}</div>;
}

export function AlertDialogActions({ children }: { children: React.ReactNode }) {
  return <footer className="ax-alert-dialog__actions">{children}</footer>;
}

export type AlertDialogButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function AlertDialogCancel({
  className,
  onClick,
  ...props
}: AlertDialogButtonProps) {
  const context = React.useContext(AlertDialogContext);

  return (
    <button
      className={["ax-button", className].filter(Boolean).join(" ")}
      data-variant="ghost"
      data-ax-alert-dialog-cancel="true"
      type="button"
      onClick={(event) => {
        onClick?.(event);
        context?.close();
      }}
      {...props}
    />
  );
}

export function AlertDialogAction({
  className,
  type = "button",
  onClick,
  ...props
}: AlertDialogButtonProps) {
  const context = React.useContext(AlertDialogContext);

  return (
    <button
      className={["ax-button", className].filter(Boolean).join(" ")}
      data-variant="primary"
      type={type}
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented) context?.close();
      }}
      {...props}
    />
  );
}
