import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "../alert/alert-dialog";
import {ButtonTransparent} from "../button/buttonTransparent";
import {Htag} from "../Htag/Htag";

export const ButtonBuyForm = () => {
    return <>
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <ButtonTransparent className={"z-50 min-w-10 h-full w-fit mx-auto"}>
                    <Htag type={"h2"} className="mt-0">
                        Купить тур
                    </Htag>
                </ButtonTransparent>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Арктические
                        просторы</AlertDialogTitle>
                </AlertDialogHeader>
                <AlertDialogFooter>

                    <AlertDialogCancel>Отмена</AlertDialogCancel>
                    <AlertDialogAction
                        className={"bg-red-500  border-red block"}
                    >
                        Удалить
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog></>
}