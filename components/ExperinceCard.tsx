import React from "react";
import { motion } from "framer-motion";

type Props = {
  data: any,
};

function ExperinceCard({data}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] 
    snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 
    overflow-y-scroll scrollbar-thin  scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      {/* <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 2.0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        className="w-28 h-28 rounded-full md:rounded-full xl:w-[120px] xl:h-[120px] object-center"
        src="https://cached.imagescaler.hbpl.co.uk/resize/scaleWidth/952/cached.offlinehbpl.hbpl.co.uk/news/NST/Amazon-logo-meaning.jpg"
        alt=""
      /> */}

      <div className="px-0 md:px-8">
        <h4 className="text-3xl font-light">{data.jobTitle}</h4>
        <p className="font-semibold text-2xl mt-1">{data.companyName}</p>

        <div className=" flex space-x-2 my-2">
          {/* tech */}
          <img
            className="h-8 w-8 rounded-full"
            src={data.logo}
            alt=""
          />
        </div>

        <p className="lowercase py-5 text-gray-300">From {data.startDate} to {data.endDate}</p>

        <ul className="list-disc space-y-4 ml-5 text-sm text-justify">
          <li>{data.description}</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperinceCard;
