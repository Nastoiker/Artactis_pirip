
import './secondCard.css';
import {NumberTourUi} from "../../components/ui/Number.tsx";
import {TitleCloseNumber} from "../../components/ui/TitleCloseNumber.tsx";
import Image from "../../assets/cards/firstCard.png"
export const SecondCard = () => {
    return <div className={""}>
        <div className={"mx-5 md:mx-52   relative "}>
            <div className="">
                <div className={"absolute h-fit right-0 flex space-y-20"}>
                    <NumberTourUi numberTour={1} />
                    <hr className="absolute mt-20 ml-16 h-1 border-0 bg-red-700	  z-10 w-20 " />
                    <TitleCloseNumber  text={'ПРИБЫТИЕ'}/>
                    <p className={"text-start text-2xl absolute w-full top-20  text-white"}>
                        - Прибытие в Архангельск
                        - Заселение в отель и отдых
                        - Обзорная экскурсия по историческому центру Архангельска, включающая крепость Святого Михаила, музей древнерусской культуры и быта, собор Святого Фаддея
                    </p>
                </div>

            </div>

        </div>
        <img className="w-full h-full" src={Image} alt=""/>

    </div>
}