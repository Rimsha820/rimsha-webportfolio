import React from "react";
import LogoImage from "../assets/rimsha (1).png";

const Header: React.FC = () => {
  return (
    <header className="flex flex-col md:flex-row items-center justify-between px-5 py-5 text-center md:text-left">
      <img
        src={LogoImage}
        alt="Rimsha Malik Logo"
        className="w-32 sm:w-40 md:w-[180px] h-auto object-contain ml-0 md:ml-[180px]"
      />
      <a
        href="https://www.linkedin.com/in/rimsha-malik-99a237242/"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-7 md:mt-0 md:mr-[200px]"
      >
        <button
          className="text-[1rem] px-4 py-3 text-black border border-black font-bold rounded-full
             sm:text-[0.9rem] sm:px-4 sm:py-2
             md:text-[1rem] md:px-5 md:py-2.5
             transition duration-300 hover:bg-black hover:text-white"
        >
          Work with me
        </button>
      </a>
    </header>
  );
};

export default Header;
