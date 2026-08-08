import * as React from "react";

export type NavigationMenuProps = React.HTMLAttributes<HTMLElement> & {
  orientation?: "horizontal" | "vertical";
  label?: string;
};

export const NavigationMenu = React.forwardRef<HTMLElement, NavigationMenuProps>(
  (
    {
      orientation = "horizontal",
      label = "Primary navigation",
      className,
      ...props
    },
    ref
  ) => (
    <nav
      ref={ref}
      className={["ax-navigation-menu", className].filter(Boolean).join(" ")}
      data-orientation={orientation}
      aria-label={label}
      {...props}
    />
  )
);

NavigationMenu.displayName = "NavigationMenu";

export type NavigationMenuListProps = React.HTMLAttributes<HTMLDivElement>;

export const NavigationMenuList = React.forwardRef<
  HTMLDivElement,
  NavigationMenuListProps
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={["ax-navigation-menu__list", className]
      .filter(Boolean)
      .join(" ")}
    {...props}
  />
));

NavigationMenuList.displayName = "NavigationMenuList";

export type NavigationMenuLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  active?: boolean;
  tone?: "default" | "accent";
};

export const NavigationMenuLink = React.forwardRef<
  HTMLAnchorElement,
  NavigationMenuLinkProps
>(({ active, tone = "default", className, ...props }, ref) => (
  <a
    ref={ref}
    className={["ax-navigation-menu__link", className]
      .filter(Boolean)
      .join(" ")}
    data-active={active || undefined}
    data-tone={tone}
    aria-current={active ? "page" : undefined}
    {...props}
  />
));

NavigationMenuLink.displayName = "NavigationMenuLink";
