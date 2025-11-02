import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-bold transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground border-neo border-foreground shadow-neo hover:translate-x-1 hover:translate-y-1 hover:shadow-none",
        destructive: "bg-destructive text-destructive-foreground border-neo border-foreground shadow-neo hover:translate-x-1 hover:translate-y-1 hover:shadow-none",
        outline: "border-neo border-foreground bg-background hover:translate-x-1 hover:translate-y-1 shadow-neo hover:shadow-none",
        secondary: "bg-secondary text-secondary-foreground border-neo border-foreground shadow-neo hover:translate-x-1 hover:translate-y-1 hover:shadow-none",
        accent: "bg-accent text-accent-foreground border-neo border-foreground shadow-neo hover:translate-x-1 hover:translate-y-1 hover:shadow-none",
        success: "bg-success text-success-foreground border-neo border-foreground shadow-neo hover:translate-x-1 hover:translate-y-1 hover:shadow-none",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-foreground underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-6 py-3 text-base rounded",
        sm: "h-10 px-4 text-sm rounded",
        lg: "h-14 px-8 text-lg rounded",
        icon: "h-12 w-12 rounded",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
