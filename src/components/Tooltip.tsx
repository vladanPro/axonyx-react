import * as React from "react";

export type TooltipProps = React.HTMLAttributes<HTMLSpanElement> & {
  content: React.ReactNode;
};

export function Tooltip({ content, children, className, ...props }: TooltipProps) {
  return (
    <span className={["ax-tooltip", className].filter(Boolean).join(" ")} {...props}>
      {children}
      <span className="ax-tooltip__content" role="tooltip">
        {content}
      </span>
    </span>
  );
}
