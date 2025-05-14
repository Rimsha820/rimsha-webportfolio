import React, { useState } from 'react';
import { GoHome } from 'react-icons/go';
import { MdOutlineSchool } from 'react-icons/md'; 
import { BiMessageDetail } from 'react-icons/bi';
import { FaBriefcase } from 'react-icons/fa'; 
import { FaProjectDiagram } from 'react-icons/fa'; 


const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const Nav: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const handleClick = (id: string) => {
    setActiveId(id);
    scrollToSection(id);
  };

  const navItems = [
    { id: 'home', icon: <GoHome /> },
    { id: 'about', icon: <FaProjectDiagram className="text-xl sm:text-2xl md:text-3xl" /> }, 
    { id: 'education', icon: <MdOutlineSchool /> },
    { id: 'experience', icon: <FaBriefcase className="text-xl sm:text-2xl md:text-3xl" /> },
    { id: 'contact', icon: <BiMessageDetail /> },
  ];
  
  return (
    <nav
    className="fixed z-[1000] bottom-3  sm:bottom-5 left-1/2 transform -translate-x-1/2 
    w-[70%] max-w-[400px] bg-black/20 rounded-full 
    h-[50px] sm:h-[60px] md:h-[65px] px-1 sm:px-2 flex justify-center items-center gap-1 sm:gap-3"
  >
    
    {navItems.map(({ id, icon }) => (
      <button
        key={id}
        onClick={() => handleClick(id)}
        className={`text-2xl sm:text-2xl md:text-3xl text-white flex items-center justify-center 
          h-[40px] w-[40px] sm:h-[50px] sm:w-[50px] rounded-full transition-all duration-300
          ${activeId === id
            ? 'bg-gradient-to-r from-[#2c3e50] via-[#34495e] to-[#95a5a6] text-white'
            : 'hover:opacity-80'
          }`}
      >
        {icon}
      </button>
    ))}
  </nav>
  
  );
};

export default Nav;
