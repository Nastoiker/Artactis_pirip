import { Htag } from "../../components/Htag/Htag.tsx";
import Image from "../../assets/cards/firstCard.jpg";
import "./FirstCard.css";
export const FirstCard = () => {
  return (
    <div className=" text-white z-10 relative top-20 BackGroundFont my-10 min-h-[900px]">
      {/* <div
        className={
          " FirstCardInput absolute mx-auto left-0 right-0   my-auto  xl:block  sm:top-48 xl:top-10 w-4/6 h-3/4  border border-4 border-red-800"
        }
      ></div> */}
      <div className="hidden xl:block absolute -my-10 ml-32 border p-20  space-y-8  w-[600px] h-fit border-4 border-red-800"></div>

      <div className="border m-10 p-5 lg:ml-48 space-y-8 md:w-[900px] lg:w-1/2 xl:w-1/3 h-fit border-4 border-red-800">
        <div className={"w-fit z-50 md:w-[500px]"}>
          <Htag className={"text-start"} type={"h1"}>
            ВСЁ, ЧТО
          </Htag>
          <Htag className={"text-start "} type={"h1"}>
            ВАМ НУЖНО ЗНАТЬ
          </Htag>
        </div>
        <p className={"text-start  z-10 w-fit xl:w-5/6 break-words"}>
          "Арктические просторы" - тур, включающий поездку на северо-запад //
          Архангельской области, посещение древнего города Каргополя, //
          местного музея культуры и быта народов Русского Севера, посещение //
          нац. парка “Русская Арктика”, рыбалка на острове Мудьюг а также //
          прогулку по реке Северной Двине с возможностью лицезреть северное //
          сияние.
        </p>
      </div>
    </div>
  );
};
// export const FirstCard = () => {
//   return (
//     <div className={" min-h-[1000px] BackGroundFont  my-10"}>
//       <div
//         className={
//           "relative top-20   xl:flex h-1/2 xl:justify-center  w-fit xl:w-full mx-auto max-w-screen-2xl items-center"
//         }
//       >
//         <img
//           className={
//             "mx-auto  h-fit min-h-20 max-h-[700px] w-full max-w-[700px] object-cover      z-20 "
//           }
//           src={Image}
//           alt=""
//         />

//         <div className={"  text-white p-5 -my-72 sm:bg-opacity-70  space-y-10"}>
//           <div
//             className={
//               " FirstCardInput absolute mx-auto left-0 right-0 hidden  my-auto hidden xl:block  sm:top-48 xl:top-10 w-4/6 h-3/4  border border-4 border-red-800"
//             }
//           ></div>
//           <div
//             className={"space-y-10 z-10 w-fit sm:w-[600px] xl:block  mx-auto"}
//           >
//             <div className={"w-fit z-50 md:w-[500px]"}>
//               <Htag className={"text-start"} type={"h1"}>
//                 ВСЁ, ЧТО{" "}
//               </Htag>
//               <Htag className={"text-start "} type={"h1"}>
//                 {" "}
//                 ВАМ НУЖНО ЗНАТЬ
//               </Htag>
//             </div>

//             <p className={"text-start w-fit xl:w-5/6 break-words"}>
//               "Арктические просторы" - тур, включающий поездку на северо-запад
//               Архангельской области, посещение древнего города Каргополя,
//               местного музея культуры и быта народов Русского Севера, посещение
//               нац. парка “Русская Арктика”, рыбалка на острове Мудьюг а также
//               прогулку по реке Северной Двине с возможностью лицезреть северное
//               сияние.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
