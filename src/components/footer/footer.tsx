import { Htag } from "../Htag/Htag.tsx";
import Logo from "../../assets/Logo.svg";
import Icon from "../../assets/iconsScoial/Badge-1.svg";
import Icon2 from "../../assets/iconsScoial/Badge.svg";
import Icon3 from "../../assets/iconsScoial/Badge-2.svg";

export const Footer = ({ to }: { to: any }) => {
  const HandleScroll = (ref:any) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    console.log(1);
  };
  return (
    <div>
      <div
        className={
          "text-teal-500  transparent border border-y-4 border-teal-500 border-x-0 w-full justify-between sm:justify-around  space-y-10 sm:space-y-1 items-center flex flex-wrap h-fit z-10 p-10 "
        }
      >
        <div className="text-start">
          <div onClick={() => HandleScroll(to)}>
            <img src={Logo} alt="" className="mx-auto text-teal-500" />
            <Htag type={"h2"} className="text-white text-extrabold">
              ArkhangleskTour
            </Htag>
          </div>

          <div className={"flex  py-5 sm:space-x-5"}>
            <a href="">
              {" "}
              <img width={30} src={Icon} alt="" />
            </a>
            <a href="">
              {" "}
              <img width={30} src={Icon2} alt="" />
            </a>
            <a href="">
              {" "}
              <img width={30} src={Icon3} alt="" />
            </a>
          </div>
        </div>
        <div className="text-start ">
          <Htag type={"h2"}>КОНТАКТЫ</Htag>
          <p>
            <a href="">Контакты</a>
          </p>
          <p>
            <a href="">Контакты</a>
          </p>
        </div>
        <div className="text-start  ">
          <Htag type={"h2"}>НОВОСТИ</Htag>

          <p>
            <a href="">Контакты</a>
          </p>
          <p>
            <a href="">Контакты</a>
          </p>
        </div>
        <div className=" text-start ">
          <Htag type={"h2"}>ПРАВИЛА</Htag>
          <p className="font-thin		">
            <a href="">Контакты</a>
          </p>
          <p>
            <a href="">Контакты</a>
          </p>
        </div>
      </div>
      <div className={"text-center p-5"}>
        <p className={"text-teal-500"}>© 2023 Made by dambinov&sheikh</p>
      </div>
    </div>
  );
};
