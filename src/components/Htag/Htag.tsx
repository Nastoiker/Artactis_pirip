import { FC } from "react";
import cn from "classnames";
import { htagProps } from "./htag.props";

export const Htag: FC<htagProps> = ({ className, type, children }) => {
  switch (type) {
    case "h1":
      return (
        <h1 className={cn(" text-5xl font-bold ", className)}>{children}</h1>
      );
    case "h2":
      return (
        <h2 className={cn(" text-3xl font-bold ", className)}>{children}</h2>
      );
    case "h3":
      return (
        <h3 className={cn(" text-md font-bold ", className)}>{children}</h3>
      );
    case "h4":
      return (
        <h1 className={cn(" text-lg font-bold ", className)}>{children}</h1>
      );
    default:
      return <h1>{children}</h1>;
  }
};
