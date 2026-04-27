import * as React from "react";

export type OptionProps = React.OptionHTMLAttributes<HTMLOptionElement>;

export const Option = React.forwardRef<HTMLOptionElement, OptionProps>(
  ({ ...props }, ref) => {
    return <option ref={ref} {...props} />;
  }
);

Option.displayName = "Option";
