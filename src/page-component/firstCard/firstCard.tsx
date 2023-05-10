import {Htag} from "../../components/Htag/Htag.tsx";
import Image from "../../assets/cards/firstCard.jpg";
import './FirstCard.css';
export const FirstCard = () => {
    return <div className={" min-h-[1000px]  my-10"}>
        <div className={"xl:flex h-1/2 xl:justify-center  w-fit xl:w-full mx-auto max-w-screen-2xl items-center"}>
            <img className={"mx-auto  h-fit min-h-20 max-h-[700px] w-full max-w-[700px] object-cover      z-20 "} src={Image} alt=""/>

            <div className={"  text-white p-5 -my-72 sm:bg-opacity-70  space-y-10"}>
                <div className={"absolute mx-auto left-0 right-0  my-auto z-10 -mt-20 w-3/6 h-2/4  border border-4 border-red-800"}></div>
                <div className={"space-y-10  w-fit sm:w-[600px] xl:block  mx-auto"}>
                    <div className={"w-fit md:w-[500px]"}>
                        <Htag className={"text-start"} type={'h1'}>ВСЁ, ЧТО </Htag>
                        <Htag className={"text-start "} type={'h1'}> ВАМ НУЖНО ЗНАТЬ</Htag>
                    </div>

                    <p className={"text-start w-fit xl:w-5/6 break-words"}>
                        "Арктические просторы" - тур, включающий поездку на северо-запад Архангельской области, посещение древнего города Каргополя, местного музея культуры и быта народов Русского Севера, посещение нац. парка “Русская Арктика”, рыбалка на острове Мудьюг а также прогулку по реке Северной Двине с возможностью лицезреть северное сияние.
                    </p>
                </div>

            </div>
        </div>

    </div>
}