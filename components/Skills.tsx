import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

type Props = {};

const skillSet = [
  {
    id: 1,
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
    percentage: "100%",
    skillName: "React Native",
  },
  {
    id: 2,
    logo: "https://download.logo.wine/logo/Kotlin_(programming_language)/Kotlin_(programming_language)-Logo.wine.png",
    percentage: "100%",
    skillName: "Android Kotlin",
  },
  {
    id: 3,
    logo: "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/23-swift-512.png",
    percentage: "90%",
    skillName: "iOS",
  },
  {
    id: 4,
    logo: "https://download.logo.wine/logo/React_(web_framework)/React_(web_framework)-Logo.wine.png",
    percentage: "90%",
    skillName: "React",
  },
  {
    id: 5,
    logo: "https://w7.pngwing.com/pngs/87/586/png-transparent-next-js-hd-logo.png",
    percentage: "75%",
    skillName: "Next.js",
  },
  // {
  //   id: 6,
  //   logo: "https://www.kindpng.com/picc/m/355-3557482_flutter-logo-png-transparent-png.png",
  //   percentage: "85%",
  //   skillName: "Flutter",
  // },
  {
    id: 7,
    logo: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-512.png",
    percentage: "100%",
    skillName: "Java",
  },
];

function Skills({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      transition={{
        duration: 1.0,
      }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{
        once: true,
      }}
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 
      min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for current profeciency
      </h3>

      <div className="grid grid-cols-3 gap-4 pt-[130px]">
        {skillSet.map((item) => (
          <Skill data={item} key={item.id} />
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;
