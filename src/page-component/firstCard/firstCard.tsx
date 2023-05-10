import {Htag} from "../../components/Htag/Htag.tsx";
import Image from "../../assets/cards/firstCard.jpg";
import './FirstCard.css';
export const FirstCard = () => {
    return <div className={"BackGroundFont min-h-screen  my-10"}>
        <div className={"xl:flex h-1/2 justify-center mx-auto max-w-screen-2xl items-center space-x-10"}>
            <img className={"mx-auto w-fit xl:w-full cover z-20 h-full"} src={Image} alt=""/>
            <div className={"text-white p-5 -my-72 sm:bg-opacity-70  space-y-10"}>
                <div className={"absolute -ml-28 z-10 -mt-20 w-2/6 h-2/4  border border-4 border-red-800"}></div>
                <div className={"space-y-10 w-[600px] xl:block  mx-auto"}>
                    <div>
                        <Htag className={"text-start"} type={'h1'}>ВСЁ, ЧТО </Htag>
                        <Htag className={"text-start "} type={'h1'}> ВАМ НУЖНО ЗНАТЬ</Htag>
                    </div>

                    <p className={"text-start w-[600px] xl:w-5/6 break-words"}>
                        "Арктические просторы" - тур, включающий поездку на северо-запад Архангельской области, посещение древнего города Каргополя, местного музея культуры и быта народов Русского Севера, посещение нац. парка “Русская Арктика”, рыбалка на острове Мудьюг а также прогулку по реке Северной Двине с возможностью лицезреть северное сияние.
                    </p>
                </div>

            </div>
        </div>

    </div>
}