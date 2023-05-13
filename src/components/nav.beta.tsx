import { useRef, useState } from "react";
import styles from "./navbar.module.css";
import Logo from "../assets/Logo.svg";
import { Htag } from "./Htag/Htag";

const NAvbar = ({
  About,
  review,
  Map,
}: {
  About: any;
  review: any;
  Map: any;
}) => {
  const [nav, setNav] = useState(false);
  const menu = useRef<any>(!null);
  const HandleScroll = (ref: any) => {
    setNav(false);
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header ref={menu} className={styles.header + " sm:mx-20 "}>
      <div className="flex w-full justify-around">
        <div className={styles.box}>
          <div className={styles.logo_image}>
            <img src={Logo} alt="" className="z-50 mx-auto " />
            <Htag type={"h2"} className="text-white text-extrabold">
              ArkhangleskTour
            </Htag>
          </div>
          <ul className={nav ? styles.menu + " " + styles.active : styles.menu}>
            <li>
              <a onClick={() => HandleScroll(About)}>О нас</a>
            </li>
            <li>
              <a onClick={() => HandleScroll(Map)}>Тур</a>
            </li>
            <li>
              <a onClick={() => HandleScroll(review)}>Отзывы</a>
            </li>
          </ul>
          <div onClick={() => setNav(!nav)} className={styles.mobile_btn}>
            {nav ? (
              <div className={styles.close}>
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height={50}
                  fill={"white"}
                  width={50}
                  viewBox="0 0 24 24"
                >
                  <path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"></path>
                </svg>
              </div>
            ) : (
              <div className={"sm:mr-20"}>
                <svg
                  height={30}
                  fill={"white"}
                  width={30}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
                </svg>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default NAvbar;
