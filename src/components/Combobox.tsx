import * as React from "react";

export type ComboboxProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "children" | "list" | "size"
> & {
  listId: string;
  size?: "sm" | "md" | "lg";
  label?: string;
  children?: React.ReactNode;
  wrapperClassName?: string;
};

export const Combobox = React.forwardRef<HTMLInputElement, ComboboxProps>(
  (
    {
      listId,
      size = "md",
      label = "Options",
      children,
      wrapperClassName,
      className,
      autoComplete = "off",
      ...props
    },
    ref
  ) => (
    <div
      className={["ax-combobox", wrapperClassName].filter(Boolean).join(" ")}
      data-size={size}
    >
      <input
        ref={ref}
        className={["ax-input", "ax-combobox__input", className]
          .filter(Boolean)
          .join(" ")}
        list={listId}
        role="combobox"
        aria-autocomplete="list"
        aria-label={label}
        autoComplete={autoComplete}
        {...props}
      />
      <datalist id={listId}>{children}</datalist>
    </div>
  )
);

Combobox.displayName = "Combobox";

export type ComboboxOptionProps = React.OptionHTMLAttributes<HTMLOptionElement>;

export function ComboboxOption(props: ComboboxOptionProps) {
  return <option {...props} />;
}
