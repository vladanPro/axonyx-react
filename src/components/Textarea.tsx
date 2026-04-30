import * as React from "react";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  uiSize?: "sm" | "md" | "lg";
};

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ uiSize = "md", className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={["ax-textarea", className].filter(Boolean).join(" ")}
        data-size={uiSize}
        {...props}
      />
    );
  }
);

Textarea.displayName = "Textarea";
