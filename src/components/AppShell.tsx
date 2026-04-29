import * as React from "react";

export type AppShellProps = React.HTMLAttributes<HTMLDivElement> & {
  railWidth?: "sm" | "md" | "lg";
  rail?: "default" | "none";
};

export const AppShell = React.forwardRef<HTMLDivElement, AppShellProps>(
  ({ railWidth = "md", rail = "default", className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={["ax-app-shell", className].filter(Boolean).join(" ")}
        data-rail-width={railWidth}
        data-rail={rail}
        {...props}
      />
    );
  }
);

AppShell.displayName = "AppShell";

export type SidebarProps = React.HTMLAttributes<HTMLElement> & {
  title?: React.ReactNode;
  actions?: React.ReactNode;
};

export const Sidebar = React.forwardRef<HTMLElement, SidebarProps>(
  ({ title, actions, children, className, ...props }, ref) => {
    return (
      <aside
        ref={ref}
        className={["ax-sidebar", className].filter(Boolean).join(" ")}
        {...props}
      >
        {title || actions ? (
          <div className="ax-sidebar__header">
            {title ? <strong className="ax-sidebar__title">{title}</strong> : null}
            {actions}
          </div>
        ) : null}
        <div className="ax-sidebar__body">{children}</div>
      </aside>
    );
  }
);

Sidebar.displayName = "Sidebar";

export type SidebarItemProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  active?: boolean;
  icon?: React.ReactNode;
  meta?: React.ReactNode;
};

export const SidebarItem = React.forwardRef<HTMLAnchorElement, SidebarItemProps>(
  ({ active, icon, meta, children, className, ...props }, ref) => {
    return (
      <a
        ref={ref}
        className={["ax-sidebar-item", className].filter(Boolean).join(" ")}
        data-active={active}
        {...props}
      >
        <span className="ax-sidebar-item__content">
          {icon}
          <span>{children}</span>
        </span>
        {meta ? <span className="ax-sidebar-item__meta">{meta}</span> : null}
      </a>
    );
  }
);

SidebarItem.displayName = "SidebarItem";

export type MainProps = React.HTMLAttributes<HTMLElement>;

export const Main = React.forwardRef<HTMLElement, MainProps>(
  ({ className, ...props }, ref) => {
    return (
      <main
        ref={ref}
        className={["ax-main", className].filter(Boolean).join(" ")}
        {...props}
      />
    );
  }
);

Main.displayName = "Main";

export type PageHeaderProps = React.HTMLAttributes<HTMLDivElement> & {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  actions?: React.ReactNode;
};

export const PageHeader = React.forwardRef<HTMLDivElement, PageHeaderProps>(
  ({ eyebrow, title, description, actions, className, ...props }, ref) => {
    return (
      <header
        ref={ref}
        className={["ax-page-header", className].filter(Boolean).join(" ")}
        {...props}
      >
        {eyebrow ? <div className="ax-page-header__eyebrow">{eyebrow}</div> : null}
        <h1 className="ax-page-header__title">{title}</h1>
        {description ? (
          <p className="ax-page-header__description">{description}</p>
        ) : null}
        {actions}
      </header>
    );
  }
);

PageHeader.displayName = "PageHeader";

export type ToolbarProps = React.HTMLAttributes<HTMLDivElement> & {
  wrap?: boolean;
};

export const Toolbar = React.forwardRef<HTMLDivElement, ToolbarProps>(
  ({ wrap = true, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={["ax-toolbar", className].filter(Boolean).join(" ")}
        data-wrap={wrap}
        {...props}
      />
    );
  }
);

Toolbar.displayName = "Toolbar";
