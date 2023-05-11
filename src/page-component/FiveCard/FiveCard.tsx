import { NumberTourUi } from "../../components/ui/Number.tsx";
import { TitleCloseNumber } from "../../components/ui/TitleCloseNumber.tsx";
import Image from "../../assets/cards/fourCard.png";
export const FiveCard = () => {
  return (
    <div className={"min-h-[800px] md:min-h-[1000px]  max-h-full relative"}>
        <img
            className="w-full  min-w-[350px]  h-auto contain absolute sm:bottom-0"
            src={Image}
            alt=""
        />
      <div className={"mx-5 md:mx-52   relative "}>
        <div className="">
          <div className={"absolute h-fit top-48   left-0 flex space-y-20"}>
            <NumberTourUi numberTour={4} />
            <hr className="absolute mt-20 ml-16 h-1 border-0 bg-red-700	  z-10 w-20 " />
            <TitleCloseNumber text={"РЫБНАЯ ВЕЧЕРИНКА"} />
            <p
              className={
                "text-start z-10  text-2xl absolute w-full top-20  text-white"
              }
            >
              - Поездка на границу Архангельской области и Республики Коми, в
              пограничный город Эмба - Поездка на знаменитый маяк "Северная
              Двина" - Рыбная вечеринка an-board лодки - Поездка на границу
              Архангельской области и Республики Коми, в пограничный город Эмба
              - Поездка на знаменитый маяк "Северная Двина" - Рыбная вечеринка
              an-board лодки
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};
