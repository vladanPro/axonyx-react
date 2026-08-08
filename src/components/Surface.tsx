import * as React from "react";

export type SurfaceProps = React.HTMLAttributes<HTMLElement> & {
  eyebrow?: React.ReactNode;
  title?: React.ReactNode;
  variant?: "brushed" | "inset" | "forged";
  padding?: "sm" | "md" | "lg";
};

export const Surface = React.forwardRef<HTMLElement, SurfaceProps>(
  ({ eyebrow, title, variant, padding, children, className, ...props }, ref) => (
    <section
      ref={ref}
      className={["ax-surface", className].filter(Boolean).join(" ")}
      data-variant={variant}
      data-padding={padding}
      {...props}
    >
      {eyebrow ? <p className="ax-surface__eyebrow">{eyebrow}</p> : null}
      {title ? <h2 className="ax-surface__title">{title}</h2> : null}
      {children}
    </section>
  )
);

Surface.displayName = "Surface";
