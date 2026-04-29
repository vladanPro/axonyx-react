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
      const titleId = title
        ? `ax-icon-${displayName.toLowerCase()}-${id}`
        : undefined;

      return (
        <svg
          ref={ref}
          className={["ax-icon", className].filter(Boolean).join(" ")}
          data-size={size}
          viewBox="0 0 24 24"
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

export const AxonyxIcon = createIcon(
  "AxonyxIcon",
  <>
    <path d="M4.5 3.5h4.7L19.5 20.5h-4.7L4.5 3.5z" fill="currentColor" stroke="none" />
    <path d="M19.5 3.5h-4.7L4.5 20.5h4.7L19.5 3.5z" fill="currentColor" stroke="none" opacity="0.72" />
    <circle cx="12" cy="12" r="1.65" fill="var(--ax-bg, #071019)" stroke="none" />
  </>
);

export const BoltIcon = createIcon("BoltIcon", <path d="M13 2 4 14h7l-1 8 10-13h-7l1-7z" />);
export const BookIcon = createIcon("BookIcon", <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v17H6.5A2.5 2.5 0 0 1 4 17.5v-12z M4 17.5A2.5 2.5 0 0 0 6.5 15H20" />);
export const BoxIcon = createIcon("BoxIcon", <><path d="M21 8.5 12 3 3 8.5l9 5.5 9-5.5z" /><path d="M3 8.5v7L12 21l9-5.5v-7" /><path d="M12 14v7" /></>);
export const CheckIcon = createIcon("CheckIcon", <path d="m5 12 4 4L19 6" />);
export const ChevronDownIcon = createIcon("ChevronDownIcon", <path d="m6 9 6 6 6-6" />);
export const CodeIcon = createIcon("CodeIcon", <><path d="m8 9-4 3 4 3" /><path d="m16 9 4 3-4 3" /><path d="m13 5-2 14" /></>);
export const CopyIcon = createIcon("CopyIcon", <><rect x="9" y="9" width="11" height="11" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></>);
export const ExternalLinkIcon = createIcon("ExternalLinkIcon", <><path d="M14 4h6v6" /><path d="M10 14 20 4" /><path d="M20 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h4" /></>);
export const GitHubIcon = createIcon("GitHubIcon", <><path d="M15 22v-4a3.5 3.5 0 0 0-1-2.7c3.2-.4 6.5-1.6 6.5-7A5.4 5.4 0 0 0 19 4.5 5 5 0 0 0 18.9 1S17.7.6 15 2.5a13.4 13.4 0 0 0-7 0C5.3.6 4.1 1 4.1 1A5 5 0 0 0 4 4.5a5.4 5.4 0 0 0-1.5 3.8c0 5.4 3.3 6.6 6.5 7A3.5 3.5 0 0 0 8 18v4" /><path d="M8 19c-3 .9-3-1.5-4.2-2" /></>);
export const GridIcon = createIcon("GridIcon", <><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /></>);
export const HomeIcon = createIcon("HomeIcon", <><path d="m3 11 9-8 9 8" /><path d="M5 10v10h14V10" /><path d="M10 20v-6h4v6" /></>);
export const LayersIcon = createIcon("LayersIcon", <><path d="m12 3 9 5-9 5-9-5 9-5z" /><path d="m3 13 9 5 9-5" /><path d="m3 18 9 5 9-5" /></>);
export const LinkIcon = createIcon("LinkIcon", <><path d="M10 13a5 5 0 0 0 7.1 0l2-2a5 5 0 0 0-7.1-7.1l-1.1 1.1" /><path d="M14 11a5 5 0 0 0-7.1 0l-2 2a5 5 0 0 0 7.1 7.1l1.1-1.1" /></>);
export const MenuIcon = createIcon("MenuIcon", <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>);
export const MoonIcon = createIcon("MoonIcon", <path d="M21 14.5A8.5 8.5 0 0 1 9.5 3 7 7 0 1 0 21 14.5z" />);
export const PackageIcon = createIcon("PackageIcon", <><path d="m7.5 4.3 9 5.2" /><path d="M21 8.5 12 3 3 8.5v7L12 21l9-5.5v-7z" /><path d="M12 21v-7" /><path d="m3 8.5 9 5.5 9-5.5" /></>);
export const SearchIcon = createIcon("SearchIcon", <><circle cx="11" cy="11" r="7" /><path d="m16.5 16.5 4 4" /></>);
export const SettingsIcon = createIcon("SettingsIcon", <><path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" /><path d="M19.4 15a1.8 1.8 0 0 0 .4 2l.1.1a2.1 2.1 0 0 1-3 3l-.1-.1a1.8 1.8 0 0 0-2-.4 1.8 1.8 0 0 0-1.1 1.7V21a2.1 2.1 0 0 1-4.2 0v-.2a1.8 1.8 0 0 0-1.1-1.7 1.8 1.8 0 0 0-2 .4l-.1.1a2.1 2.1 0 0 1-3-3l.1-.1a1.8 1.8 0 0 0 .4-2 1.8 1.8 0 0 0-1.7-1.1H2a2.1 2.1 0 0 1 0-4.2h.2a1.8 1.8 0 0 0 1.7-1.1 1.8 1.8 0 0 0-.4-2l-.1-.1a2.1 2.1 0 0 1 3-3l.1.1a1.8 1.8 0 0 0 2 .4 1.8 1.8 0 0 0 1.1-1.7V2a2.1 2.1 0 0 1 4.2 0v.2a1.8 1.8 0 0 0 1.1 1.7 1.8 1.8 0 0 0 2-.4l.1-.1a2.1 2.1 0 0 1 3 3l-.1.1a1.8 1.8 0 0 0-.4 2 1.8 1.8 0 0 0 1.7 1.1H22a2.1 2.1 0 0 1 0 4.2h-.2a1.8 1.8 0 0 0-1.7 1.1z" /></>);
export const SparkIcon = createIcon("SparkIcon", <><path d="M12 2 9.8 8.6 3 11l6.8 2.4L12 20l2.2-6.6L21 11l-6.8-2.4L12 2z" /><path d="M5 3v4" /><path d="M3 5h4" /><path d="M19 17v4" /><path d="M17 19h4" /></>);
export const TerminalIcon = createIcon("TerminalIcon", <><path d="m5 8 4 4-4 4" /><path d="M12 16h7" /><rect x="3" y="4" width="18" height="16" rx="2" /></>);
export const XIcon = createIcon("XIcon", <><path d="M18 6 6 18" /><path d="m6 6 12 12" /></>);
