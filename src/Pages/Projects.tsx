import React from "react";
import ProjectImage from "../assets/Project.png";
import HTMLLogo from "../assets/html.png";
import TailwindLogo from "../assets/tailw (1).png";
import JSLogo from "../assets/Js.webp";
import ReactLogo from "../assets/react.svg";
import ReduxLogo from "../assets/redux.svg";
import { PiStarFill } from "react-icons/pi";
import { motion } from "framer-motion";

const Projects: React.FC = () => {
  const techStackIcons = [HTMLLogo, TailwindLogo, JSLogo, ReactLogo, ReduxLogo];

  const allProjects = [
    {
      title: "Office Management System",
      description:
        "Automated payroll processing, reducing manual intervention and streamlining financial operations. In this system, we are also handling employee attendance and salary management.",
      date: "2020-04-13",
    },
    {
      title: "Resume Builder",
      description:
        "An online Resume maker built with React where users can create, customize, and download professional CVs. Includes real-time preview, multiple templates, and PDF export features.",
      date: "2023-07-20",
    },
    {
      title: "CartTag Mobile App",
      description:
        "A powerful mobile app built using React Native that allows users to keep records using QR code scanning. Ideal for inventory or cart management systems with real-time updates.",
      date: "2023-01-15",
    },
    {
      title: "E-commerce Website",
      description:
        "A fully responsive fruit-selling website with product listings, cart functionality, and a user-friendly interface using HTML, CSS, and JavaScript.",
      date: "2022-11-05",
    },
    {
      title: "Overtime Mobile App",
      description:
        "A React Native-based productivity tool for calculating employee overtime hours with accurate reporting and salary adjustment support and keeps records of employees.",
      date: "2022-08-10",
    },
  ];

  return (
    <div
      className="p-5 md:p-10 flex flex-col items-center mt-0 md:mt-15 space-y-16"
      id="projects"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row items-center text-center space-y-6 md:space-y-0 md:space-x-4"
      >
        <img
          src={ProjectImage}
          alt="Projects"
          className="w-full sm:w-[600px] md:w-[900px] h-auto object-contain"
        />

        <div className="max-w-xl text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-4">
            Projects
          </h2>
          <p className="text-base sm:text-xl md:text-xl text-gray-700">
            I have built a variety of responsive and interactive frontend
            projects using modern tools like React.js, Tailwind CSS, and
            JavaScript. My work focuses on clean design, usability, and
            performance, covering everything from personal portfolios to
            e-commerce and data-driven web apps.
          </p>
        </div>
      </motion.div>

      {/* Projects Section */}
      <div className="text-center w-full mt-0 md:mt-20">
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-16 text-[#df9d30]">
          My Projects
        </h3>

        {/* First Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-20 mb-8">
          {allProjects.slice(0, 3).map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="bg-[#f0ede8] shadow-lg p-6 rounded-lg text-left w-full"
            >
              <h4 className="text-lg sm:text-2xl font-bold mb-2 text-black flex items-start gap-3 sm:gap-4">
                <PiStarFill className="text-yellow-500 text-xl sm:text-2xl flex-shrink-0 mt-1" />
                {project.title}
              </h4>

              <p className="text-base sm:text-lg text-gray-700 mb-4">
                {project.description}
              </p>

              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0 mt-4">
                <p className="text-sm sm:text-base text-gray-500">
                  {`Created on: ${project.date}`}
                </p>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {techStackIcons.map((icon, i) => (
                    <img
                      key={i}
                      src={icon}
                      alt="tech"
                      className="w-7 sm:w-8 h-7 sm:h-8"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Second Row */}
        <div className="flex flex-col items-center gap-8 px-4 md:px-20">
          <div className="flex justify-center flex-wrap gap-8 w-full">
            {allProjects.slice(3, 5).map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className="bg-[#f0ede8] shadow-lg p-6 rounded-lg text-left w-full md:w-[45%] max-w-[600px]"
              >
                <h4 className="text-lg sm:text-2xl font-bold mb-2 text-black flex items-start gap-3 sm:gap-4">  ``
                  <PiStarFill className="text-yellow-500 text-xl sm:text-2xl flex-shrink-0 mt-1" />
                  {project.title}
                </h4>

                <p className="text-base sm:text-lg text-gray-700 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0 mt-4">
                  <p className="text-sm sm:text-md text-gray-500">
                    {`Created on: ${project.date}`}
                  </p>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {techStackIcons.map((icon, i) => (
                      <img
                        key={i}
                        src={icon}
                        alt="tech"
                        className="w-7 sm:w-8 h-7 sm:h-8"
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Button */}
          <a
            href="https://github.com/Rimsha820"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-0 md:mt-10 inline-block bg-[#df9d30] hover:bg-[#d88f18] text-white rounded-full font-semibold py-3 px-6 sm:py-4 sm:px-8 text-sm sm:text-base transition-all duration-300 shadow-md"
          >
            More Projects
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
