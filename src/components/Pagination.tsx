import * as React from "react";

export type PaginationItem = {
  label: React.ReactNode;
  href?: string;
  current?: boolean;
  disabled?: boolean;
};

export type PaginationProps = React.HTMLAttributes<HTMLElement> & {
  items: PaginationItem[];
  label?: string;
};

export const Pagination = React.forwardRef<HTMLElement, PaginationProps>(
  ({ items, label = "Pagination", className, ...props }, ref) => {
    return (
      <nav
        ref={ref}
        className={["ax-pagination", className].filter(Boolean).join(" ")}
        aria-label={label}
        {...props}
      >
        {items.map((item, index) => {
          const key = `${item.label}-${index}`;
          const commonProps = {
            "aria-current": item.current ? ("page" as const) : undefined,
            "aria-disabled": item.disabled || undefined,
            "data-current": item.current || undefined,
            "data-disabled": item.disabled || undefined,
          };

          return item.href && !item.disabled ? (
            <a key={key} href={item.href} {...commonProps}>
              {item.label}
            </a>
          ) : (
            <span key={key} {...commonProps}>
              {item.label}
            </span>
          );
        })}
      </nav>
    );
  }
);

Pagination.displayName = "Pagination";
