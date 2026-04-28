import * as React from "react";

import {
  DropdownContent,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "./DropdownMenu";

const themes = ["bronze", "silver", "gold"] as const;

type ThemeName = (typeof themes)[number];

function isTheme(value: string | null): value is ThemeName {
  return value === "bronze" || value === "silver" || value === "gold";
}

export function ThemeSwitcher({
  storageKey = "axonyx.theme",
  defaultTheme = "silver",
}: {
  storageKey?: string;
  defaultTheme?: ThemeName;
}) {
  const [theme, setTheme] = React.useState<ThemeName>(defaultTheme);

  React.useEffect(() => {
    const stored = window.localStorage.getItem(storageKey);
    const resolved = isTheme(stored) ? stored : defaultTheme;

    document.documentElement.dataset.theme = resolved;
    setTheme(resolved);
  }, [defaultTheme, storageKey]);

  return (
    <DropdownMenu>
      <DropdownTrigger>Theme: {theme}</DropdownTrigger>
      <DropdownContent>
        {themes.map((item) => (
          <DropdownItem
            key={item}
            onClick={() => {
              document.documentElement.dataset.theme = item;
              window.localStorage.setItem(storageKey, item);
              setTheme(item);
            }}
          >
            {item}
          </DropdownItem>
        ))}
      </DropdownContent>
    </DropdownMenu>
  );
}
