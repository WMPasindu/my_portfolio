import React from "react";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      transition={{
        duration: 2.0,
      }}
      whileInView={{
        opacity: 1,
      }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row px-10 max-w-7xl justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl scroll-m-0">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 2.0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        src="my_image.jpeg"
        className="relative -mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
        md:rounded-lg md:w-66 md:h-100 xl:w-[400px] xl:h-[400px] overflow-x-hidden top-5"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span> {""}{" "}
          background
        </h4>
        <p className="text-sm">
          I am a skilled Software Engineer with{" "}
          <span className="underline decoration-[#FFF]/50">BSc</span> and{" "}
          <span className="underline decoration-[#FFF]/50">MSc</span>,
          possessing over six years of experience specializing in the
          development of both native and hybrid mobile applications. My
          technical expertise includes React Native, Java (Android), Ionic,
          JavaScript, flutter, iOS, React, UI design, database management
          (handling local DBs and others), and application publication in app
          stores. {"\n"}
        </p>
        <p>{"\n"}</p>
        <p className="text-sm">
          {"\n \n "}My passion for mobile application development drives me to
          continuously learn and apply new technologies to enhance my skills and
          expertise. If you require further information or have specific
          questions, please do not hesitate to contact me.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
