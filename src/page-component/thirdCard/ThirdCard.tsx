
import {NumberTourUi} from "../../components/ui/Number.tsx";
import {TitleCloseNumber} from "../../components/ui/TitleCloseNumber.tsx";
import Image from "../../assets/cards/thirdCard.png";
export const ThirdCard = () => {
    return <div className={" min-h-screen  max-h-full relative"}>
        <div className={" mx-5 md:mx-52   relative "}>
            <div className="">
                <div className={"absolute h-fit top-48 sm:top28 left-0 flex space-y-20"}>
                    <NumberTourUi numberTour={2} />
                    <hr className="absolute mt-20 ml-16 h-1 border-0 bg-red-700	  z-10 w-20 " />
                    <TitleCloseNumber  text={'ПРОГУЛКА ПО РЕКЕ'}/>
                    <p className={"text-start z-10 text-2xl absolute w-full top-20  text-white"}>
                        - Посещение Архангельского областного художественного музея
                        - Экскурсия на лодке по реке Северной Двине
                        - Поездка на музей-усадьбу Пурецких в 20 км от Архангельска
                    </p>
                </div>

            </div>

        </div>
        <img className=" w-full blur-sm min-h-1/2 h-auto contain absolute bottom-0" src={Image} alt=""/>

    </div>
}