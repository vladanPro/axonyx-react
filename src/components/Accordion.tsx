import * as React from "react";

type AccordionContextValue = {
  value: string | null;
  setValue: (value: string | null) => void;
};

const AccordionContext = React.createContext<AccordionContextValue | null>(null);

export function Accordion({
  defaultValue = null,
  children,
}: {
  defaultValue?: string | null;
  children: React.ReactNode;
}) {
  const [value, setValue] = React.useState<string | null>(defaultValue);

  return (
    <AccordionContext.Provider value={{ value, setValue }}>
      <div className="ax-accordion">{children}</div>
    </AccordionContext.Provider>
  );
}

export function AccordionItem({
  value,
  title,
  children,
}: {
  value: string;
  title: React.ReactNode;
  children: React.ReactNode;
}) {
  const ctx = React.useContext(AccordionContext);
  if (!ctx) return null;

  const open = ctx.value === value;

  return (
    <div className="ax-accordion__item" data-open={open}>
      <button
        aria-expanded={open}
        className="ax-accordion__trigger"
        onClick={() => ctx.setValue(open ? null : value)}
        type="button"
      >
        {title}
      </button>
      {open ? <div className="ax-accordion__content">{children}</div> : null}
    </div>
  );
}
