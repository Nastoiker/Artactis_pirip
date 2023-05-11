import { DetailedHTMLProps, HTMLAttributes } from "react";
import cn from "classnames";
export const InputComponent = ({
  className,
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement>) => {
  return (
    <div>
      <input
        className={cn("w-full py-5 bg-transparent", className)}
        type="text"
        {...props}
      />
    </div>
  );
};
