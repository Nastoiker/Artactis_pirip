import {PropsWithChildren} from "react";

export const ButtonTransparent = ({children}: PropsWithChildren) => {
    return <button  className={"ButtonTransparent hover:bg-gray-800 hover:text-blue-200 transition-all border p-10 border-teal-300 "}>{children}</button>
}