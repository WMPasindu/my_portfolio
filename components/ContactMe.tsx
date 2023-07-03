import React from "react";
import { motion } from "framer-motion";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
type Props = {};

const ContactMe = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:wmpasindu@gmail.com?subject=${formData.subject}&body=Hi, My Name is ${formData.name}. ${formData.message} 
    (${formData.email})`;
  };
  return (
    <div className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col mt-12">
        <h4 className="text-3xl font-semibold text-center">
          I have just want you need.{" "}
          <span className="decoration-[#F7AB0A]/50 underline">Lets Talk.</span>
        </h4>

        <div className="space-y-2 mt-5">
          <div className="flex items-center space-x-2 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-xl">+94 715836036</p>
          </div>

          <div className="flex items-center space-x-2 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-xl">wmpasindu@gmail.com</p>
          </div>

          <div className="flex items-center space-x-2 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-xl">
              499/2E, Jayagath Mawatha, Arangala, Sri Lanka
            </p>
          </div>
        </div>

        <form
          className="flex flex-col space-y-2 w-fit mx-auto mt-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex space-x-2">
            <input
              className="contactInput"
              placeholder="Name"
              type="text"
              {...register("name")}
            />
            <input
              className="contactInput"
              placeholder="Email"
              type="text"
              {...register("email")}
            />
          </div>
          <input
            className="contactInput"
            placeholder="Subject"
            type="text"
            {...register("subject")}
          ></input>
          <textarea
            className="contactInput"
            placeholder="Message"
            {...register("message")}
          />
          <button
            className="bg-[#F7Ab0A] py-5 px-10 rounded-md text-black font-bold text-lg"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
