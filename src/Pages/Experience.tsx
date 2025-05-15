import React from "react";
import { motion } from "framer-motion";
import Servicesimg from "../assets/experience.png";
import dot1 from "../assets/enigmatix.7cf08dd8.png";
import dot2 from "../assets/cari.avif";
import dot3 from "../assets/resume (1).png";
import dot4 from "../assets/image-0.png";
import dot5 from "../assets/coomerce.png";
import dot6 from "../assets/registrationLogo.png";

const projects = [
  {
    title: "Office Managment System",
    description:
      "Designed and developed a system that provided real-time insights into employee attendance patterns. Integrated attendance tracking features with real-time data to facilitate  and improve workforce management.",
    subtitle: "Enigmatix Pvt Ltd.",
    date: "January 2023 - April 2023 ",
    image: dot1,
  },
  {
    title: "CarTag Mobile App",
    description:
      "A powerful mobile app built using React Native that allows users to keep records using QR code scanning. Ideal for inventory or cart management systems with real-time updates and secure user tracking.",
    subtitle: "AutoSync Solutions Pvt Ltd.",
    date: "January 2025 - March 2025",
    image: dot2,
  },
  {
    title: "E-commerce Website",
    description:
      "A fully responsive fruit-selling website with product listings, cart functionality, and a user-friendly interface using HTML, CSS, and JavaScript and the website is fully responsive.",
    subtitle: "FreshCart Pvt Ltd.",
    date: "October 2024 - December 2024",
    image: dot5,
  },
  {
    title: "Saigon Music App",
    description:
      "A sleek React Native mobile music player where users can search, stream, and play songs. Features include dynamic search, curated playlists, and seamless audio playback functionality.",
    subtitle: "TuneVerse Pvt Ltd.",
    date: "Febuary 2025 - April 2025",
    image: dot4,
  },
  {
    title: "Resume Builder",
    description:
      "An online Resume maker built with React there are many tempaltes there where users can create, customize, and download professional CVs. Includes real-time preview, multiple templates, and PDF export features.",
    subtitle: "SmartHire Technologies Pvt Ltd.",
    date: "March 2024 - May 2024",
    image: dot3,
  },
  {
    title: "Overtime Mobile App",
    description:
      "A React Native-based productivity tool for calculating employee overtime hours with accurate reporting, timesheets, and salary adjustment support. Useful for HR and operations teams.",
    subtitle: "TimeTrack Solutions Pvt Ltd.",
    date: "June 2024 - September 2024",
    image: dot6,
  },
];

const Experience: React.FC = () => {
  return (
    <div className="p-5 md:p-10 flex flex-col items-center mt-0 space-y-16">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-30">
        <div className="flex justify-center items-center">
          <img
            src={Servicesimg}
            alt="Services"
            className="w-[700px] h-auto object-contain"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-[700px]">
          <div className="max-w-xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-black">
              Work And Experience
            </h2>

            <p className="text-base sm:text-lg md:text-xl leading-6 sm:leading-7 text-black md:text-left text-center text-justify">
              I am a Frontend Web and Mobile Developer with experience in
              building responsive and user-friendly applications using React,
              React Native, and JavaScript. I have developed cross-platform
              mobile apps and dynamic web interfaces for startups and
              established companies. My focus is on performance, clean
              architecture, and delivering intuitive user experiences across
              devices. I also actively contribute to open-source communities.
            </p>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="w-full px-4 sm:px-10 md:px-20 md:py-10 lg:w-300">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-[#200f60] mb-18">
          My Work .
        </h2>

        <div className="relative ml-4 md:ml-1">
          {/* Vertical timeline line */}
          <div className="absolute left-[18px] top-[64px] bottom-[160px] max-[360px]:bottom-[300px] sm:bottom-[60px] md:bottom-[104px] w-1 bg-[#ecce0e] z-0" />

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="mb-14 relative pl-10 sm:pl-16 md:pl-24"
            >
              {/* Animated Dot */}
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.2 }}
                className="absolute left-[10px] top-16 w-5 h-5 bg-[#ecce0e] rounded-full border-4 border-white shadow-md z-10"
              />
              <span className="absolute left-[20px] top-18 h-1 w-16 bg-[#ecce0e]" />

              {/* Image */}
              <div className="absolute left-[-55px] sm:left-[-100px] md:left-[-110px] top-12 w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 sm:top:10">
                <img
                  src={project.image}
                  alt={`Dot for ${project.title}`}
                  className="w-full h-full object-cover rounded-full border-2 border-gray-400"
                />
              </div>

              {/* Card */}
              <div className="relative bg-[#f4f4f2] p-4 sm:p-5 md:p-6 rounded-lg shadow-2xl">
                {/* Date on large screen */}
                <span className="hidden sm:block absolute top-5 right-6 text-xs sm:text-sm md:text-base text-gray-700 font-medium">
                  {project.date}
                </span>

                {/* Title */}
                <h3 className="text-md sm:text-xl md:text-2xl font-semibold text-[#200f60] mb-1">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-1">
                  {project.subtitle}
                </p>
                <span className="block sm:hidden text-xs text-gray-700 font-medium mb-2">
                  {project.date}
                </span>
                <p className="text-sm sm:text-base md:text-lg text-gray-700">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
