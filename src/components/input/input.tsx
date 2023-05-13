import * as React from "react";
import { FieldError } from "react-hook-form";

import cn from "classnames";
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: FieldError;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <>
        <input
          className={cn("w-full text-white py-5 bg-transparent", className)}
          type="text"
          ref={ref}
          {...props}
        />
        {error && (
          <span className={"block text-white my-2"}>{error.message}</span>
        )}
      </>
    );
  }
);
Input.displayName = "Input";

export { Input };
