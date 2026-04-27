import * as React from "react";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={["ax-textarea", className].filter(Boolean).join(" ")}
        {...props}
      />
    );
  }
);

Textarea.displayName = "Textarea";
