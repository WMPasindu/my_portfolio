import React from "react";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
  data: any,
};

function Skill({ directionLeft, data }: Props) {
  return (
    <div className="group relative flex cursor-pointer pt-[50px]">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{
          duration: 2.0,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        src={data.logo}
        className="rounded-full border bg-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 
        xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out p-2"
      />
      <div
        className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out
       group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0 "
      >
        <div className="flex items-center justify-center group-hover:opacity-80 h-full">
          <p className="text-sm font-bold text-black opacity-100">{data.skillName} + {data.percentage}</p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
