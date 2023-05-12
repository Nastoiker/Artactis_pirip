
import {NumberTourUi} from "../../components/ui/Number.tsx";
import {TitleCloseNumber} from "../../components/ui/TitleCloseNumber.tsx";
import Image from "../../assets/cards/FiveCard.png";
export const SixCard = () => {
    return <div className={"min-h-[1100px] top-72 sm:top-0 max-h-full relative   "}>
        <img className="w-full  max-h-[900px] min-h-1/3 absolute  sm:bottom-0" src={Image} alt=""/>

        <div className={"mx-5 md:mx-52   relative "}>
            <div className="">
                <div className={"absolute h-full top-72 sm:top-54 left-0 mx-auto  sm:w-96  z-50 right-0 flex space-y-20"}>
                    <NumberTourUi numberTour={5} />
                    <hr className="absolute mt-20 ml-16 h-1 border-0 bg-red-700	  z-10 w-20 " />
                    <TitleCloseNumber  text={'Последний день'}/>
                    <div className={"z-10 text-start text-2xl absolute w-full top-20  text-white"}>
                        <p> - Свободное время</p>
                        <p>- Выезд из отеля и трансфер до аэропорта</p><p> - Полет домой</p>



                    </div>
                </div>

            </div>

        </div>

    </div>
}