import * as React from "react";

export type DrawerProps = {
  open: boolean;
  onOpenChange: (value: boolean) => void;
  side?: "left" | "right" | "bottom";
  children: React.ReactNode;
};

export function Drawer({
  open,
  onOpenChange,
  side = "right",
  children,
}: DrawerProps) {
  React.useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onOpenChange(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onOpenChange, open]);

  if (!open) return null;

  return (
    <div className="ax-drawer" data-side={side}>
      <div className="ax-drawer__backdrop" onClick={() => onOpenChange(false)} />
      <div className="ax-drawer__panel" role="dialog" aria-modal="true">
        {children}
      </div>
    </div>
  );
}

export type DrawerHeaderProps = {
  title: React.ReactNode;
  description?: React.ReactNode;
  onClose?: () => void;
};

export function DrawerHeader({ title, description, onClose }: DrawerHeaderProps) {
  return (
    <div className="ax-drawer__header">
      <div>
        <strong className="ax-drawer__title">{title}</strong>
        {description ? (
          <p className="ax-drawer__description">{description}</p>
        ) : null}
      </div>
      {onClose ? (
        <button
          aria-label="Close drawer"
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

export function DrawerContent({ children }: { children: React.ReactNode }) {
  return <div className="ax-drawer__content">{children}</div>;
}
