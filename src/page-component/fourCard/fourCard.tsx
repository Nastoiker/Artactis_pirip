
import {NumberTourUi} from "../../components/ui/Number.tsx";
import {TitleCloseNumber} from "../../components/ui/TitleCloseNumber.tsx";
import Image from "../../assets/cards/Finshing.png";
export const FourCard = () => {
    return <div className={""}>
        <div className={"mx-5 md:mx-52    relative "}>
            <div className="">
                <div className={"absolute h-fit right-0 flex space-y-20"}>
                    <NumberTourUi numberTour={3} />
                    <hr className="absolute mt-20 ml-16 h-1 border-0 bg-red-700	  z-10 w-20 " />
                    <TitleCloseNumber  text={'РЫБАЛКА'}/>
                    <p className={"text-start text-2xl absolute w-full top-20  text-white"}>
                        - Поездка на северо-восток Архангельской области в 150 км от города до Беломорска
                        - Визит музеев, связанных с людьми Поморья
                        - Прогулка по пляжу Белого моря
                        -  Рыбалка на острове Мудьюг
                    </p>
                </div>
            </div>
        </div>
        <img className="w-full h-full" src={Image} alt=""/>
    </div>
}