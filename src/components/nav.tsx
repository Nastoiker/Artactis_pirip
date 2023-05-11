import { Htag } from "./Htag/Htag.tsx";
import { useState, useEffect } from "react";
import cn from "classnames";
import styles from "./nav.module.css";
export const NavigationMenu = ({ menu }: { menu: string[] }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
    const handleScroll = (ref) => {
        ref.current.scrollIntoView({ behavior: "smooth" });
    };
  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);
  const changeState = () => {
    setIsOpen((o) => !o);
    console.log(1);
  };
  return (
    <div className={"py-5 sm:flex justify-around"}>
      <button
        className={"absolute bg-white top-20 w-fit right-20 block sm:hidden"}
        onClick={() => changeState}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width={20} viewBox="0 0 24 24">
          <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
        </svg>
      </button>
      <div
        className={cn("  ", {
          [styles.ChangeNav]: isOpen,
          [styles.ChangeNav2]: !isOpen,
        })}
      >
        {menu.map((m, index) => (
          <button key={index}>
            <Htag type={"h4"}>{m}</Htag>
          </button>
        ))}
      </div>
    </div>
  );
};
