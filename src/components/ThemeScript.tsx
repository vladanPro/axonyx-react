import * as React from "react";

const themes = ["bronze", "silver", "gold"] as const;

export type ThemeName = (typeof themes)[number];

export type ThemeScriptProps = {
  storageKey?: string;
  defaultTheme?: ThemeName;
  attribute?: "data-theme";
};

export function ThemeScript({
  storageKey = "axonyx.theme",
  defaultTheme = "silver",
  attribute = "data-theme",
}: ThemeScriptProps) {
  const script = `try{var k=${JSON.stringify(storageKey)};var d=${JSON.stringify(
    defaultTheme
  )};var a=${JSON.stringify(
    attribute
  )};var t=localStorage.getItem(k);if(t!=='bronze'&&t!=='silver'&&t!=='gold')t=d;document.documentElement.setAttribute(a,t)}catch(e){}`;

  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
