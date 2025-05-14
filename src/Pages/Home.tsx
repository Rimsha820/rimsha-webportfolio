import React, { useEffect, useState } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaEnvelope,
} from "react-icons/fa";
import h2 from "../assets/women.png";
import frontendImg from "../assets/web.png";
import mobileImg from "../assets/mobile.png";
import { motion } from "framer-motion";

interface BannerProps {
  onClick: () => void;
  id: string;
}

const roles = ["Front-end Developer!"];

const Banner: React.FC<BannerProps> = ({ onClick, id }) => {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prevRole) => (prevRole + 1) % roles.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Main Banner Section */}
      <div
        id={id}
        onClick={onClick}
        className="flex flex-col md:flex-row items-center justify-center p-5 md:h-[700px] gap-5"
      >
        {/* Text Section */}
        <motion.div
          className="flex-1 p-5 md:ml-44 text-center md:text-left"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-2xl md:text-2xl lg:text-3xl mb-2 text-[#e54d70]">
            Hi, there I am a
          </h1>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#200f60]">
            {roles[currentRole]}
          </h1>
          <p className="text-lg sm:text-base lg:text-lg text-black mt-4 leading-relaxed">
            I am a Front-End Developer with 2+ years of professional experience
            focusing on React-based applications. Proficient with JavaScript,
            TypeScript, React Native, and Git. Developed over 10 user-centered
            React applications. Looking forward to adding value through my
            passion and expertise.
          </p>
          <div className="flex justify-center md:justify-start gap-2 mt-4 text-white">
            <a
              href="https://www.linkedin.com/in/rimsha-malik-99a237242/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0077b5] p-2 sm:p-3 rounded-full hover:opacity-90"
            >
              <FaLinkedin className="text-[14px] sm:text-[18px]" />
            </a>
            <a
              href="https://github.com/Rimsha820"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#333] p-2 sm:p-3 rounded-full hover:opacity-90"
            >
              <FaGithub className="text-[14px] sm:text-[18px]" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#e4405f] p-2 sm:p-3 rounded-full hover:opacity-90"
            >
              <FaInstagram className="text-[14px] sm:text-[18px]" />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#3b5998] p-2 sm:p-3 rounded-full hover:opacity-90"
            >
              <FaFacebook className="text-[14px] sm:text-[18px]" />
            </a>
            <a
              href="mailto:rimsha820.malik@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#c8232c] p-2 sm:p-3 rounded-full hover:opacity-90"
            >
              <FaEnvelope className="text-[14px] sm:text-[18px]" />
            </a>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          <img
            src={h2}
            alt="Home"
            className="w-[350px] md:w-[400px] lg:w-[550px] max-w-[90%] h-auto"
          />
        </motion.div>
      </div>

      {/* Mobile Development Section */}
      <div className="w-full px-6 md:px-24 py-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center text-[#200f60] mb-10">
          What I Do ?
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          {/* Left - Image */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
          >
            <img
              src={mobileImg}
              alt="Mobile front-end development"
              className="w-[300px] md:w-[700px] h-auto object-contain"
            />
          </motion.div>

          {/* Right - Text */}
          <motion.div
            className="w-full md:max-w-[40rem] px-4 md:px-0 mx-auto text-center md:text-left"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-3xl font-semibold text-[#e54d70] mb-4">
              Mobile Development
            </h3>

            <p className="text-lg text-black leading-relaxed">
              📱 I specialize in building intuitive, high-performance mobile
              applications using React Native.
              <br />
              With experience in mobile UI frameworks, touch-optimized
              components, and native API integration, I ensure smooth user
              experiences across Android and iOS platforms.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Web Development Section */}
      <div className="w-full px-6 md:px-24 py-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          {/* Left - Text */}
          <motion.div
            className="w-full md:max-w-[40rem] px-4 md:px-0 mx-auto text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-3xl font-semibold text-[#e54d70] mb-4">
              Website Development
            </h3>

            <p className="text-lg text-black leading-relaxed">
              💻 Building responsive website front ends using React, JavaScript,
              Redux, and Tailwind CSS.
              <br />
              With strong UI/UX focus, I create pixel-perfect, mobile-first
              interfaces that are fast and accessible. I specialize in
              JavaScript and React ecosystems, integrating APIs, managing state
              efficiently, and optimizing performance for production-ready apps.
            </p>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
          >
            <img
              src={frontendImg}
              alt="Front-end development"
              className="w-[300px] md:w-[700px] h-auto object-contain"
            />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Banner;
