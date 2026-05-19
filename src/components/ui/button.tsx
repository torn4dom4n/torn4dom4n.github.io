import * as React from "react";

import { cn } from "@/lib/utils";

export type ButtonVariant = "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
export type ButtonSize =
  | "default"
  | "xs"
  | "sm"
  | "lg"
  | "icon"
  | "icon-xs"
  | "icon-sm"
  | "icon-lg";

export interface ButtonVariantProps {
  variant?: ButtonVariant | undefined;
  size?: ButtonSize | undefined;
  className?: string | undefined;
}

export function buttonVariants({
  variant = "default",
  size = "default",
  className,
}: ButtonVariantProps = {}) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    variant === "default" && "bg-foreground text-background shadow-sm hover:bg-foreground/90",
    variant === "destructive" && "bg-red-600 text-white shadow-sm hover:bg-red-600/90",
    variant === "outline" &&
      "border border-border bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
    variant === "secondary" && "bg-muted text-muted-foreground shadow-sm hover:bg-muted/80",
    variant === "ghost" && "hover:bg-accent hover:text-accent-foreground",
    variant === "link" && "text-foreground underline-offset-4 hover:underline",
    size === "default" && "h-10 px-4 py-2",
    size === "xs" && "h-8 px-2.5 text-xs",
    size === "sm" && "h-9 px-3",
    size === "lg" && "h-11 px-8",
    size === "icon" && "h-10 w-10",
    size === "icon-xs" && "h-8 w-8",
    size === "icon-sm" && "h-9 w-9",
    size === "icon-lg" && "h-11 w-11",
    className,
  );
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const variants = buttonVariants({
      variant,
      size,
      className,
    });

    if (asChild && React.isValidElement(children)) {
      const child = children as React.ReactElement<any>;
      return React.cloneElement(child, {
        className: cn(variants, child.props.className),
        "data-slot": "button",
        ...props,
      });
    }

    return (
      <button className={variants} ref={ref} data-slot="button" {...props}>
        {children}
      </button>
    );
  },
);
Button.displayName = "Button";

export { Button };
