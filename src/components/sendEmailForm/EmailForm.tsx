import {FieldValue, useForm} from "react-hook-form";
import { Htag } from "../Htag/Htag";
import { Input } from "../input/input";
import "./EmailForm.module.css";
import {FieldsetHTMLAttributes, useRef, useState} from "react";
import { ButtonTransparent } from "../button/buttonTransparent";
import  {MessageHub} from "../Notify/Notify";
type AddFunction = (msg: string) => void

export const EmailForm = () => {
  const ref = useRef<null | AddFunction>(null)

  const [isLoading, setIsLoading] = useState<boolean>()
  const [isError, setError] = useState<boolean>()
  const [isCorrect, setIsCorrect] = useState<boolean>();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<{email: string}>({});
  const onSubmit = async () => {
    try {
      new Promise((resolve) => {
        setTimeout(() => {
          resolve("string"), 1000;
        });

      });
      reset();
      ref.current?.('Успешная регистрация')
      setIsCorrect(true);
      console.log(11);
    } catch (e) {}
  };
  return (
    <form
      className="FollowsContainer  min-h-[500px] my-20 md:flex justify-around items-center p-10 md:p-20"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="w-full md:w-1/3">
        <h1 className="text-start text-teal-500 text-3xl  md:text-5xl">
          Оставьте свои контакты, чтоб узнавать об актуальных турах и новостях
          первым
        </h1>
      </div>
      <div className="ml-0 h-full sm:w-1/3 space-y-10">
        <Input
            {...register("email", {
              required: { value: true, message: "Заполните email" },
            })}
            id={"email"}
            error={errors.email}
          className="border-teal-500"
          placeholder="email"
        />
        <ButtonTransparent className="block p-5 ml-0 text-white">
          ПОДПИСАТЬСЯ
        </ButtonTransparent>
      </div>

                 <MessageHub
          children={(add: AddFunction) => {
            ref.current = add
          }}
      />

    </form>
  );
};
