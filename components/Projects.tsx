import React from "react";
import { motion } from "framer-motion";

type Props = {};

const projects = [
  {
    id: 1,
    projectName: "Antium Systems",
    category: "AI",
    type: "Web",
    image: "./Antium.png",
    description:
      "Antium is an advanced AI system that revolutionizes module training by utilizing cloud resources and delivering exceptional accuracy. With a selection of high-performing modules, users can train their own datasets for enhanced results. The system provides a comprehensive dashboard with graphs and visualizations for easy monitoring and evaluation. Previous information is readily accessible, enabling users to compare and optimize their current outcomes effectively. Antium simplifies the training process, reduces resource requirements, and delivers superior accuracy, offering users improved results with significant time and effort savings.",
    link: "",
    technologies: "next.js, TypeScript, TilwindCss, AWS",
  },
  {
    id: 2,
    projectName: "HAnalytics",
    category: "Heath",
    type: "Mobile/Web",
    image: "./hanalytics.png",
    description:
      "HAnalytics is a health domain project that focuses on tracking patient records, medical data, and prescription history. It provides a centralized platform for storing and organizing patient information. The project also features a chat system that enables direct communication between patients and doctors, facilitating medical advice and personalized recommendations. Moreover, HAnalytics encourages user participation in medical research, allowing users to contribute their data to help researchers discover new medications and gain insights into various health conditions. Overall, HAnalytics aims to streamline patient record management, enhance doctor-patient communication, and drive advancements in healthcare through collaborative research efforts.",
    link: "",
    technologies: "react.js, React-Native, redux, AWS, css, JavaScript",
  },
  {
    id: 3,
    projectName: "ReadyMe",
    category: "Education",
    type: "Mobile",
    image: "./ReadyMe.png",
    description:
      "Ready Me is a mobile application that aids users in preparing for O'L and A/L exams by providing past papers and answer checking. It offers detailed explanations for each question and implements custom keyboards for math-related answers, enhancing the user experience. Overall, Ready Me is a valuable tool for students seeking to improve their exam performance and understanding of key concepts.",
    link: "",
    technologies: "React-Native, redux, AsycStorage, JavaScript, TypeScript",
  },
  {
    id: 4,
    projectName: "RTS",
    category: "e-commerce",
    type: "Mobile",
    image: "./RTS.png",
    description:
      "RTS (Tea Factory Management System) is a local software solution designed to streamline operations in tea factories. It offers features for managing tea collection details, money transactions, and tracking tea collectors' routes. The system provides accurate data capture, real-time updates, and summary reports, enabling managers to make informed decisions and optimize efficiency within the tea factory. Overall, RTS enhances tea factory management by facilitating tea collection, financial management, and route tracking processes.",
    link: "",
    technologies: "Android, SQLite, Java, ButterKnife, Room-DB, LiveData",
  },
  {
    id: 5,
    projectName: "AlliGoMobile",
    category: "e-commerce",
    type: "Mobile",
    image: "",
    description:
      "AlliGo is a React Native application that simplifies tool purchasing in the hardware industry. Users can browse and buy tools from various stores through a user-friendly interface. The app also offers robust warehouse management capabilities, allowing store owners to efficiently track and organize inventory across different stores and countries. AlliGo enhances the shopping experience for users and streamlines inventory management processes for businesses in the hardware industry.",
    link: "",
    technologies: "React-Native, redux, redux-thunk, AsycStorage, TypeScript",
  },
  {
    id: 6,
    projectName: "MediMap",
    category: "Health",
    type: "Mobile",
    image: "",
    description:
      "Medimaps is a React Native application designed for the medical domain. It enables the tracking of adult members' health and ensures timely medication intake. The app allows users to input their medication schedules and sends notifications to caregivers if any doses are missed. Medimaps promotes medication adherence and facilitates communication between patients and caregivers for better health management.",
    link: "",
    technologies: "React-Native, redux, AsycStorage, JavaScript, TypeScript",
  },
];

const Projects = (props: Props) => {
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
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row 
    max-w-full justify-evenly mx-auto items-center z-0 pt-12"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div
        className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x 
      snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"
      >
        {projects.map((project, i) => (
          <div
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 
          items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{
                duration: 2.0,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              src={project.image}
              className="max-w-[300px] max-h-[250px]"
            />

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Project {i + 1} of {projects.length} :
                </span>{" "}
                {project.projectName}
              </h4>

              <p className="text-base text-justify">{project.description}</p>
            </div>

            <div className="flex justify-evenly">
              <p className="text-sm text-center">
                Technologies: {project.technologies}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
};

export default Projects;
