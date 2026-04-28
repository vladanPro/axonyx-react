import * as React from "react";

export type CodeBlockProps = React.HTMLAttributes<HTMLPreElement> & {
  code: string;
  language?: string;
};

export const CodeBlock = React.forwardRef<HTMLPreElement, CodeBlockProps>(
  ({ code, language, className, ...props }, ref) => {
    return (
      <pre
        ref={ref}
        className={["ax-code-block", className].filter(Boolean).join(" ")}
        data-language={language}
        {...props}
      >
        <code>{code}</code>
      </pre>
    );
  }
);

CodeBlock.displayName = "CodeBlock";
