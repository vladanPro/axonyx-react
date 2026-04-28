import * as React from "react";

export type BreadcrumbItem = {
  label: React.ReactNode;
  href?: string;
};

export type BreadcrumbsProps = React.HTMLAttributes<HTMLElement> & {
  items?: BreadcrumbItem[];
  separator?: React.ReactNode;
};

export const Breadcrumbs = React.forwardRef<HTMLElement, BreadcrumbsProps>(
  ({ items, separator = "/", children, className, ...props }, ref) => {
    const content =
      items?.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <React.Fragment key={`${item.href ?? "current"}-${index}`}>
            {item.href && !isLast ? (
              <a href={item.href}>{item.label}</a>
            ) : (
              <span className="ax-breadcrumbs__current" aria-current="page">
                {item.label}
              </span>
            )}
            {!isLast ? (
              <span className="ax-breadcrumbs__separator" aria-hidden>
                {separator}
              </span>
            ) : null}
          </React.Fragment>
        );
      }) ?? children;

    return (
      <nav
        ref={ref}
        className={["ax-breadcrumbs", className].filter(Boolean).join(" ")}
        aria-label="Breadcrumb"
        {...props}
      >
        {content}
      </nav>
    );
  }
);

Breadcrumbs.displayName = "Breadcrumbs";
