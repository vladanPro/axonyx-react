import * as React from "react";

export type IconProps = React.SVGAttributes<SVGSVGElement> & {
  size?: "sm" | "md" | "lg";
  title?: string;
};

type IconBody = React.ReactNode;

function createIcon(displayName: string, body: IconBody) {
  const Icon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ size = "md", title, className, children, ...props }, ref) => {
      const id = React.useId();
      const titleId = title ? `ax-icon-${displayName.toLowerCase()}-${id}` : undefined;

      return (
        <svg
          ref={ref}
          className={["ax-icon", className].filter(Boolean).join(" ")}
          data-size={size}
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden={title ? undefined : true}
          aria-labelledby={titleId}
          {...props}
        >
          {title ? <title id={titleId}>{title}</title> : null}
          {body}
          {children}
        </svg>
      );
    }
  );

  Icon.displayName = displayName;
  return Icon;
}

const plate = { fill: "currentColor", stroke: "none", opacity: 0.16 } as const;
const plateStrong = { fill: "currentColor", stroke: "none", opacity: 0.28 } as const;

export const AxonyxIcon = createIcon("AxonyxIcon", <><path d="M4.5 3.5h4.7L19.5 20.5h-4.7L4.5 3.5z" fill="currentColor" stroke="none" /><path d="M19.5 3.5h-4.7L4.5 20.5h4.7L19.5 3.5z" fill="currentColor" stroke="none" opacity="0.72" /><circle cx="12" cy="12" r="1.65" fill="var(--ax-bg, #071019)" stroke="none" /></>);

export const BoltIcon = createIcon("BoltIcon", <><path d="M13.4 2.4 4.6 13.2h5.8L9.4 21.6 19.6 8.8h-5.8l-.4-6.4Z" {...plateStrong} /><path d="M13.4 2.4 4.6 13.2h5.8L9.4 21.6 19.6 8.8h-5.8l-.4-6.4Z" /><path d="M9.6 13.2h4.8" /><circle cx="12" cy="13.2" r="1.25" fill="currentColor" stroke="none" /></>);
export const BookIcon = createIcon("BookIcon", <><path d="M4 5.3 7 3h13v17H7l-3-2.2V5.3Z" {...plate} /><path d="M4 5.3A2.7 2.7 0 0 1 6.7 3H20v17H6.7A2.7 2.7 0 0 1 4 17.3v-12Z" /><path d="M4 17.3A2.7 2.7 0 0 0 6.7 15H20" /><path d="M8 6.5h8" /><path d="M8 9.5h6" /><circle cx="8" cy="17.2" r="1" fill="currentColor" stroke="none" /></>);
export const BoxIcon = createIcon("BoxIcon", <><path d="M4 7.2 12 2.8l8 4.4v9.4L12 21.2l-8-4.6V7.2Z" {...plate} /><path d="M4 7.2 12 2.8l8 4.4v9.4L12 21.2l-8-4.6V7.2Z" /><path d="M7.2 8.2 12 5.6l4.8 2.6-4.8 2.7-4.8-2.7Z" {...plateStrong} /><path d="M12 10.9 4.4 7.5" /><path d="M12 10.9l7.6-3.4" /><path d="M12 10.9v9.7" /><path d="M7.4 15.1 12 17.7l4.6-2.6" /><circle cx="12" cy="10.9" r="1.35" fill="currentColor" stroke="none" /></>);
export const CheckIcon = createIcon("CheckIcon", <><path d="M4.4 12.4 8.8 16.8 19.6 5.8 17.4 4.7 8.8 13.4 6.1 10.8Z" {...plateStrong} /><path d="M4.8 12.2 9 16.4 19.2 6.2" /><path d="M8.2 16.2h4.6" /></>);
export const ChevronDownIcon = createIcon("ChevronDownIcon", <><path d="M5.5 8.5h13L12 15.8 5.5 8.5Z" {...plate} /><path d="m6 9 6 6 6-6" /><path d="M8.5 9h7" /></>);
export const CodeIcon = createIcon("CodeIcon", <><path d="M4 7h16v10H4V7Z" {...plate} /><path d="M4.5 7.5h15v9h-15v-9Z" /><path d="m9 10-2 2 2 2" /><path d="m15 10 2 2-2 2" /><path d="m13 8.8-2 6.4" /><path d="M7 5.5h10" /><path d="M8 18.5h8" /></>);
export const CopyIcon = createIcon("CopyIcon", <><path d="M8.5 8.5h11v11h-11Z" {...plateStrong} /><rect x="8.5" y="8.5" width="11" height="11" rx="2" /><path d="M5.5 15.5H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8.5a2 2 0 0 1 2 2v.5" /><path d="M11.5 11.5h4" /><circle cx="14" cy="14" r="1" fill="currentColor" stroke="none" /></>);
export const CssIcon = createIcon("CssIcon", <><path d="M5 3.5h14l-1.2 13.8L12 20.5l-5.8-3.2L5 3.5Z" {...plate} /><path d="M5 3.5h14l-1.2 13.8L12 20.5l-5.8-3.2L5 3.5Z" /><path d="M8.3 7.2h7.4l-.35 3.15H8.75l.25 3.2 3 1.55 3-1.55.22-2.05" /><path d="M9.2 17.9h5.6" /><circle cx="12" cy="10.35" r="1" fill="currentColor" stroke="none" /></>);
export const ExternalLinkIcon = createIcon("ExternalLinkIcon", <><path d="M4 5h11v4h5v11H4V5Z" {...plate} /><path d="M14 4h6v6" /><path d="M10 14 20 4" /><path d="M19.5 14.5V18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6.5a2 2 0 0 1 2-2h3.5" /><path d="M7.5 17h6" /></>);
export const GitHubIcon = createIcon("GitHubIcon", <><path d="M12 2.8a9.2 9.2 0 0 0-2.9 17.93c.46.08.63-.2.63-.44v-1.62c-2.56.56-3.1-1.1-3.1-1.1-.42-1.06-1.03-1.34-1.03-1.34-.84-.57.06-.56.06-.56.93.07 1.42.96 1.42.96.83 1.42 2.18 1.01 2.71.77.08-.6.32-1.01.58-1.24-2.04-.23-4.19-1.02-4.19-4.55 0-1 .36-1.82.95-2.46-.1-.24-.41-1.18.09-2.43 0 0 .78-.25 2.54.94A8.8 8.8 0 0 1 12 6.35c.78 0 1.56.1 2.3.31 1.75-1.19 2.53-.94 2.53-.94.5 1.25.19 2.19.1 2.43.59.64.94 1.46.94 2.46 0 3.54-2.15 4.32-4.2 4.55.33.29.63.85.63 1.72v2.55c0 .24.16.53.64.44A9.2 9.2 0 0 0 12 2.8Z" fill="currentColor" stroke="none" /></>);
export const GridIcon = createIcon("GridIcon", <><path d="M3.5 3.5h6.5v6.5H3.5Z" {...plateStrong} /><path d="M14 14h6.5v6.5H14Z" {...plateStrong} /><rect x="3.5" y="3.5" width="6.5" height="6.5" rx="1.4" /><rect x="14" y="3.5" width="6.5" height="6.5" rx="1.4" /><rect x="14" y="14" width="6.5" height="6.5" rx="1.4" /><rect x="3.5" y="14" width="6.5" height="6.5" rx="1.4" /><circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" /></>);
export const HomeIcon = createIcon("HomeIcon", <><path d="m3.5 11 8.5-8 8.5 8-2 1.3V20h-13v-7.7L3.5 11Z" {...plate} /><path d="m3.5 11 8.5-8 8.5 8" /><path d="M5.5 10.5V20h13v-9.5" /><path d="M10 20v-6h4v6" /><path d="M8 11.2h8" /></>);
export const LayersIcon = createIcon("LayersIcon", <><path d="m12 3.2 8.5 4.8-8.5 4.8L3.5 8 12 3.2Z" {...plateStrong} /><path d="m12 3.2 8.5 4.8-8.5 4.8L3.5 8 12 3.2Z" /><path d="m6.8 8 5.2-2.9L17.2 8" /><path d="m3.5 12 8.5 4.8 8.5-4.8" /><path d="m3.5 16 8.5 4.8 8.5-4.8" /><circle cx="12" cy="12.8" r="1.25" fill="currentColor" stroke="none" /></>);
export const LinkIcon = createIcon("LinkIcon", <><path d="M7 10h10v4H7z" {...plateStrong} /><path d="M10 13a5 5 0 0 0 7.1 0l2-2a5 5 0 0 0-7.1-7.1l-1.1 1.1" /><path d="M14 11a5 5 0 0 0-7.1 0l-2 2a5 5 0 0 0 7.1 7.1l1.1-1.1" /><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" /></>);
export const MenuIcon = createIcon("MenuIcon", <><path d="M4 6h16v3H4z" {...plate} /><path d="M4 15h16v3H4z" {...plate} /><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /><circle cx="7" cy="12" r="1" fill="currentColor" stroke="none" /></>);
export const MoonIcon = createIcon("MoonIcon", <><path d="M21 14.5A8.5 8.5 0 0 1 9.5 3 7 7 0 1 0 21 14.5z" {...plateStrong} /><path d="M21 14.5A8.5 8.5 0 0 1 9.5 3 7 7 0 1 0 21 14.5z" /><path d="M14.5 4.2a6 6 0 0 0 5.3 8.3" /></>);
export const PackageIcon = BoxIcon;
export const ReactIcon = createIcon("ReactIcon", <><circle cx="12" cy="12" r="5.2" {...plate} /><circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" /><ellipse cx="12" cy="12" rx="8.4" ry="3.4" /><ellipse cx="12" cy="12" rx="8.4" ry="3.4" transform="rotate(60 12 12)" /><ellipse cx="12" cy="12" rx="8.4" ry="3.4" transform="rotate(120 12 12)" /><path d="M7.8 12h8.4" /></>);
export const SearchIcon = createIcon("SearchIcon", <><circle cx="11" cy="11" r="7" {...plate} /><circle cx="11" cy="11" r="7" /><path d="m16.5 16.5 4 4" /><path d="M8.5 11h5" /></>);
export const SettingsIcon = createIcon("SettingsIcon", <><circle cx="12" cy="12" r="6.3" {...plate} /><path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" /><path d="M19.4 15a1.8 1.8 0 0 0 .4 2l.1.1a2.1 2.1 0 0 1-3 3l-.1-.1a1.8 1.8 0 0 0-2-.4 1.8 1.8 0 0 0-1.1 1.7V21a2.1 2.1 0 0 1-4.2 0v-.2a1.8 1.8 0 0 0-1.1-1.7 1.8 1.8 0 0 0-2 .4l-.1.1a2.1 2.1 0 0 1-3-3l.1-.1a1.8 1.8 0 0 0 .4-2 1.8 1.8 0 0 0-1.7-1.1H2a2.1 2.1 0 0 1 0-4.2h.2a1.8 1.8 0 0 0 1.7-1.1 1.8 1.8 0 0 0-.4-2l-.1-.1a2.1 2.1 0 0 1 3-3l.1.1a1.8 1.8 0 0 0 2 .4 1.8 1.8 0 0 0 1.1-1.7V2a2.1 2.1 0 0 1 4.2 0v.2a1.8 1.8 0 0 0 1.1 1.7 1.8 1.8 0 0 0 2-.4l.1-.1a2.1 2.1 0 0 1 3 3l-.1.1a1.8 1.8 0 0 0-.4 2 1.8 1.8 0 0 0 1.7 1.1H22a2.1 2.1 0 0 1 0 4.2h-.2a1.8 1.8 0 0 0-1.7 1.1z" /><circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" /></>);
export const ShieldIcon = createIcon("ShieldIcon", <><path d="M12 3 20 6.3v5.1c0 4.9-3.1 7.8-8 9.6-4.9-1.8-8-4.7-8-9.6V6.3L12 3Z" {...plate} /><path d="M12 3 20 6.3v5.1c0 4.9-3.1 7.8-8 9.6-4.9-1.8-8-4.7-8-9.6V6.3L12 3Z" /><path d="M8.2 11.8 11 14.6l5-6" /><path d="M8.5 6.9h7" /><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" /></>);
export const SparkIcon = createIcon("SparkIcon", <><path d="M12 2 9.8 8.6 3 11l6.8 2.4L12 20l2.2-6.6L21 11l-6.8-2.4L12 2z" {...plateStrong} /><path d="M12 2 9.8 8.6 3 11l6.8 2.4L12 20l2.2-6.6L21 11l-6.8-2.4L12 2z" /><path d="M5 3v4" /><path d="M3 5h4" /><path d="M19 17v4" /><path d="M17 19h4" /><circle cx="12" cy="11" r="1.15" fill="currentColor" stroke="none" /></>);
export const TerminalIcon = createIcon("TerminalIcon", <><rect x="3.5" y="5" width="17" height="14" rx="2" {...plate} /><rect x="3.5" y="5" width="17" height="14" rx="2" /><path d="M3.5 8.2h17" /><path d="m7 11 2.7 2L7 15" /><path d="M12 15h5" /><circle cx="6.4" cy="6.65" r=".65" fill="currentColor" stroke="none" /><circle cx="8.6" cy="6.65" r=".65" fill="currentColor" stroke="none" /></>);
export const XIcon = createIcon("XIcon", <><path d="M6 5h12l1 1-13 13-1-1V6l1-1Z" {...plate} /><path d="M18 6 6 18" /><path d="m6 6 12 12" /><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" /></>);
