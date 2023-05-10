import {ReviewProps} from "./Review.props.ts";

export const Review = ({review}: ReviewProps) => {
    return <div className={"flex w-full space-x-20"}>
        <div className={""}>
            <img src={review.img}  className=" border-indigo-500 border-t-8 w-48 h-48 rounded-full" alt=""/>
        </div>
        <div className={"text-start w-full"}>
            <div className={"flex justify-between items-center"}>
                <h1 className={"ml-0 text-teal-500"}>{review.name}</h1>
                <span className={"ml-0 text-teal-500"}> {review.date}</span>
            </div>
            <p className={" text-white"}>{
                review.comment
            }</p>
        </div>
    </div>
}