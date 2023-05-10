import {IReview} from "../../types/Review.interface.ts";
import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface ReviewContainerProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    reviews: IReview[];
}