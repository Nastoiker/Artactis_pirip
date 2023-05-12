import {
  DetailedHTMLProps,
  HTMLAttributes,
  PropsWithChildren,
  ReactNode,
} from "react";
import cn from "classnames";
import "./button.module.css";
interface ButtonTransparentProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
}
export const ButtonTransparent = ({
  children,
  className,
  ...props
}: ButtonTransparentProps) => {
  return (
    <button
      className={cn(
        "ButtonTransparent  hover:bg-gray-800 hover:text-teal-600 transition-all border border-4 p-10 border-teal-600",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
