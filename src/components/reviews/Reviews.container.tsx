import {ReviewContainerProps} from "./ReviewsContainer.props.ts";
import {Review} from "./Review.tsx";
import 'keen-slider/keen-slider.min.css'
import {useKeenSlider} from "keen-slider/react";
export const ReviewContainer = ({reviews}: ReviewContainerProps) => {
    const [sliderRef, instanceRef] = useKeenSlider(
        {
            slideChanged() {
                console.log('slide changed')
            },
        },
        [
            // add plugins here
        ]
    )
    return <div ref={sliderRef} className="keen-slider">
        {reviews.map( (r, index) =><div className="keen-slider__slide"><Review key={index} name={r.name} img={r.img} comment={r.comment}/> </div> )}
    </div>;
}