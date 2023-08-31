import { forwardRef, HTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "helpers/utils";

const inputVariants = cva(
  "border-2 border-teal-500 px-2 text-sm h-10 rounded focus:outline-none focus:border-blue-700",
  {
    variants: {
      variant: {
        outlined: "bg-white",
        filled: "bg-teal-100 focus:bg-teal-50",
      },
    },
    defaultVariants: {
      variant: "outlined",
    },
  }
);

interface InputProps
  extends HTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

const Input: React.FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <input
        ref={ref}
        {...props}
        className={cn(inputVariants({ variant, className }))}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
