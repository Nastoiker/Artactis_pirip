import {IReview} from "../../types/Review.interface.ts";
import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface ReviewProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
   review: IReview;
}