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

export const AxonyxIcon = createIcon("AxonyxIcon", <><path d="M4.5 3.5h4.7L19.5 20.5h-4.7L4.5 3.5z" fill="currentColor" stroke="none" /><path d="M19.5 3.5h-4.7L4.5 20.5h4.7L19.5 3.5z" fill="currentColor" stroke="none" opacity="0.72" /><circle cx="12" cy="12" r="1.65" fill="var(--ax-bg, #071019)" stroke="none" /></>);

export const BoltIcon = createIcon("BoltIcon", <><path d="M13 2 5 13h6l-1 9 9-13h-6l0-7Z" /></>);
export const BookIcon = createIcon("BookIcon", <><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v17H6.5A2.5 2.5 0 0 1 4 17.5v-12Z" /><path d="M4 17.5A2.5 2.5 0 0 0 6.5 15H20" /><path d="M8 7h8" /></>);
export const BoxIcon = createIcon("BoxIcon", <><path d="M4 7.5 12 3l8 4.5v9L12 21l-8-4.5v-9Z" /><path d="M12 12 4.5 7.8" /><path d="M12 12l7.5-4.2" /><path d="M12 12v8.5" /></>);
export const CardIcon = createIcon("CardIcon", <><rect x="3.5" y="5" width="17" height="14" rx="2" /><path d="M6.5 9h11" /><path d="M6.5 13h7" /></>);
export const CheckIcon = createIcon("CheckIcon", <><path d="m5 12 4 4L19 6" /></>);
export const ChevronDownIcon = createIcon("ChevronDownIcon", <><path d="m6 9 6 6 6-6" /></>);
export const CodeIcon = createIcon("CodeIcon", <><path d="m9 8-4 4 4 4" /><path d="m15 8 4 4-4 4" /><path d="m13 5-2 14" /></>);
export const CopyIcon = createIcon("CopyIcon", <><rect x="9" y="9" width="11" height="11" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></>);
export const CartIcon = createIcon("CartIcon", <><path d="M3 5h2.4l1.8 9.2a1.8 1.8 0 0 0 1.8 1.5h7.8a1.8 1.8 0 0 0 1.8-1.4L21 8H7.1" /><circle cx="10" cy="19" r="1.2" fill="currentColor" stroke="none" /><circle cx="17" cy="19" r="1.2" fill="currentColor" stroke="none" /></>);
export const CssIcon = createIcon("CssIcon", <><path d="M6 4h12l-1.1 13.2L12 20l-4.9-2.8L6 4Z" /><path d="M9 8h6l-.3 3H9.3l.2 3 2.5 1.3 2.5-1.3.2-2" /></>);
export const DeleteIcon = createIcon("DeleteIcon", <><path d="M4 7h16" /><path d="M9 7V4.8A1.8 1.8 0 0 1 10.8 3h2.4A1.8 1.8 0 0 1 15 4.8V7" /><path d="m6.2 7 .9 12.2A2 2 0 0 0 9.1 21h5.8a2 2 0 0 0 2-1.8L17.8 7" /><path d="M10 11v6" /><path d="M14 11v6" /></>);
export const DonateIcon = createIcon("DonateIcon", <><path d="M12 21s-7.5-4.4-8.7-10.2C2.6 7.3 4.7 5 7.5 5c1.7 0 3.2.9 4.5 2.5C13.3 5.9 14.8 5 16.5 5c2.8 0 4.9 2.3 4.2 5.8C19.5 16.6 12 21 12 21Z" /></>);
export const EditIcon = createIcon("EditIcon", <><path d="m4 20 4.1-.8L18.7 8.6a1.9 1.9 0 0 0 0-2.7l-.6-.6a1.9 1.9 0 0 0-2.7 0L4.8 15.9 4 20Z" /><path d="m13.9 6.8 3.3 3.3" /></>);
export const ExternalLinkIcon = createIcon("ExternalLinkIcon", <><path d="M14 4h6v6" /><path d="M10 14 20 4" /><path d="M20 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h4" /></>);
export const FilterIcon = createIcon("FilterIcon", <><path d="M4 6.2h16" /><path d="M7.5 11.2h9" /><path d="M10.6 16.2h2.8" /><path d="M5.2 4.2h13.6L14 12.1v5.2l-4 2v-7.2L5.2 4.2Z" opacity="0.9" /></>);
export const FormIcon = createIcon("FormIcon", <><rect x="5" y="3.5" width="14" height="17" rx="2" /><path d="M8 7.5h8" /><path d="M8 11.5h8" /><path d="M8 15.5h5" /></>);
export const GitHubIcon = createIcon("GitHubIcon", <><path d="M12 2.8a9.2 9.2 0 0 0-2.9 17.93c.46.08.63-.2.63-.44v-1.62c-2.56.56-3.1-1.1-3.1-1.1-.42-1.06-1.03-1.34-1.03-1.34-.84-.57.06-.56.06-.56.93.07 1.42.96 1.42.96.83 1.42 2.18 1.01 2.71.77.08-.6.32-1.01.58-1.24-2.04-.23-4.19-1.02-4.19-4.55 0-1 .36-1.82.95-2.46-.1-.24-.41-1.18.09-2.43 0 0 .78-.25 2.54.94A8.8 8.8 0 0 1 12 6.35c.78 0 1.56.1 2.3.31 1.75-1.19 2.53-.94 2.53-.94.5 1.25.19 2.19.1 2.43.59.64.94 1.46.94 2.46 0 3.54-2.15 4.32-4.2 4.55.33.29.63.85.63 1.72v2.55c0 .24.16.53.64.44A9.2 9.2 0 0 0 12 2.8Z" /></>);
export const GridIcon = createIcon("GridIcon", <><rect x="3.5" y="3.5" width="6.5" height="6.5" rx="1.4" /><rect x="14" y="3.5" width="6.5" height="6.5" rx="1.4" /><rect x="14" y="14" width="6.5" height="6.5" rx="1.4" /><rect x="3.5" y="14" width="6.5" height="6.5" rx="1.4" /></>);
export const HomeIcon = createIcon("HomeIcon", <><path d="m3 11 9-8 9 8" /><path d="M5 10v10h14V10" /><path d="M10 20v-6h4v6" /></>);
export const LayersIcon = createIcon("LayersIcon", <><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 12 9 5 9-5" /><path d="m3 16 9 5 9-5" /></>);
export const LinkIcon = createIcon("LinkIcon", <><path d="M10 13a5 5 0 0 0 7.1 0l2-2a5 5 0 0 0-7.1-7.1l-1.1 1.1" /><path d="M14 11a5 5 0 0 0-7.1 0l-2 2a5 5 0 0 0 7.1 7.1l1.1-1.1" /></>);
export const MenuIcon = createIcon("MenuIcon", <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>);
export const MinusIcon = createIcon("MinusIcon", <><path d="M5 12h14" /></>);
export const MoonIcon = createIcon("MoonIcon", <><path d="M21 14.5A8.5 8.5 0 0 1 9.5 3 7 7 0 1 0 21 14.5z" /></>);
export const PackageIcon = BoxIcon;
export const PlusIcon = createIcon("PlusIcon", <><path d="M12 5v14" /><path d="M5 12h14" /></>);
export const PreviewIcon = createIcon("PreviewIcon", <><path d="M3 12s3.3-6 9-6 9 6 9 6-3.3 6-9 6-9-6-9-6Z" /><circle cx="12" cy="12" r="2.7" /></>);
export const ReactIcon = createIcon("ReactIcon", <><circle cx="12" cy="12" r="2.1" /><ellipse cx="12" cy="12" rx="8.4" ry="3.4" /><ellipse cx="12" cy="12" rx="8.4" ry="3.4" transform="rotate(60 12 12)" /><ellipse cx="12" cy="12" rx="8.4" ry="3.4" transform="rotate(120 12 12)" /></>);
export const SearchIcon = createIcon("SearchIcon", <><circle cx="11" cy="11" r="7" /><path d="m16.5 16.5 4 4" /></>);
export const SendIcon = createIcon("SendIcon", <><path d="M3 11.5 20 4l-4.8 16-3.8-6.2L3 11.5Z" /><path d="m20 4-8.6 9.8" /></>);
export const ServerIcon = createIcon("ServerIcon", <><rect x="4" y="4" width="16" height="6" rx="1.5" /><rect x="4" y="14" width="16" height="6" rx="1.5" /><circle cx="7" cy="7" r=".8" fill="currentColor" stroke="none" /><circle cx="7" cy="17" r=".8" fill="currentColor" stroke="none" /><path d="M10 7h6" /><path d="M10 17h6" /></>);
export const ClientIcon = createIcon("ClientIcon", <><rect x="4" y="5" width="16" height="11" rx="2" /><path d="M9 20h6" /><path d="M12 16v4" /></>);
export const SettingsIcon = createIcon("SettingsIcon", <><path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" /><path d="M19.4 15a1.8 1.8 0 0 0 .4 2l.1.1a2.1 2.1 0 0 1-3 3l-.1-.1a1.8 1.8 0 0 0-2-.4 1.8 1.8 0 0 0-1.1 1.7V21a2.1 2.1 0 0 1-4.2 0v-.2a1.8 1.8 0 0 0-1.1-1.7 1.8 1.8 0 0 0-2 .4l-.1.1a2.1 2.1 0 0 1-3-3l.1-.1a1.8 1.8 0 0 0 .4-2 1.8 1.8 0 0 0-1.7-1.1H2a2.1 2.1 0 0 1 0-4.2h.2a1.8 1.8 0 0 0 1.7-1.1 1.8 1.8 0 0 0-.4-2l-.1-.1a2.1 2.1 0 0 1 3-3l.1.1a1.8 1.8 0 0 0 2 .4 1.8 1.8 0 0 0 1.1-1.7V2a2.1 2.1 0 0 1 4.2 0v.2a1.8 1.8 0 0 0 1.1 1.7 1.8 1.8 0 0 0 2-.4l.1-.1a2.1 2.1 0 0 1 3 3l-.1.1a1.8 1.8 0 0 0-.4 2 1.8 1.8 0 0 0 1.7 1.1H22a2.1 2.1 0 0 1 0 4.2h-.2a1.8 1.8 0 0 0-1.7 1.1z" /></>);
export const ShieldIcon = createIcon("ShieldIcon", <><path d="M12 3 20 6.3v5.1c0 4.9-3.1 7.8-8 9.6-4.9-1.8-8-4.7-8-9.6V6.3L12 3Z" /><path d="M8.2 11.8 11 14.6l5-6" /></>);
export const SortIcon = createIcon("SortIcon", <><path d="M8 5v14" /><path d="m5.5 7.5 2.5-2.5 2.5 2.5" /><path d="M16 19V5" /><path d="m13.5 16.5 2.5 2.5 2.5-2.5" /></>);
export const SparkIcon = createIcon("SparkIcon", <><path d="M12 2 9.8 8.6 3 11l6.8 2.4L12 20l2.2-6.6L21 11l-6.8-2.4L12 2z" /><path d="M5 3v4" /><path d="M3 5h4" /><path d="M19 17v4" /><path d="M17 19h4" /></>);
export const TerminalIcon = createIcon("TerminalIcon", <><rect x="3.5" y="5" width="17" height="14" rx="2" /><path d="M3.5 8.2h17" /><path d="m7 11 2.7 2L7 15" /><path d="M12 15h5" /></>);
export const ThemeIcon = createIcon("ThemeIcon", <><circle cx="12" cy="12" r="8.8" /><path d="M12 3.2v17.6" /></>);
export const TimeIcon = createIcon("TimeIcon", <><circle cx="12" cy="12" r="8.5" /><path d="M12 7.2v5.3l3.6 2.1" /></>);
export const UploadIcon = createIcon("UploadIcon", <><path d="M12 16V6" /><path d="m8.5 9.5 3.5-3.5 3.5 3.5" /><path d="M4 18.5v.7A1.8 1.8 0 0 0 5.8 21h12.4A1.8 1.8 0 0 0 20 19.2v-.7" /></>);
export const DownloadIcon = createIcon("DownloadIcon", <><path d="M12 6v10" /><path d="m8.5 12.5 3.5 3.5 3.5-3.5" /><path d="M4 18.5v.7A1.8 1.8 0 0 0 5.8 21h12.4A1.8 1.8 0 0 0 20 19.2v-.7" /></>);
export const InfoIcon = createIcon("InfoIcon", <><circle cx="12" cy="12" r="8.6" /><path d="M12 10.2v6" /><circle cx="12" cy="7.4" r=".9" fill="currentColor" stroke="none" /></>);
export const WarningIcon = createIcon("WarningIcon", <><path d="M12 3.8 21 19.2a1.2 1.2 0 0 1-1 1.8H4a1.2 1.2 0 0 1-1-1.8L12 3.8Z" /><path d="M12 9v5.3" /><circle cx="12" cy="17.4" r=".9" fill="currentColor" stroke="none" /></>);
export const XIcon = createIcon("XIcon", <><path d="M18 6 6 18" /><path d="m6 6 12 12" /></>);

export const AlertIcon = ShieldIcon;
