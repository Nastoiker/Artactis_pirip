import {DetailedHTMLProps, HTMLAttributes, PropsWithChildren, ReactNode} from "react";
import cn from "classnames";
import "./button.module.css";
interface ButtonTransparentProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: ReactNode;
}
export const ButtonTransparent = ({
  children,
  className,
   ...props
}:ButtonTransparentProps) => {
  return (
    <button
      className={cn(
        "ButtonTransparent  hover:bg-gray-800 hover:text-blue-200 transition-all border border-5 p-10 border-teal-300",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
