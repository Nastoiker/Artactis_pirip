import React, { useState } from 'react';
import style from './Navbar.module.css';


const NAvbar = () => {
    const [nav, setNav] = useState(false);
    return (
        <header className={style.header}>
            <div className='container'>
                <div className={style.box}>
                    <div className={style.logo_image}>
                       asdasd
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
                        {nav ? <div className={style.close}>ЗАКРЫТЬ</div> : <div>|||</div>}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default NAvbar;