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

export function DropdownContent({
  align = "end",
  children,
}: {
  align?: "start" | "end";
  children: React.ReactNode;
}) {
  const ctx = React.useContext(DropdownContext);
  if (!ctx?.open) return null;

  return (
    <div className="ax-dropdown__menu" data-align={align} role="menu">
      {children}
    </div>
  );
}

export type DropdownItemProps = {
  href?: string;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  meta?: React.ReactNode;
  tone?: "default" | "danger";
};

export function DropdownItem({
  className,
  icon,
  meta,
  tone = "default",
  ...props
}: DropdownItemProps) {
  const ctx = React.useContext(DropdownContext);
  const classes = ["ax-dropdown__item", className].filter(Boolean).join(" ");
  const content = (
    <>
      <span className="ax-dropdown__item-main">
        {icon ? <span className="ax-dropdown__item-icon">{icon}</span> : null}
        <span>{props.children}</span>
      </span>
      {meta ? <span className="ax-dropdown__item-meta">{meta}</span> : null}
    </>
  );

  if (props.href) {
    return (
      <a className={classes} data-tone={tone} href={props.href} role="menuitem">
        {content}
      </a>
    );
  }

  return (
    <button
      className={classes}
      data-tone={tone}
      role="menuitem"
      type="button"
      onClick={() => {
        props.onClick?.();
        ctx?.setOpen(false);
      }}
    >
      {content}
    </button>
  );
}

export function DropdownLabel({ children }: { children: React.ReactNode }) {
  return <div className="ax-dropdown__label">{children}</div>;
}

export function DropdownSeparator() {
  return <div className="ax-dropdown__separator" role="separator" />;
}
