
import {NumberTourUi} from "../../components/ui/Number.tsx";
import {TitleCloseNumber} from "../../components/ui/TitleCloseNumber.tsx";
import Image from "../../assets/cards/FiveCard.png";
export const SixCard = () => {
    return <div className={""}>
        <div className={"md:mx-52   relative "}>
            <div className="">
                <div className={"absolute h-fit left-0 mx-auto w-96 right-0 flex space-y-20"}>
                    <NumberTourUi numberTour={5} />
                    <hr className="absolute mt-20 ml-16 h-1 border-0 bg-red-700	  z-10 w-20 " />
                    <TitleCloseNumber  text={'Завершающий день'}/>
                    <p className={"text-start text-2xl absolute w-full top-20  text-white"}>
                        - Свободное время
                        - Выезд из отеля и трансфер до аэропорта
                        - Полет домой
                    </p>
                </div>

            </div>

        </div>
        <img className="w-full h-full" src={Image} alt=""/>

    </div>
}