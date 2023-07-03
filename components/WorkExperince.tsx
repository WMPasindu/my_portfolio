import React from "react";
import { motion } from "framer-motion";
import ExperinceCard from "./ExperinceCard";

type Props = {};

const workExp = [
  {
    jobId: 1,
    jobTitle: "Associate Technical Lead",
    companyName: "1Billion Tech Private Limited",
    logo: "https://media.licdn.com/dms/image/C560BAQHsR1kCVtXLWg/company-logo_200_200/0/1600621952613?e=2147483647&v=beta&t=v2IpujrjSLatR8tkKe08Rc4jmMLgHHyzC2MGmSSGg8c",
    startDate: "06/2022",
    endDate: "Precent",
    description:
      "In my current role at 1BT, I am leading a challenging project with a team in the AI domain. This project involves working on complex logic implementations and creating various charts and visualizations. The project's requirements demand a high level of expertise and present unique challenges. As a Senior Software Engineer in my previous role, I primarily focused on developing specific functionalities for ongoing projects within the company. I collaborated closely with the team to understand the project requirements, design robust solutions, and ensure timely delivery. Leading a project in the AI domain at 1BT has allowed me to further expand my knowledge and skills in this cutting-edge field. I have gained experience in working with intricate algorithms and intricate data models, as well as honing my ability to analyze and visualize data effectively. These experiences have not only strengthened my technical proficiency but also enhanced my leadership and project management skills. I have learned how to navigate complex requirements, foster teamwork, and deliver high-quality results within strict timelines.",
  },
  {
    jobId: 2,
    jobTitle: "Software Engineer",
    companyName: "Allion Technologies",
    logo: "https://media.licdn.com/dms/image/C560BAQE5HFFK-2IbUA/company-logo_200_200/0/1659091139063?e=2147483647&v=beta&t=18PXSz32Iij0AmQjS7ZcbLvv2jYrDX9RYqkBjJS_PGw",
    startDate: "02/2021",
    endDate: "06/2022",
    description:
      "As a Software Engineer, I had the opportunity to work on multiple mobile projects across diverse domains. One of my main areas of focus was the medical domain, where I developed mobile applications tailored to the specific needs of healthcare professionals and patients. These applications were designed to enhance medical processes, provide access to vital information, and improve patient care. In addition to medical applications, I also worked with a local client to maintain a mobile application for their tea factory sales and related data management. This involved collaborating closely with the client to understand their requirements and provide effective solutions. I ensured the smooth functioning of the application, addressed any issues or bugs that arose, and implemented new features to enhance the user experience.",
  },
  {
    jobId: 3,
    jobTitle: "Software Engineer",
    companyName: "Virtusa Private Limited",
    logo: "data:image/png;base64,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",
    startDate: "01/2019",
    endDate: "01/2021",
    description:
      "My main responsibility was the development of a secure plugin for JIRA, a widely used project management tool. This plugin was designed to enhance the security capabilities of JIRA and provide additional functionality for the Veracode project. I successfully implemented the plugin across three different environments: JIRA Cloud, JIRA Server, and JIRA Data Center. I took ownership of the user interface (UI) development, implementing frontend components to enhance the user experience. Furthermore, I developed a few microservices using Spring Boot to support the project's backend functionality.",
  },
  {
    jobId: 4,
    jobTitle: "Associate Software Engineer",
    companyName: "Allion Technologies",
    logo: "https://media.licdn.com/dms/image/C560BAQE5HFFK-2IbUA/company-logo_200_200/0/1659091139063?e=2147483647&v=beta&t=18PXSz32Iij0AmQjS7ZcbLvv2jYrDX9RYqkBjJS_PGw",
    startDate: "04/2018",
    endDate: "01/2019",
    description:
      "As an Associate Software Engineer, I had the opportunity to work on multiple projects across various domains, where my primary responsibilities revolved around application maintenance, addressing user change requests, and implementing new features. I played a vital role in ensuring the smooth functioning of these applications by promptly resolving issues and providing effective solutions. Additionally, I took charge of submitting both mobile applications to their respective app stores, adhering to their guidelines and ensuring compliance with industry standards. This experience allowed me to enhance my skills in application maintenance, troubleshooting, user support, and version control. Through these projects, I gained a broad understanding of different domains and honed my ability to adapt to diverse project requirements and deliver optimal solutions",
  },
  {
    jobId: 5,
    jobTitle: "Associate Software Engineer",
    companyName: "XGen Group Private Limited",
    logo: "https://media.licdn.com/dms/image/C560BAQHANFEDIc2PVg/company-logo_200_200/0/1596124018763?e=2147483647&v=beta&t=TB2ASAM7DQfXFDyLIs1zXgqBtlfCKqCN0EdFcDfxnS4",
    startDate: "10/2017",
    endDate: "04/2018",
    description:
      "As an Associate Software Engineer, I had the privilege of leading the development of a comprehensive Microfinance System for a leading financial company in Sri Lanka. This project involved building the application from scratch, encompassing all stages of the software development life cycle. I collaborated closely with stakeholders to gather requirements, design the architecture, and implement the system's features and functionalities. The Microfinance System was designed to cater specifically to the needs of the financial company, providing robust and scalable solutions for managing microfinance operations, loan processing, client information, and financial reporting. Throughout the development process, I utilized industry best practices and followed agile methodologies to ensure efficient project delivery. This experience allowed me to gain expertise in full-stack development, database management, and financial domain knowledge. It was a rewarding opportunity that furthered my growth as a software engineer while making a meaningful impact on the financial industry.",
  },
  {
    jobId: 6,
    jobTitle: "Intern Software Engineer",
    companyName: "SoftVessel Private Limited",
    logo: "https://media.licdn.com/dms/image/C560BAQFD4rnNXEHQBA/company-logo_200_200/0/1677659138646?e=2147483647&v=beta&t=jmMLCev1iyOMmVhDwhCSfRkKM9v_zMwKGOFkOxshikg",
    startDate: "04/2017",
    endDate: "10/2017",
    description:
      "As an intern Android Software Developer, I had the opportunity to work on an Android Point of Sale (POS) system where I played a key role in implementing UI functionalities and optimizing memory utilization. My primary focus was on enhancing the user interface, ensuring a smooth and intuitive experience for the users. Additionally, I identified and addressed the issue of high memory consumption when dealing with large amounts of data in the POS application. Through the implementation of efficient memory utilization mechanisms, I was able to significantly reduce the memory footprint and improve the overall performance of the application. This experience allowed me to develop strong skills in Android development, UI implementation, and performance optimization, all of which have contributed to my growth as an Android software developer.",
  },
];

function WorkExperince({}: Props) {
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
      className="flex relative overflow-hidden flex-col h-screen md:text-left ml:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experince
      </h3>

      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-mandatory  pt-[170px] scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {workExp.map((item) => (
          <ExperinceCard data={item} />
        ))}
      </div>
    </motion.div>
  );
}

export default WorkExperince;
