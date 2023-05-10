
import './App.css'
import {NavigationMenu} from "./components/nav.tsx";
import { MainPage } from './data/data.ts';
import {ButtonTransparent} from "./assets/button/buttonTransparent.tsx";
import {Htag} from "./components/Htag/Htag.tsx";
import {FirstCard} from "./page-component/firstCard/firstCard.tsx";
import {SecondCard} from "./page-component/secondCard/secondCard.tsx";
import Woman from "./assets/reviews/Victoria.jpg";
import {ThirdCard} from "./page-component/thirdCard/ThirdCard.tsx";
import {SixCard} from "./page-component/SixCard/SixCard.tsx";
import {FiveCard} from "./page-component/FiveCard/FiveCard.tsx";
import {FourCard} from "./page-component/fourCard/fourCard.tsx";
import {ReviewContainer} from "./components/reviews/Reviews.container";
function App() {

    return (
    <>
        <div>
            <div>

            </div>
            <div className={"  my-0  min-h-screen contain bg-no-repeat w-full mx-auto gap-5  BackGroundMainPage h-full text-white"}>
                <NavigationMenu menu={MainPage.navigation}/>
                {/*<img src="./assets/Logo.svg" className={"w-10 h-10"} alt=""/>*/}
                <div className={"text-center grid  content-center sm:my-20"}>
                    <h1 className={"mx-auto MainText text-5xl xl:text-9xl w-fit xl:w-[900px] break-words mt-48"}>{MainPage.title}</h1>
                    <div className={"flex justify-center sm:space-x-5 my-10"}><Htag type={"h4"}>ОКАЖИСЬ В СКАЗКЕ</Htag><Htag type={"h4"} className={"text-"}>С НАШЕЙ ПОМОЩЬЮ</Htag></div>
                    <ButtonTransparent className={"min-w-20  w-fit mx-auto"}><Htag type={'h2'} className="mt-0">Купить тур </Htag></ButtonTransparent>
                </div>

            </div>
            <div className={" mx-auto"}>        <FirstCard />
           </div>
            <div className={"Map"}>
                <SecondCard />
                <ThirdCard />
                <FourCard />
                <FiveCard />
                <SixCard />

            </div>
            <div className={"flex content-center"}>
                <ReviewContainer reviews={[{ name: 'asdasdas', comment: 'asdasdadasdasdasdadasdasdasdadasdasdadasdasdasdadasdasdasdadasdasdasdadasdasdasdadasdasdasdadasdasdasdadasdasdasdadasdasdasdadasdasdasdadasdasdasdadasdasdasdadasdasdasdadasdasdadasdasdasdasdasdadasdasdasdadasdasdasdadasdasdasdadasdasdasdadasdasdasdadasdasdasdadasdasdasdadasdasdasdadasdasdasdadasdasdadasdasd', img:  Woman },{ name: 'asdasdas', comment: 'asdasdadasdasdasdadasdasdasdadasdasdadasdasdasdadasdasdasdadasdasdasdadasdasdasdadasdasdasdadasdasdasdadasdasdasdadasdasdasdadasdasdasdadasdasdasdadasdasdasdadasdasdasdadasdasdadasdasdasdasdasdadasdasdasdadasdasdasdadasdasdasdadasdasdasdadasdasdasdadasdasdasdadasdasdasdadasdasdasdadasdasdasdadasdasdadasdasd', img:  Woman }]}/>

            </div>
        </div>


    </>
  )
}

export default App
// max-w-screen-2xl