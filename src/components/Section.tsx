import * as React from "react";

export type SectionProps = React.HTMLAttributes<HTMLElement> & {
  eyebrow?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  spacing?: "sm" | "md" | "lg";
  align?: "start" | "center";
};

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  (
    { eyebrow, title, description, spacing = "md", align, children, className, ...props },
    ref
  ) => {
    return (
      <section
        ref={ref}
        className={["ax-section", className].filter(Boolean).join(" ")}
        data-spacing={spacing}
        data-align={align}
        {...props}
      >
        {eyebrow ? <p className="ax-section__eyebrow">{eyebrow}</p> : null}
        {title ? <h2 className="ax-section__title">{title}</h2> : null}
        {description ? (
          <p className="ax-section__description">{description}</p>
        ) : null}
        {children}
      </section>
    );
  }
);

Section.displayName = "Section";
