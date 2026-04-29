import * as React from "react";

export type EmptyStateProps = React.HTMLAttributes<HTMLDivElement> & {
  icon?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  actions?: React.ReactNode;
};

export const EmptyState = React.forwardRef<HTMLDivElement, EmptyStateProps>(
  ({ icon, title, description, actions, children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={["ax-empty-state", className].filter(Boolean).join(" ")}
        {...props}
      >
        {icon ? <div className="ax-empty-state__icon">{icon}</div> : null}
        <strong className="ax-empty-state__title">{title}</strong>
        {description ? (
          <p className="ax-empty-state__description">{description}</p>
        ) : null}
        {children}
        {actions ? <div className="ax-empty-state__actions">{actions}</div> : null}
      </div>
    );
  }
);

EmptyState.displayName = "EmptyState";
