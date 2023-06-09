import "./App.css";
import { MainPage } from "./data/data.ts";
import { Htag } from "./components/Htag/Htag.tsx";
import { FirstCard } from "./page-component/firstCard/firstCard.tsx";
import { SecondCard } from "./page-component/secondCard/secondCard.tsx";
import Woman from "./assets/reviews/Victoria.jpg";
import Man from "./assets/reviews/Man.jpg";
import Woman2 from "./assets/reviews/woman2.jpg";
import { ThirdCard } from "./page-component/thirdCard/ThirdCard.tsx";
import { SixCard } from "./page-component/SixCard/SixCard.tsx";
import { FiveCard } from "./page-component/FiveCard/FiveCard.tsx";
import { FourCard } from "./page-component/fourCard/fourCard.tsx";
import { ReviewContainer } from "./components/reviews/Review.container";
import { EmailForm } from "./components/sendEmailForm/EmailForm.tsx";
import { Footer } from "./components/footer/footer.tsx";
import { useRef } from "react";
import { ButtonBuyForm } from "./components/ButtonAlertForm/ButtonBuyForm";
import NAvbar from "./components/nav/nav.beta.tsx";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import Bird1 from "./assets/bitds/bird1.png";
import Bird2 from "./assets/bitds/bird2.png";
import Bird3 from "./assets/bitds/bird3.png";
import Bird4 from "./assets/bitds/bird4.png";
import Bird5 from "./assets/bitds/bird5.png";
import Bird6 from "./assets/bitds/bird6.png";

function App() {
  const parallax = useRef<any>(null!);
  const Map = useRef<any>(null!);
  const About = useRef<any>(null!);
  const Review = useRef<any>(null!);
  const Main = useRef<any>(null!);
  return (
    <div  className={"max-h-[900px]"}>
      <Parallax pages={10} ref={parallax}>
        <ParallaxLayer
          offset={0.2}
          speed={-0.3}
          style={{ pointerEvents: "none" }}
        >
          <img
            src={Bird1}
            className={" relative h-auto z-50 w-full"}
            style={{ width: "auto", marginLeft: "70%" }}
          />
          <img
            src={Bird2}
            className={" relative z-50 w-full"}
            style={{ display: "block", width: "auto", marginLeft: "55%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0.8} style={{ opacity: 1 }}>
          <img
            src={Bird4}
            className={" relative z-50 w-full"}
            style={{ display: "block", width: "20%", marginLeft: "70%" }}
          />
          <img
            src={Bird5}
            className={" relative z-50 w-full"}
            style={{ display: "block", width: "20%", marginLeft: "40%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 1 }}>
          <img
            src={Bird2}
            className={" relative z-50 w-full"}
            style={{ display: "block", width: "auto", marginLeft: "55%" }}
          />
          <img
            src={Bird4}
            className={" relative z-50 w-full"}
            style={{ display: "block", width: "20%", marginLeft: "70%" }}
          />
          <img
            src={Bird5}
            className={" relative z-50 w-full"}
            style={{ display: "block", width: "20%", marginLeft: "40%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={0.5} speed={0.2} style={{ opacity: 1 }}>
          <img
            src={Bird3}
            className={" relative z-50 w-full"}
            style={{ display: "block", width: "30%", marginLeft: "15%" }}
          />

          <img
            src={Bird1}
            className={" relative z-50 w-full"}
            style={{ width: "25%", marginLeft: "70%" }}
          />
          <img
            src={Bird6}
            className={" relative z-50 w-full"}
            style={{ display: "block", width: "auto", marginLeft: "10%" }}
          />
        </ParallaxLayer>
        <div>
          <div
            className={
              "  my-0  min-h-screen contain bg-no-repeat w-full mx-auto gap-5  BackGroundMainPage h-full text-white"
            }
            ref={Main}
          >
            <NAvbar Map={Map} review={Review} About={About} />
            {/*<NavigationMenu menu={MainPage.navigation} />*/}
            {/*<img src="./assets/Logo.svg" className={"w-10 h-10"} alt=""/>*/}
            <div className={"text-center grid  content-center sm:my-20"}>
              <ParallaxLayer offset={0.1} speed={1.5}>
                <div>
                  <h1
                    className={
                      "mx-auto MainText text-5xl xl:text-9xl w-fit xl:w-[900px] break-words mt-48"
                    }
                  >
                    {MainPage.title}
                  </h1>
                </div>

                <div
                  className={"flex justify-center space-x-0 sm:space-x-5 mt-10"}
                >
                  <Htag type={"h4"}>ОКАЖИСЬ В СКАЗКЕ С НАШЕЙ ПОМОЩЬЮ</Htag>
                </div>
                <ButtonBuyForm className={"my-10"} />
              </ParallaxLayer>
            </div>
          </div>
          <div ref={About} className={" mx-auto"}>
            <FirstCard />
          </div>
          <div ref={Map} className={"Map my-48"}>
            <SecondCard />
            <ThirdCard />
            <FourCard />
            <FiveCard />
            <SixCard />
          </div>
          <Htag className="text-white mb-10" type="h1">
            НАШИ ОТЗЫВЫ
          </Htag>

          <div ref={Review} className={"flex content-center"}>
            <ReviewContainer
              reviews={[
                {
                  name: "Виктория",
                  comment:
                    "Ездили в морозы в Сию+Холмогоры. Очень понравилось,несмотря на жуткий мороз, всё было достаточно хорошо организовано, тёплый автобус,информационное сопровождение. отдельное спасибо гиду,женщине, к сожалению не помню её имени. Отличный профессионал своего дела, хороший экскурсовод, было интересно и содержательно. Большое спасибо. Обязательно поеду с вами ещё и порекомендую знакомым и друзьям.",
                  img: Woman,
                },
                {
                  name: "Дмитрий",
                  comment:
                    "Гостеприимные жители, отзывчивые, можно уловить хороший день,много развлекаловок ( от кафе до музеев), белые ночи. Тем, кто любит, перемены - вам в Архангельск",
                  img: Man,
                },
                {
                  name: "Анна",
                  comment:
                    "Гостеприимные жители, отзывчивые, можно уловить хороший день,много развлекаловок ( от кафе до музеев), белые ночи. Тем, кто любит, перемены - вам в Архангельск",
                  img: Woman2,
                },
              ]}
            />
          </div>
          <EmailForm />
          <Footer to={Main} />
        </div>
      </Parallax>
    </div>
  );
}

export default App;
// max-w-screen-2xl
