import React, { useState } from 'react';
import style from './Navbar.module.css';
import Logo from "../assets/Logo.svg";
import {Htag} from "./Htag/Htag";


const NAvbar = () => {
    const [nav, setNav] = useState(false);
    return (
        <header className={style.header + " sm:mx-20 "}>
            <div className='flex w-full justify-around'>
                <div className={style.box}>
                    <div className={style.logo_image}>
                        <img src={Logo} alt="" className="z-50 mx-auto " />
                        <Htag type={"h2"} className="text-white text-extrabold">
                            ArkhangleskTour
                        </Htag>
                    </div>
                    <ul
                        className={
                            nav ? [style.menu, style.active].join(' ') : [style.menu]
                        }
                    >
                        <li>
                            <a href='##'>Product</a>
                        </li>
                        <li>
                            <a href='##'>About Us</a>
                        </li>
                        <li>
                            <a href='##'>Customers</a>
                        </li>
                        <li>
                            <a href='##'>Price</a>
                        </li>
                        <li>
                            <a href='##'>Contacts</a>
                        </li>
                    </ul>
                    <div onClick={() => setNav(!nav)} className={style.mobile_btn}>
                        {nav ? <div className={style.close}>                            <svg xmlns="http://www.w3.org/2000/svg" height={30}  width={30} viewBox="0 0 24 24"><path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"></path></svg>
                        </div> : <div className={"mr-20"}><svg height={30} fill={'white'} width={30} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path></svg></div>}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default NAvbar;