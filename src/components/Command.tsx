import * as React from "react";

export type CommandProps = React.HTMLAttributes<HTMLDivElement>;

export const Command = React.forwardRef<HTMLDivElement, CommandProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={["ax-command", className].filter(Boolean).join(" ")}
        {...props}
      />
    );
  }
);

Command.displayName = "Command";

export type CommandInputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const CommandInput = React.forwardRef<HTMLInputElement, CommandInputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={["ax-command__input", className].filter(Boolean).join(" ")}
        {...props}
      />
    );
  }
);

CommandInput.displayName = "CommandInput";

export type CommandListProps = React.HTMLAttributes<HTMLUListElement>;

export const CommandList = React.forwardRef<HTMLUListElement, CommandListProps>(
  ({ className, ...props }, ref) => {
    return (
      <ul
        ref={ref}
        className={["ax-command__list", className].filter(Boolean).join(" ")}
        {...props}
      />
    );
  }
);

CommandList.displayName = "CommandList";

export type CommandItemProps = React.LiHTMLAttributes<HTMLLIElement> & {
  icon?: React.ReactNode;
  shortcut?: React.ReactNode;
  active?: boolean;
};

export const CommandItem = React.forwardRef<HTMLLIElement, CommandItemProps>(
  ({ icon, shortcut, active, className, children, ...props }, ref) => {
    return (
      <li
        ref={ref}
        className={["ax-command__item", className].filter(Boolean).join(" ")}
        data-active={active || undefined}
        {...props}
      >
        <span className="ax-command__item-main">
          {icon ? <span className="ax-command__icon">{icon}</span> : null}
          <span>{children}</span>
        </span>
        {shortcut ? <span className="ax-command__shortcut">{shortcut}</span> : null}
      </li>
    );
  }
);

CommandItem.displayName = "CommandItem";

export type CommandEmptyProps = React.HTMLAttributes<HTMLDivElement>;

export const CommandEmpty = React.forwardRef<HTMLDivElement, CommandEmptyProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={["ax-command__empty", className].filter(Boolean).join(" ")}
        {...props}
      />
    );
  }
);

CommandEmpty.displayName = "CommandEmpty";
