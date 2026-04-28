import * as React from "react";

type DropdownContextValue = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

const DropdownContext = React.createContext<DropdownContextValue | null>(null);

export function DropdownMenu({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);
  const rootRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    window.addEventListener("pointerdown", handlePointerDown);
    return () => window.removeEventListener("pointerdown", handlePointerDown);
  }, [open]);

  return (
    <DropdownContext.Provider value={{ open, setOpen }}>
      <div className="ax-dropdown" ref={rootRef}>
        {children}
      </div>
    </DropdownContext.Provider>
  );
}

export function DropdownTrigger({ children }: { children: React.ReactNode }) {
  const ctx = React.useContext(DropdownContext);
  if (!ctx) return null;

  return (
    <button
      aria-expanded={ctx.open}
      aria-haspopup="menu"
      className="ax-button ax-dropdown__trigger"
      onClick={() => ctx.setOpen(!ctx.open)}
      type="button"
    >
      {children}
    </button>
  );
}

export function DropdownContent({ children }: { children: React.ReactNode }) {
  const ctx = React.useContext(DropdownContext);
  if (!ctx?.open) return null;

  return (
    <div className="ax-dropdown__menu" role="menu">
      {children}
    </div>
  );
}

export type DropdownItemProps = {
  href?: string;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export function DropdownItem({ className, ...props }: DropdownItemProps) {
  const ctx = React.useContext(DropdownContext);
  const classes = ["ax-dropdown__item", className].filter(Boolean).join(" ");

  if (props.href) {
    return <a className={classes} href={props.href} role="menuitem">{props.children}</a>;
  }

  return (
    <button
      className={classes}
      role="menuitem"
      type="button"
      onClick={() => {
        props.onClick?.();
        ctx?.setOpen(false);
      }}
    >
      {props.children}
    </button>
  );
}
