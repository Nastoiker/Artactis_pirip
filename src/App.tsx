import "./App.css";
import { NavigationMenu } from "./components/nav.tsx";
import { MainPage } from "./data/data.ts";
import { ButtonTransparent } from "./components/button/buttonTransparent.tsx";
import { Htag } from "./components/Htag/Htag.tsx";
import { FirstCard } from "./page-component/firstCard/firstCard.tsx";
import { SecondCard } from "./page-component/secondCard/secondCard.tsx";
import Woman from "./assets/reviews/Victoria.jpg";
import { ThirdCard } from "./page-component/thirdCard/ThirdCard.tsx";
import { SixCard } from "./page-component/SixCard/SixCard.tsx";
import { FiveCard } from "./page-component/FiveCard/FiveCard.tsx";
import { FourCard } from "./page-component/fourCard/fourCard.tsx";
import { ReviewContainer } from "./components/reviews/Review.container";
import Birds from "./assets/BirdsBackground.png";
import { EmailForm } from "./components/sendEmailForm/EmailForm.tsx";
import { Footer } from "./components/footer/footer.tsx";
import {useRef, useState} from "react";
import {Modal} from "./components/Modal/Modal";
import {ButtonBuyForm} from "./components/ButtonAlertForm/ButtonBuyForm";
import NAvbar from "./components/nav.beta";

function App() {
  const myRef = useRef(null)

  const executeScroll = () => myRef.current.scrollIntoView()
  return (
    <>
      <div>

        <div
          className={
            "  my-0  min-h-screen contain bg-no-repeat w-full mx-auto gap-5  BackGroundMainPage h-full text-white"
          }
        >
            <NAvbar />
          {/*<NavigationMenu menu={MainPage.navigation} />*/}
          {/*<img src="./assets/Logo.svg" className={"w-10 h-10"} alt=""/>*/}
          <div className={"text-center grid  content-center sm:my-20"}>
            <img
              src={Birds}
              className={
                "left-0 right-0 mx-auto object-contain w-fit h-auto z-50 absolute"
              }
              alt=""
            />

            <h1
              className={
                "mx-auto MainText text-5xl xl:text-9xl w-fit xl:w-[900px] break-words mt-48"
              }
            >
              {MainPage.title}
            </h1>
            <div className={"flex justify-center space-x-0 sm:space-x-5 mt-10"}>
              <Htag type={"h4"}>ОКАЖИСЬ В СКАЗКЕ</Htag>
              <Htag type={"h4"} className={"text-"}>
                С НАШЕЙ ПОМОЩЬЮ
              </Htag>
            </div>
          <ButtonBuyForm />
          </div>
        </div>
        <div className={" mx-auto"}>
          {" "}
          <FirstCard />
        </div>
        <div className={"Map my-48"}>
          <SecondCard />
          <ThirdCard />
          <FourCard />
          <FiveCard />
          <SixCard />
        </div>
        <Htag className="text-white mb-10" type="h1">
          НАШИ ОТЗЫВЫ
        </Htag>

        <div className={"flex content-center"}>
          <ReviewContainer
            reviews={[
              {
                name: "asdasdas",
                comment:
                  "asdasdadasdasdasdadasdasdasdadasdasdadasdasdasdadasdasdasdadasdasdasdadasdasdasdadasdasdasdadasdasdasdadasdasdasdadasdasdasdadasdasdasdadasdasdasdadasdasdasdadasdasdasdadasdasdadasdasdasdasdasdadasdasdasdadasdasdasdadasdasdasdadasdasdasdadasdasdasdadasdasdasdadasdasdasdadasdasdasdadasdasdasdadasdasdadasdasd",
                img: Woman,
              },
              {
                name: "asdasdas",
                comment:
                  "asdasdadasdasdasdadasdasdasdadasdasdadasdasdasdadasdasdasdadasdasdasdadasdasdasdadasdasdasdadasdasdasdadasdasdasdadasdasdasdadasdasdasdadasdasdasdadasdasdasdadasdasdasdadasdasdadasdasdasdasdasdadasdasdasdadasdasdasdadasdasdasdadasdasdasdadasdasdasdadasdasdasdadasdasdasdadasdasdasdadasdasdasdadasdasdadasdasd",
                img: Woman,
              },
            ]}
          />
        </div>

        <EmailForm />
        <Footer />

      </div>
    </>
  );
}

export default App;
// max-w-screen-2xl
