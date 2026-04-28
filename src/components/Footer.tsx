import * as React from "react";

export type FooterProps = React.HTMLAttributes<HTMLElement>;

export const Footer = React.forwardRef<HTMLElement, FooterProps>(
  ({ className, ...props }, ref) => {
    return (
      <footer
        ref={ref}
        className={["ax-footer", className].filter(Boolean).join(" ")}
        {...props}
      />
    );
  }
);

Footer.displayName = "Footer";

export type FooterLinksProps = React.HTMLAttributes<HTMLDivElement>;

export const FooterLinks = React.forwardRef<HTMLDivElement, FooterLinksProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={["ax-footer__links", className].filter(Boolean).join(" ")}
        {...props}
      />
    );
  }
);

FooterLinks.displayName = "FooterLinks";
