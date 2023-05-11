import { useForm } from "react-hook-form";
import { Htag } from "../Htag/Htag";
import { InputComponent } from "../input/input";
import "./EmailForm.module.css";
import { FieldsetHTMLAttributes, useState } from "react";
import { ButtonTransparent } from "../../assets/button/buttonTransparent";
export const EmailForm = () => {
  const [isLoading, setIsLoading] = useState();
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
    } catch (e) {}
  };
  return (
    <form
      className="FollowsContainer  min-h-screen-[800px] md:flex justify-around items-center p-20"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="w-full md:w-1/3">
        <h1 className="text-start text-teal-500 text-4xl">
          Оставьте свои контакты, чтоб узнавать об актуальных турах и новостях
          первым
        </h1>
      </div>
      <div className="ml-0 h-full min-width-[50%] space-y-10">
        <InputComponent
          {...register("email", {
            required: { value: true, message: "Заполните login" },
          })}
          className="border-teal-500"
          placeholder="email"
        />
        <ButtonTransparent className="p-5 ml-0 text-white">
          ПОДПИСАТЬСЯ
        </ButtonTransparent>
      </div>
    </form>
  );
};
