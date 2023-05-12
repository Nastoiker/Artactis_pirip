import { NumberTourUi } from "../../components/ui/Number.tsx";
import { TitleCloseNumber } from "../../components/ui/TitleCloseNumber.tsx";
import Image from "../../assets/cards/fourCard.png";
export const FiveCard = () => {
  return (
    <div className={"min-h-[800px] md:min-h-[1000px]  max-h-full relative"}>
      <img
        className="w-full max-h-[900px] min-w-[350px] w-auto md:right-0  h-auto contain absolute sm:bottom-0"
        src={Image}
        alt=""
      />
      <div className={"mx-5 md:mx-52   relative "}>
        <div className="">
          <div className={"absolute h-fit top-48   left-0 flex space-y-20"}>
            <NumberTourUi numberTour={4} />
            <hr className="absolute mt-20 ml-16 h-1 border-0 bg-red-700	  z-10 w-20 " />
            <TitleCloseNumber text={"РЫБНАЯ ВЕЧЕРИНКА"} />
            <div
              className={
                "text-start z-10  text-2xl absolute w-full top-20  text-white"
              }
            >
              <p>
                {" "}
                - Поездка на границу Архангельской области и Республики Коми, в
                пограничный город Эмба
              </p>
              <p>- Поездка на знаменитый маяк "Северная Двина"</p>
              <p>- Рыбная вечеринка an-board лодки</p>
              <p>
                - Поездка на границу Архангельской области и Республики Коми, в
                пограничный город Эмба
              </p>
              <p>- Поездка на знаменитый маяк "Северная Двина"</p>
              <p>- Рыбная вечеринка an-board лодки</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
