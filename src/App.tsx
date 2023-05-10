
import './App.css'
import {NavigationMenu} from "./components/nav.tsx";
import { MainPage } from './data/data.ts';
import {ButtonTransparent} from "./assets/button/buttonTransparent.tsx";
import {Htag} from "./components/Htag/Htag.tsx";
import {FirstCard} from "./page-component/firstCard/firstCard.tsx";
import {SecondCard} from "./page-component/secondCard/secondCard.tsx";
import {Review} from "./components/reviews/Review.tsx";
import Woman from "./assets/reviews/Victoria.jpg";
import {ThirdCard} from "./page-component/thirdCard/ThirdCard.tsx";
import {SixCard} from "./page-component/SixCard/SixCard.tsx";
import {FiveCard} from "./page-component/FiveCard/FiveCard.tsx";
import {FourCard} from "./page-component/fourCard/fourCard.tsx";
function App() {

    return (
    <>
        <div>
            <div>

            </div>
            <div className={"  my-0  min-h-screen contain bg-no-repeat w-full mx-auto gap-5  BackGroundMainPage h-full text-white"}>
                <NavigationMenu menu={MainPage.navigation}/>
                {/*<img src="./assets/Logo.svg" className={"w-10 h-10"} alt=""/>*/}
                <div className={"text-center grid  content-center my-20"}>
                    <h1 className={"mx-auto MainText text-6xl xl:text-9xl w-fit xl:w-[900px] break-words mt-48"}>{MainPage.title}</h1>
                    <div className={"flex justify-center space-x-5 my-10"}><Htag type={"h4"}>ОКАЖИСЬ В СКАЗКЕ</Htag><Htag type={"h4"} className={"text-"}>С НАШЕЙ ПОМОЩЬЮ</Htag></div>
                    <ButtonTransparent className={"min-w-20  w-fit mx-auto"}><Htag type={'h1'} className="mt-0">Купить тур </Htag></ButtonTransparent>
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
                <Review review={{ name: 'asdasdas', comment: 'asdadasdasd', img: Woman, date: '02.01.2004' }} />
            </div>
        </div>


    </>
  )
}

export default App
// max-w-screen-2xl