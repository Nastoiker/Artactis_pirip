import { ReviewProps } from "./Review.props.ts";


// export const Review = ({review}: ReviewProps) => {
//     return <div className={"flex flex-col justify-center sm:flex w-full space-x-20"}>
//         <div className={"w-full "}>
//             <img src={review.img}  className="mx-auto border-indigo-500 border-t-8 w-48 h-48 rounded-full" alt=""/>
//         </div>
//         <div className={"sm:text-start w-fit mx-auto "}>
//             <div className={"flex justify-between items-center"}>
//                 <h1 className={"ml-0 text-teal-500"}>{review.name}</h1>
//                 <span className={"ml-0 text-teal-500"}> {review.date}</span>
//             </div>
//             <p className={" text-white"}>{
//                 review.comment
//             }</p>
//         </div>
//     </div>
// }
export const Review = ({ name, comment, img }: ReviewProps) => {

  return (

    <div
      className={"mx-auto space-y-10 xl:flex w-fit items-center xl:space-x-20"}
    >
      <img
        src={img}
        className="mx-auto border-indigo-500 border-t-8 w-72 h-72 rounded-full"
        alt="Review"
      />
      <div className={"ml-0 space-y-3   text-start"}>
        <h1 className={"ml-0 text-4xl text-teal-500"}>{name}</h1>
        <p className={" text-white break-words w-72 sm:w-[800px]"}>{comment}</p>
      </div>

    </div>
  );
};
