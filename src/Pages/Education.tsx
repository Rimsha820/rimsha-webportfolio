import React from "react";
import { motion } from "framer-motion";
import EducationImage from "../assets/degree.svg";
import CardIcon from "../assets/islamia.png";

const Education: React.FC = () => {
  return (
    <motion.div
      className="p-5 md:p-10 flex flex-col items-center text-center md:text-left mt-0 md:mt-15"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.div
        className="flex flex-col md:flex-row items-center justify-center w-full space-y-5 md:space-y-0 md:space-x-8"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <img
          src={EducationImage}
          alt="Education"
          className="w-[250px] object-cover"
        />

        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-4xl sm:text-5xl md:text-5xl font-bold text-black mb-2">
            Education
          </h2>
          <p className="text-xl sm:text-xl text-gray-800">Basic Qualification</p>
        </div>
      </motion.div>

      <motion.div
        className="flex flex-col md:flex-row items-center md:items-start w-full max-w-7xl mt-16 space-y-6 md:space-y-0 md:space-x-10"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="flex-shrink-0 w-32 h-32 sm:w-40 sm:h-40 md:w-40 md:h-40 mt-0 md:mt-5 rounded-full border border-[#ebb64d] flex items-center justify-center shadow-lg"
          initial={{ rotate: -10, opacity: 0 }}
          whileInView={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <img
            src={CardIcon}
            alt="Card Icon"
            className="w-20 h-20 sm:w-20 sm:h-20 object-contain max-w-full max-h-full"
          />
        </motion.div>

        {/* Degree Card */}
        <motion.div
          className="bg-white shadow-lg rounded-lg w-full"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-[#ebb64d] text-white p-4 rounded-t-lg flex justify-between items-start flex-wrap">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold">
                The Islamia University Of Bahawalpur
              </h3>
              <p className="text-lg">BS Computer Science</p>
            </div>
            <p className="text-sm sm:text-md font-bold mt-1 md:mt-0 md:text-left text-center w-full md:w-auto">
              2019 - 2023
            </p>
          </div>

          <div className="p-6 text-left text-sm sm:text-md text-gray-800 bg-[#f0ede8] space-y-6">
            <p>
              ⚡ I have studied core computer science subjects such as Data
              Structures, Operating Systems, Computer Networks and Database
              Systems.
            </p>
            <p>
              ⚡ Additionally, I have gained experience in areas like Artificial
              Intelligence, Machine Learning, Web and Mobile App Development,
              and Cloud Computing through coursework and self-directed learning.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Education;
