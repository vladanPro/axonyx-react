import * as React from "react";

export type PropRow = {
  name: React.ReactNode;
  type: React.ReactNode;
  defaultValue?: React.ReactNode;
  description: React.ReactNode;
};

export type PropsTableProps = React.TableHTMLAttributes<HTMLTableElement> & {
  rows?: PropRow[];
};

export const PropsTable = React.forwardRef<HTMLTableElement, PropsTableProps>(
  ({ rows, children, className, ...props }, ref) => {
    return (
      <table
        ref={ref}
        className={["ax-props-table", className].filter(Boolean).join(" ")}
        {...props}
      >
        {rows ? (
          <>
            <thead>
              <tr>
                <th>Prop</th>
                <th>Type</th>
                <th>Default</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index}>
                  <td>{row.name}</td>
                  <td>{row.type}</td>
                  <td>{row.defaultValue ?? "-"}</td>
                  <td>{row.description}</td>
                </tr>
              ))}
            </tbody>
          </>
        ) : (
          children
        )}
      </table>
    );
  }
);

PropsTable.displayName = "PropsTable";
