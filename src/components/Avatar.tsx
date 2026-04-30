import * as React from "react";

export type AvatarProps = React.HTMLAttributes<HTMLSpanElement> & {
  src?: string;
  alt?: string;
  fallback?: React.ReactNode;
  size?: "sm" | "md" | "lg";
};

export const Avatar = React.forwardRef<HTMLSpanElement, AvatarProps>(
  ({ src, alt = "", fallback, size = "md", className, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={["ax-avatar", className].filter(Boolean).join(" ")}
        data-size={size}
        {...props}
      >
        {src ? <img src={src} alt={alt} /> : <span>{fallback}</span>}
      </span>
    );
  }
);

Avatar.displayName = "Avatar";
