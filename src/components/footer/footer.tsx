import { Htag } from "../Htag/Htag.tsx";
import Logo from "../../assets/Logo.svg";
export const Footer = () => {
  return (
      <div>
        <div
            className={
              "text-teal-500 transparent border border-y-4 border-teal-500 border-x-0 w-full justify-around  space-y-10 sm:space-y-1 items-center flex flex-wrap h-fit z-10 p-10 "
            }
        >
          <div className="text-start" onClick={()=> window.scrollTo(0, 0)}>
            <img src={Logo} alt="" className="mx-auto text-teal-500" />
            <Htag type={"h2"} className="text-white text-extrabold">
              ArkhangleskTour
            </Htag>
          </div>
          <div className="text-start ">
            <Htag type={"h2"}>Контакты</Htag>
            <p>
              <a href="">Контакты</a>
            </p>
            <p>
              <a href="">Контакты</a>
            </p>
          </div>
          <div className="text-start  ">
            <Htag type={"h2"}>Содержание</Htag>

            <p>
              <a href="">Контакты</a>
            </p>
            <p>
              <a href="">Контакты</a>
            </p>
          </div>
          <div className="text-start ">
            <Htag type={"h2"}>Правила</Htag>
            <p>
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
