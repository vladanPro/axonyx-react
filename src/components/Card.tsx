import * as React from "react";

export type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  surface?: "default" | "forged" | "brushed" | "inset";
  border?: "forged";
  recipe?:
    | "hero-card"
    | "feature-section"
    | "page-header"
    | "docs-section"
    | "docs-callout"
    | "docs-nav"
    | "docs-code-block"
    | "command-list";
  brush?: "horizontal" | "vertical" | "diagonal" | "reverse-diagonal";
};

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ surface, border, recipe, brush, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={["ax-card", className].filter(Boolean).join(" ")}
        data-surface={surface}
        data-border={border}
        data-recipe={recipe}
        data-brush={brush}
        {...props}
      />
    );
  }
);

Card.displayName = "Card";

export type CardHeaderProps = React.HTMLAttributes<HTMLDivElement>;

export const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={["ax-card__header", className].filter(Boolean).join(" ")}
        {...props}
      />
    );
  }
);

CardHeader.displayName = "CardHeader";

export type CardEyebrowProps = React.HTMLAttributes<HTMLParagraphElement>;

export const CardEyebrow = React.forwardRef<HTMLParagraphElement, CardEyebrowProps>(
  ({ className, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={["ax-card__eyebrow", className].filter(Boolean).join(" ")}
        {...props}
      />
    );
  }
);

CardEyebrow.displayName = "CardEyebrow";

export type CardTitleProps = React.HTMLAttributes<HTMLHeadingElement> & {
  as?: "h2" | "h3" | "h4";
};

export const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ as = "h3", className, ...props }, ref) => {
    const Tag = as;

    return (
      <Tag
        ref={ref}
        className={["ax-card__title", className].filter(Boolean).join(" ")}
        {...props}
      />
    );
  }
);

CardTitle.displayName = "CardTitle";

export type CardDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>;

export const CardDescription = React.forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ className, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={["ax-card__description", className].filter(Boolean).join(" ")}
        {...props}
      />
    );
  }
);

CardDescription.displayName = "CardDescription";

export type CardMediaProps = React.HTMLAttributes<HTMLDivElement>;

export const CardMedia = React.forwardRef<HTMLDivElement, CardMediaProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={["ax-card__media", className].filter(Boolean).join(" ")}
        {...props}
      />
    );
  }
);

CardMedia.displayName = "CardMedia";

export type CardContentProps = React.HTMLAttributes<HTMLDivElement>;

export const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={["ax-card__content", className].filter(Boolean).join(" ")}
        {...props}
      />
    );
  }
);

CardContent.displayName = "CardContent";

export type CardActionsProps = React.HTMLAttributes<HTMLDivElement>;

export const CardActions = React.forwardRef<HTMLDivElement, CardActionsProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={["ax-card__actions", className].filter(Boolean).join(" ")}
        {...props}
      />
    );
  }
);

CardActions.displayName = "CardActions";
