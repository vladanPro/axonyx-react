import * as React from "react";

type PopoverContextValue = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

const PopoverContext = React.createContext<PopoverContextValue | null>(null);

export function Popover({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);
  const rootRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <PopoverContext.Provider value={{ open, setOpen }}>
      <div className="ax-popover" ref={rootRef}>
        {children}
      </div>
    </PopoverContext.Provider>
  );
}

export function PopoverTrigger({ children }: { children: React.ReactNode }) {
  const ctx = React.useContext(PopoverContext);
  if (!ctx) return null;

  return (
    <button
      aria-expanded={ctx.open}
      className="ax-button"
      onClick={() => ctx.setOpen(!ctx.open)}
      type="button"
    >
      {children}
    </button>
  );
}

export type PopoverContentProps = React.HTMLAttributes<HTMLDivElement> & {
  side?: "top" | "right" | "bottom" | "left";
};

export function PopoverContent({
  side = "bottom",
  className,
  ...props
}: PopoverContentProps) {
  const ctx = React.useContext(PopoverContext);
  if (!ctx?.open) return null;

  return (
    <div
      className={["ax-popover__content", className].filter(Boolean).join(" ")}
      data-side={side}
      {...props}
    />
  );
}
