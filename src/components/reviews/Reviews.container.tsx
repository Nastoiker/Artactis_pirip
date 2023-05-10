import {ReviewContainerProps} from "./ReviewsContainer.props.ts";
import {Review} from "./Review.tsx";

export const ReviewContainer = ({reviews}: ReviewContainerProps) => {
    return <div>
        {reviews.map( r => <Review reviews={}/>)}
    </div>;
}