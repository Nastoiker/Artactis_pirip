import Bird1 from "../../assets/bitds/bird1.png";
import Bird2 from "../../assets/bitds/bird2.png";
import Bird3 from "../../assets/bitds/bird3.png";
import Bird4 from "../../assets/bitds/bird4.png";
import Bird5 from "../../assets/bitds/bird5.png";
import Bird6 from "../../assets/bitds/bird6.png";
import NAvbar from "../nav.beta";
import {Htag} from "../Htag/Htag";
import {ButtonBuyForm} from "../ButtonAlertForm/ButtonBuyForm";
import { MainPage } from "../../data/data.ts";
import {useRef} from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";

export const HomePage = () => {
    const parallax = useRef<IParallax>(null!);
    return <div className={"h-[100vh]"}>
        <Parallax pages={1} ref={parallax} >
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
            <ParallaxLayer offset={0.5} speed={0.2} style={{ opacity: 1 }}>
             </ParallaxLayer>
            <div className={
                    "  my-0  min-h-screen  contain bg-no-repeat w-full mx-auto gap-5  BackGroundMainPage h-full text-white"
                }>
                <NAvbar />
                {/*<NavigationMenu menu={MainPage.navigation} />*/}
                {/*<img src="./assets/Logo.svg" className={"w-10 h-10"} alt=""/>*/}
                <div className={"text-center grid  content-center sm:my-20"}>
                    <ParallaxLayer offset={0.1} speed={1.5}>
                        <h1
                            className={
                                "mx-auto MainText text-5xl xl:text-9xl w-fit xl:w-[900px] break-words mt-48"
                            }
                        >
                            {MainPage.title}
                        </h1>
                        <div
                            className={"flex justify-center space-x-0 sm:space-x-5 mt-10"}
                        >
                            <Htag type={"h4"}>ОКАЖИСЬ В СКАЗКЕ</Htag>
                            <Htag type={"h4"} className={"text-white"}>
                                С НАШЕЙ ПОМОЩЬЮ
                            </Htag>
                        </div>
                        <ButtonBuyForm className={"my-10"} />
                    </ParallaxLayer>
                </div>
                </div>
        </Parallax>
    </div>
}