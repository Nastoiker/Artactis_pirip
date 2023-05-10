
import {NumberTourUi} from "../../components/ui/Number.tsx";
import {TitleCloseNumber} from "../../components/ui/TitleCloseNumber.tsx";
import Image from "../../assets/cards/thirdCard.png";
export const ThirdCard = () => {
    return <div className={"h-fit min-h-screen"}>
        <div className={" mx-5 md:mx-52   relative "}>
            <div className="">
                <div className={"absolute h-fit left-0 flex space-y-20"}>
                    <NumberTourUi numberTour={2} />
                    <hr className="absolute mt-20 ml-16 h-1 border-0 bg-red-700	  z-10 w-20 " />
                    <TitleCloseNumber  text={'ПРИБЫТИЕ'}/>
                    <p className={"text-start text-2xl absolute w-full top-20  text-white"}>
                        - Посещение Архангельского областного художественного музея
                        - Экскурсия на лодке по реке Северной Двине
                        - Поездка на музей-усадьбу Пурецких в 20 км от Архангельска
                    </p>
                </div>

            </div>

        </div>
        <img className="w-full object-scale-down  h-auto" src={Image} alt=""/>

    </div>
}