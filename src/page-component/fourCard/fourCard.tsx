import { NumberTourUi } from "../../components/ui/Number.tsx";
import { TitleCloseNumber } from "../../components/ui/TitleCloseNumber.tsx";
import Image from "../../assets/cards/Finshing.png";
import "./fourCss.css";

export const FourCard = () => {
  return (
    <div
      className={
        " BackGroundFont2 min-h-screen xl:min-h-[1200px] max-h-full  relative "
      }
    >
      <img
        className="w-full  min-h-2/3 h-auto contain absolute sm:bottom-0"
        src={Image}
        alt=""
      />
      <div className={"mx-5 md:mx-52    relative "}>
        <div className="">
          <div
            className={
              "absolute h-fit  top-28 sm:top-0 right-0 flex space-y-20"
            }
          >
            <NumberTourUi numberTour={3} />
            <hr className="absolute mt-20 ml-16 h-1 border-0 bg-red-700	  z-10 w-20 " />
            <TitleCloseNumber text={"РЫБАЛКА"} />
            <div
              className={
                "z-10 text-start text-2xl absolute w-full top-20  text-white"
              }
            >
              <p>
                - Поездка на северо-восток Архангельской области в 150 км от
                города до Беломорска
              </p>
              <p> - Визит музеев, связанных с людьми Поморья</p>
              <p>
                {" "}
                - Прогулка по пляжу Белого моря - Рыбалка на острове Мудьюг
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
