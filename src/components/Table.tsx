import * as React from "react";

export type TableProps = React.TableHTMLAttributes<HTMLTableElement> & {
  wrapClassName?: string;
  density?: "sm" | "md" | "lg";
  zebra?: boolean;
};

export const Table = React.forwardRef<HTMLTableElement, TableProps>(
  ({ wrapClassName, density = "md", zebra = false, className, ...props }, ref) => {
    return (
      <div
        className={["ax-table-wrap", wrapClassName].filter(Boolean).join(" ")}
        data-density={density}
        data-zebra={zebra || undefined}
      >
        <table
          ref={ref}
          className={["ax-table", className].filter(Boolean).join(" ")}
          {...props}
        />
      </div>
    );
  }
);

Table.displayName = "Table";

export const TableHead = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ ...props }, ref) => <thead ref={ref} {...props} />);

TableHead.displayName = "TableHead";

export const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ ...props }, ref) => <tbody ref={ref} {...props} />);

TableBody.displayName = "TableBody";

export const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ ...props }, ref) => <tr ref={ref} {...props} />);

TableRow.displayName = "TableRow";

export const TableHeader = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={["ax-table__header", className].filter(Boolean).join(" ")}
    {...props}
  />
));

TableHeader.displayName = "TableHeader";

export const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={["ax-table__cell", className].filter(Boolean).join(" ")}
    {...props}
  />
));

TableCell.displayName = "TableCell";
