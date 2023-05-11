import "./secondCard.css";
import { NumberTourUi } from "../../components/ui/Number.tsx";
import { TitleCloseNumber } from "../../components/ui/TitleCloseNumber.tsx";
import Image from "../../assets/cards/firstCard.png";
export const SecondCard = () => {
  return (
    <div className={"min-h-screen max-h-full  relative "}>
      <div className={"mx-5 md:mx-52  relative  "}>
        <div className="">
          <div
            className={"absolute h-fit top-28 sm:top-0 right-0 flex space-y-20"}
          >
            <NumberTourUi numberTour={1} />
            <hr className="absolute mt-20 ml-16 h-1 border-0 bg-red-700	  z-10 w-20 " />
            <TitleCloseNumber text={"ПРИБЫТИЕ"} />
            <p
              className={
                "z-10 text-start text-2xl absolute w-full top-20  text-white"
              }
            >
              - Прибытие в Архангельск - Заселение в отель и отдых - Обзорная
              экскурсия по историческому центру Архангельска, включающая
              крепость Святого Михаила, музей древнерусской культуры и быта,
              собор Святого Фаддея
            </p>
          </div>
        </div>
      </div>
      <img
        className="w-full min-h-1/2 max-h-[800px] h-auto contain absolute bottom-0"
        src={Image}
        alt=""
      />
    </div>
  );
};
