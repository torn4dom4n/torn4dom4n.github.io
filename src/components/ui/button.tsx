import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * ButtonProps specifies properties accepted by the custom polymorphic Button component.
 * Extends the default HTML button properties with support for Slot-like behavior (`asChild`),
 * design variants, and different height/padding sizes.
 */
export interface ButtonProps extends React.ComponentPropsWithRef<"button"> {
  asChild?: boolean;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon" | "xs";
}

/**
 * Button Block Component
 *
 * A reusable, highly adaptable polymorphic button component:
 * - Manages child icons with an internal `gap-2` utility and `[&_svg]:size-4` to guarantee consistent SVG sizing without manual overrides.
 * - Supports Slot-like delegation via the `asChild` property when wrapping custom elements like TanStack Router `Link` tags.
 * - Provides modular class bindings for various standard semantic UI variants and button height/width presets.
 */
const Button = ({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  children,
  type = "button",
  ref,
  ...props
}: ButtonProps) => {
  // Amalgamate classes based on active design variants and sizes
  const baseClasses = cn(
    "inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    variant === "default" && "bg-foreground text-background hover:bg-foreground/90",
    variant === "destructive" && "bg-red-600 text-white hover:bg-red-600/90",
    variant === "outline" &&
      "border border-border bg-background hover:bg-accent hover:text-accent-foreground",
    variant === "secondary" && "bg-muted text-muted-foreground hover:bg-muted/80",
    variant === "ghost" && "hover:bg-accent hover:text-accent-foreground",
    variant === "link" && "text-foreground underline-offset-4 hover:underline",
    size === "default" && "h-10 px-4 py-2",
    size === "sm" && "h-9 px-3",
    size === "xs" && "h-8 px-2.5 text-xs",
    size === "lg" && "h-11 px-8",
    size === "icon" && "h-10 w-10",
    className,
  );

  // If polymorphism is enabled, clone the first child element and apply button properties
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement<any>, {
      className: cn(baseClasses, (children.props as any).className),
      ...props,
    });
  }

  return (
    <button className={baseClasses} ref={ref} type={type} {...props}>
      {children}
    </button>
  );
};

export { Button };
