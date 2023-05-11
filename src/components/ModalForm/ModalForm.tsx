import {DetailedHTMLProps, HTMLAttributes, PropsWithChildren, ReactNode} from "react";
export interface ModalFormProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode,
    active: boolean,
    setIsActive: () => void;
}
export const ModaForm = ({children}: ModalFormProps) => {
    return <div className={"modal"}>
        <div className={"modal__content"}>

        </div>
    </div>
}