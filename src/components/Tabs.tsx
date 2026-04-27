import * as React from "react";

type TabsContextValue = {
  value: string;
  setValue: (v: string) => void;
};

const TabsContext = React.createContext<TabsContextValue | null>(null);

export function Tabs({ defaultValue, children }: { defaultValue: string; children: React.ReactNode }) {
  const [value, setValue] = React.useState(defaultValue);

  return (
    <TabsContext.Provider value={{ value, setValue }}>
      <div className="ax-tabs">
        {children}
      </div>
    </TabsContext.Provider>
  );
}

export function TabList({ children }: { children: React.ReactNode }) {
  return <div className="ax-tabs__list">{children}</div>;
}

export function TabTrigger({ value, children }: { value: string; children: React.ReactNode }) {
  const ctx = React.useContext(TabsContext);
  if (!ctx) return null;

  const active = ctx.value === value;

  return (
    <button
      className="ax-tabs__trigger"
      data-active={active}
      onClick={() => ctx.setValue(value)}
    >
      {children}
    </button>
  );
}

export function TabPanel({ value, children }: { value: string; children: React.ReactNode }) {
  const ctx = React.useContext(TabsContext);
  if (!ctx) return null;

  if (ctx.value !== value) return null;

  return <div className="ax-tab__panel">{children}</div>;
}
