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
    "group relative inline-flex items-center justify-center overflow-hidden rounded-full text-sm font-medium whitespace-nowrap transition-colors focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
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

    const isIconOnly = size?.startsWith("icon");

    const renderContent = (content: React.ReactNode) => {
      if (isIconOnly) return content;

      const contentArray = React.Children.toArray(content);
      const isIcon = (node: any) =>
        React.isValidElement(node) &&
        (node.type === "svg" ||
          (node.type as any)?.displayName?.includes("Icon") ||
          (node.type as any)?.name?.includes("Icon") ||
          (node.props as any)?.["data-icon"] ||
          (node.props as any)?.["aria-hidden"] === "true");

      const hasStartIcon = isIcon(contentArray[0]);
      const hasEndIcon = isIcon(contentArray[contentArray.length - 1]);

      if (!hasStartIcon && !hasEndIcon) return content;

      const textContent = contentArray.filter((_, i) => {
        if (hasStartIcon && i === 0) return false;
        if (hasEndIcon && i === contentArray.length - 1) return false;
        return true;
      });

      return (
        <span className="grid items-center justify-center">
          {/* Normal state: Text only, slides up and out */}
          <span className="col-start-1 row-start-1 flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-full group-hover:opacity-0">
            {textContent}
          </span>
          {/* Hover state: Text + Icon, slides in from bottom */}
          <span className="col-start-1 row-start-1 flex translate-y-full items-center justify-center gap-2 opacity-0 transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-0 group-hover:opacity-100 [&_svg]:size-4">
            {content}
          </span>
        </span>
      );
    };

    if (asChild && React.isValidElement(children)) {
      const child = children as React.ReactElement<any>;
      return React.cloneElement(child, {
        className: cn(variants, child.props.className),
        "data-slot": "button",
        ...props,
        children: renderContent(child.props.children),
      });
    }

    return (
      <button className={variants} ref={ref} data-slot="button" {...props}>
        {renderContent(children)}
      </button>
    );
  },
);
Button.displayName = "Button";

export { Button };
