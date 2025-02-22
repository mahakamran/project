import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Importing icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Portfolio Heading and Menu Icon Aligned */}
      <div className="fixed top-4 left-4 flex items-center z-50 w-full md:justify-between md:px-10">
        <h2 className="text-3xl font-semibold text-white">Portfolio</h2>
        
        {/* Toggle Button for Mobile (Hidden on Desktop) */}
        <button
          className="md:hidden text-white ml-32 text-2xl rounded"
          onClick={() => setIsOpen(true)}
        >
          <Menu size={30} className="text-white" /> {/* White menu icon */}
        </button>
      </div>

      {/* Sidebar Navigation for Mobile */}
      <div
        className={`h-screen w-[250px] bg-purple-900 fixed left-0 top-0 flex flex-col p-6 space-y-6 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:hidden z-50`}
      >
        <div className="flex justify-end">
          {/* Close Button */}
          <button
            className="text-white text-2xl"
            onClick={() => setIsOpen(false)}
          >
            <X size={30} className="text-white" /> {/* White close icon */}
          </button>
        </div>
        <nav className="flex flex-col space-y-4">
          <a href="#home" className="text-xl font-semibold text-white cursor-pointer">
            Home
          </a>
          <a href="#about" className="text-xl font-semibold text-white cursor-pointer">
            About
          </a>
          <a href="#experience" className="text-xl font-semibold text-white cursor-pointer">
            Experience
          </a>
          <a href="#skills" className="text-xl font-semibold text-white cursor-pointer">
            Skills
          </a>
        </nav>
        <a href="#contact">
          <button
            id="maha"
            className="bg-white text-purple-600 px-4 py-2 rounded-md font-semibold"
          >
            Hire me
          </button>
        </a>
      </div>

      {/* Navbar for Laptop/Desktop */}
      <div className="hidden md:flex lg:w-full h-[70px] fixed top-0 left-0 items-center justify-between px-10 z-50">
        <h2 className="text-3xl font-semibold pl-4 text-white">Portfolio</h2>
        <nav className="flex gap-10">
          <a href="#home" className="text-xl font-semibold text-white cursor-pointer">
            Home
          </a>
          <a href="#about" className="text-xl font-semibold text-white cursor-pointer">
            Service
          </a>
          <a href="#experience" className="text-xl font-semibold text-white cursor-pointer">
            Projects
          </a>
          <a href="#skills" className="text-xl font-semibold text-white cursor-pointer">
            Skills
          </a>
          <a href="#contact">
            <button
              id="maha"
              className="bg-white text-purple-600 px-4 py-2 rounded-md font-semibold"
            >
              Hire me
            </button>
          </a>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
