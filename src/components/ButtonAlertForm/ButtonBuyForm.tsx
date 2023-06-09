import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../alert/alert-dialog";
import "./alert.css";

import "keen-slider/keen-slider.min.css";

import { ButtonTransparent } from "../button/buttonTransparent";
import { Htag } from "../Htag/Htag";
import { useKeenSlider } from "keen-slider/react";
import { BuyForm } from "../../data/data";
import { DetailedHTMLProps, HTMLAttributes, useRef } from "react";
import { useForm } from "react-hook-form";
import { Input } from "../input/input";
import { MessageHub } from "../Notify/Notify";
import cn from "classnames";
type AddFunction = (msg: string) => void;
type ButtonBuyFormProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;
export const ButtonBuyForm = ({ className }: ButtonBuyFormProps) => {
  const ref = useRef<null | AddFunction>(null);

  const [sliderRef] = useKeenSlider(
    {
      slideChanged() {
        console.log("slide changed");
      },
    },
    [
      // add plugins here
    ]
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<{ email: string }>({});
  const onSubmit = async () => {
    try {
      new Promise((resolve) => {
        setTimeout(() => {
          resolve("string"), 1000;
        });
      });
      reset();
      ref.current?.("Вы подали заявку");
      console.log(11);
    } catch (e) {}
  };
  return (
    <div className={cn(className)}>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <ButtonTransparent className={"z-50 min-w-10 h-fit w-fit mx-auto"}>
            <Htag type={"h2"} className="mt-0">
              Купить тур
            </Htag>
          </ButtonTransparent>
        </AlertDialogTrigger>
        <AlertDialogContent
          className={"overflow-auto scrollbar h-full sm:h-full"}
        >
          <AlertDialogHeader>
            <AlertDialogTitle>Арктические просторы</AlertDialogTitle>
          </AlertDialogHeader>

          <div
            ref={sliderRef}
            className="keen-slider text-white h-[90vh] sm:h-[800px]  Check overflow-auto bg-teal-500 "
          >
            {BuyForm.map((r, index) => (
              <div className="keen-slider__slide w-full" key={index}>
                <h1 className={" m-5 min-h-48 text-3xl"}>{r.title}</h1>
                <img
                  className={"px-5  object-cover w-full"}
                  src={r.img}
                  alt=""
                />
                <p className={cn("Check m-5 text-xl block")}>{r.description}</p>
              </div>
            ))}
          </div>

          <form className={"z-10"} onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-wrap space-y-5 justify-around items-center">
              <Input
                {...register("email", {
                  required: { value: true, message: "Заполните email" },
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Введите  email",
                  },
                })}
                id={"email"}
                error={errors.email}
                className="block border-white text-white"
                placeholder="email"
              />
              <ButtonTransparent className="w-full hover:text-white hover:bg-teal-500 block p-5 ml-0 text-white border-white">
                ПОДПИСАТЬСЯ
              </ButtonTransparent>
            </div>

            <MessageHub
              children={(add: AddFunction) => {
                ref.current = add;
              }}
            />
          </form>
          <AlertDialogFooter>
            <AlertDialogCancel className={"w-full hover:bg-red-800"}>
              закрыть
            </AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};
