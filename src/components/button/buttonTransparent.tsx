import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ReactNode,
} from "react";
import cn from "classnames";
import { forwardRef} from "react";
import "./button.module.css";
import * as React from "react";
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export const ButtonTransparent = React.forwardRef<HTMLButtonElement,ButtonProps>(({
  className,
  ...props

}, ref) => {
      return (
          <button
              ref={ref}
              className={cn(
                  "ButtonTransparent  hover:bg-gray-800 hover:text-teal-600 transition-all border border-4 p-10 border-teal-600",
                  className
              )}
              {...props}
          />
      )
    }
)
