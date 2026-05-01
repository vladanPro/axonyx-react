import * as React from "react";

export type FormProps = React.FormHTMLAttributes<HTMLFormElement> & {
  layout?: "stack" | "grid" | "inline";
  density?: "comfortable" | "compact";
  surface?: "plain" | "brushed" | "forged";
};

export const Form = React.forwardRef<HTMLFormElement, FormProps>(
  (
    {
      layout = "stack",
      density = "comfortable",
      surface = "plain",
      className,
      ...props
    },
    ref
  ) => {
    return (
      <form
        ref={ref}
        className={["ax-form", className].filter(Boolean).join(" ")}
        data-layout={layout}
        data-density={density}
        data-surface={surface}
        {...props}
      />
    );
  }
);

Form.displayName = "Form";
