import { Htag } from "../Htag/Htag.tsx";
import Logo from "../../assets/Logo.svg";
export const Footer = () => {
  return (
    <div
      className={
        "bg-teal-500 w-full justify-around  space-y-10 sm:space-y-1 items-center flex flex-wrap h-fit z-10 p-10 "
      }
    >
      <div className="">
        <img src={Logo} alt="" className="mx-auto" />
        <Htag type={"h2"} className="text-extrabold">
          Контакты
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
  );
};
