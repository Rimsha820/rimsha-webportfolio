import React from "react";
import ContactImage from "../assets/contacts.png";
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.3,
    },
  },
};

const iconVariants = (direction: "left" | "right") => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? -50 : 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
});

const Contact: React.FC = () => {
  const socialLinks = [
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/rimsha-malik-99a237242/",
      color: "#0077b5",
    },
    {
      icon: <FaGithub />,
      href: "https://github.com/Rimsha820",
      color: "#000000",
    },
    {
      icon: <FaEnvelope />,
      href: "mailto:your.email@gmail.com",
      color: "#c71610",
    },
    {
      icon: <FaInstagram />,
      href: "https://www.instagram.com",
      color: "#E4405F",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-8">
      {/* Left: Image */}
      <div className="flex-1 flex justify-center md:justify-center mb-10 md:mb-0 md:ml-12">
        <img
          src={ContactImage}
          alt="Contact Illustration"
          className="w-[300px] h-auto md:w-[550px]"
        />
      </div>

      {/* Right: Text, Icons, Button */}
      <div className="flex-1 flex flex-col items-center text-center md:mr-12">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#200f60] mb-4">
          Contact Me
        </h2>
        <p className="text-gray-700 text-lg mb-6 max-w-xl">
          I'm available across various platforms and typically respond within 24
          hours. Feel free to connect for opportunities related to React,
          Microservices, or Full-stack Web Development.
        </p>

        {/* Social Icons with animation */}
        <motion.div
          className="flex justify-center flex-wrap gap-4 mb-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {socialLinks.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-transform transform hover:scale-110"
              style={{ backgroundColor: item.color }}
              variants={iconVariants(index % 2 === 0 ? "left" : "right")}
            >
              <div className="text-white text-xl">{item.icon}</div>
            </motion.a>
          ))}
        </motion.div>

        {/* Resume Button */}
        <a
          href="https://drive.google.com/file/d/1N3n65Xgkn-M4U_YtDcI7DVZE_7FePIVr/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#200f60] text-white px-6 py-3 rounded-full font-medium hover:bg-[#2f2f91] transition duration-200 mb-5 sm:mb-0"
          >
          See My Resume
        </a>
      </div>
    </div>
  );
};

export default Contact;
