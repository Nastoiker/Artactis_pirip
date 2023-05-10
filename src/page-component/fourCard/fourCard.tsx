
import {NumberTourUi} from "../../components/ui/Number.tsx";
import {TitleCloseNumber} from "../../components/ui/TitleCloseNumber.tsx";
import Image from "../../assets/cards/Finshing.png";
export const FourCard = () => {
    return <div className={"min-h-screen max-h-full  relative "}>
        <div className={"mx-5 md:mx-52    relative "}>
            <div className="">
                <div className={"absolute h-fit  top-28 sm:top-0 right-0 flex space-y-20"}>
                    <NumberTourUi numberTour={3} />
                    <hr className="absolute mt-20 ml-16 h-1 border-0 bg-red-700	  z-10 w-20 " />
                    <TitleCloseNumber  text={'РЫБАЛКА'}/>
                    <p className={"z-10 text-start text-2xl absolute w-full top-20  text-white"}>
                        - Поездка на северо-восток Архангельской области в 150 км от города до Беломорска
                        - Визит музеев, связанных с людьми Поморья
                        - Прогулка по пляжу Белого моря
                        -  Рыбалка на острове Мудьюг
                    </p>
                </div>
            </div>
        </div>
        <img className="w-full blur-sm min-h-2/3 h-auto contain absolute bottom-0" src={Image} alt=""/>
    </div>
}