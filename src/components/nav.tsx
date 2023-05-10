import {Htag} from "./Htag/Htag.tsx";
import {useState} from "react";

export const NavigationMenu = ({menu}: { menu: string[]}) => {
    const [isOpen, setIsOpen] = useState<boolean>(true);
    return <div className={"py-5 flex justify-around"}>
        <button className={"absolute top-20 right-20 block sm:hidden"} onClick={() => setIsOpen((o) => !o)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path></svg>
        </button>

        {isOpen && menu.map( m => <button>
        <Htag type={'h4'}>
            {m}
        </Htag>
    </button>)}</div>;

}