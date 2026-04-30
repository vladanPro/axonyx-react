import * as React from "react";

export type ListProps = React.HTMLAttributes<HTMLDivElement> & {
  divided?: boolean;
};

export const List = React.forwardRef<HTMLDivElement, ListProps>(
  ({ divided = false, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={["ax-list", className].filter(Boolean).join(" ")}
        data-divided={divided || undefined}
        {...props}
      />
    );
  }
);

List.displayName = "List";

export type ListItemProps = React.HTMLAttributes<HTMLDivElement> & {
  leading?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  trailing?: React.ReactNode;
  tone?: "default" | "accent" | "danger";
  interactive?: boolean;
};

export const ListItem = React.forwardRef<HTMLDivElement, ListItemProps>(
  (
    {
      leading,
      title,
      description,
      trailing,
      tone = "default",
      interactive = false,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={["ax-list-item", className].filter(Boolean).join(" ")}
        data-tone={tone}
        data-interactive={interactive || undefined}
        {...props}
      >
        {leading ? <span className="ax-list-item__leading">{leading}</span> : null}
        <span className="ax-list-item__body">
          <strong className="ax-list-item__title">{title}</strong>
          {description ? (
            <span className="ax-list-item__description">{description}</span>
          ) : null}
        </span>
        {trailing ? <span className="ax-list-item__trailing">{trailing}</span> : null}
      </div>
    );
  }
);

ListItem.displayName = "ListItem";
