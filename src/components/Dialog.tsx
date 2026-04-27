import * as React from "react";

export function Dialog({ open, onOpenChange, children }: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  children: React.ReactNode;
}) {
  if (!open) return null;

  return (
    <div className="ax-dialog" data-open="true" role="dialog" aria-modal="true">
      <div className="ax-dialog__backdrop" onClick={() => onOpenChange(false)} />
      <div className="ax-dialog__panel">
        {children}
      </div>
    </div>
  );
}

export function DialogHeader({ children }: { children: React.ReactNode }) {
  return <div className="ax-dialog__header">{children}</div>;
}

export function DialogTitle({ children }: { children: React.ReactNode }) {
  return <strong className="ax-dialog__title">{children}</strong>;
}

export function DialogContent({ children }: { children: React.ReactNode }) {
  return <div className="ax-dialog__content">{children}</div>;
}
