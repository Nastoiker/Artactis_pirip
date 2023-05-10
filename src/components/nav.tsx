import {Htag} from "./Htag/Htag.tsx";

export const NavigationMenu = ({menu}: { menu: string[]}) => {
    return <div className={"py-5 flex justify-around"}>{menu.map( m => <Htag type={'h4'}>
        {m}
    </Htag>)}</div>;

}