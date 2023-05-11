import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from "react";
import cn from "classnames";
import "./button.module.css";
export const ButtonTransparent = ({
  children,
  className,
}: PropsWithChildren<
  DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
>) => {
  return (
    <button
      className={cn(
        "ButtonTransparent  hover:bg-gray-800 hover:text-blue-200 transition-all border border-5 p-10 border-teal-300",
        className
      )}
    >
      {children}
    </button>
  );
};
