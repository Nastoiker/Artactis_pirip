import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ReviewProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  name: string;
  comment: string;
  img: any;
}
