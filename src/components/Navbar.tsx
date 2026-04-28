import * as React from "react";

export type NavbarProps = React.HTMLAttributes<HTMLElement>;

export const Navbar = React.forwardRef<HTMLElement, NavbarProps>(
  ({ className, ...props }, ref) => {
    return (
      <header
        ref={ref}
        className={["ax-navbar", className].filter(Boolean).join(" ")}
        {...props}
      />
    );
  }
);

Navbar.displayName = "Navbar";

export type NavbarBrandProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const NavbarBrand = React.forwardRef<HTMLAnchorElement, NavbarBrandProps>(
  ({ className, ...props }, ref) => {
    return (
      <a
        ref={ref}
        className={["ax-navbar__brand", className].filter(Boolean).join(" ")}
        {...props}
      />
    );
  }
);

NavbarBrand.displayName = "NavbarBrand";

export type NavbarLinksProps = React.HTMLAttributes<HTMLDivElement>;

export const NavbarLinks = React.forwardRef<HTMLDivElement, NavbarLinksProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={["ax-navbar__links", className].filter(Boolean).join(" ")}
        {...props}
      />
    );
  }
);

NavbarLinks.displayName = "NavbarLinks";

export type NavLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  active?: boolean;
};

export const NavLink = React.forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ active, className, ...props }, ref) => {
    return (
      <a
        ref={ref}
        className={["ax-nav-link", className].filter(Boolean).join(" ")}
        data-active={active}
        {...props}
      />
    );
  }
);

NavLink.displayName = "NavLink";
