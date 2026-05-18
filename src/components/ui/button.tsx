import * as React from "react";

import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "default", size = "default", asChild = false, children, ...props },
    ref,
  ) => {
    const baseClasses = cn(
      "inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      variant === "default" && "bg-foreground text-background hover:bg-foreground/90",
      variant === "outline" &&
        "border border-border bg-background hover:bg-accent hover:text-accent-foreground",
      variant === "ghost" && "hover:bg-accent hover:text-accent-foreground",
      size === "default" && "h-10 px-4 py-2",
      size === "sm" && "h-9 px-3",
      size === "lg" && "h-11 px-8",
      size === "icon" && "h-10 w-10",
      className,
    );

    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children as React.ReactElement<any>, {
        className: cn(baseClasses, (children.props as any).className),
        ...props,
      });
    }

    return (
      <button className={baseClasses} ref={ref} {...props}>
        {children}
      </button>
    );
  },
);
Button.displayName = "Button";

export { Button };
