import * as React from "react";

export type ThemeScopeProps = React.HTMLAttributes<HTMLDivElement> & {
  finish?: "classic" | "alloy" | "forge" | "legura";
  palette?: "bronze" | "silver" | "gold";
  mode?: "light" | "dark";
};

export const ThemeScope = React.forwardRef<HTMLDivElement, ThemeScopeProps>(
  ({ finish = "classic", palette = "bronze", mode = "dark", className, ...props }, ref) => (
    <div
      {...props}
      ref={ref}
      className={["ax-theme-scope", className].filter(Boolean).join(" ")}
      data-foundry={palette}
      data-foundry-style={finish}
      data-foundry-mode={mode}
    />
  )
);

ThemeScope.displayName = "ThemeScope";
