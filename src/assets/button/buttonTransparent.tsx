import {DetailedHTMLProps, HTMLAttributes, PropsWithChildren} from "react";
import cn from "classnames";

export const ButtonTransparent = ({children, className}: PropsWithChildren<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>>) => {
    return <button  className={cn("ButtonTransparent  hover:bg-gray-800 hover:text-blue-200 transition-all border p-10 border-teal-300 ", className)}>{children}</button>
}