import React from "react";
import { FaInstagram, FaDribbble, FaCodepen } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0d0633] py-6 mt-10 text-center">
      <h2 className="text-white text-xl font-semibold">Maha</h2>
      <nav className="mt-2">
        <ul className="flex justify-center space-x-10 pt-9 text-gray-400">
          <li><a href="#" className="hover:text-purple-900">About</a></li>
          <li><a href="#" className="hover:text-purple-900">Projects</a></li>
          <li><a href="#" className="hover:text-purple-900">Testimonial</a></li>
        </ul>
      </nav>
      <div className="flex justify-center space-x-4 mt-7">
        <a href="#" className="bg-purple-900 p-2 rounded-lg text-white hover:bg-white hover:text-purple-900 transition"><FaInstagram size={24} /></a>
        <a href="#" className="bg-purple-900 p-2 rounded-lg text-white hover:bg-white hover:text-purple-900 transition"><FaDribbble size={24} /></a>
        <a href="#" className="bg-purple-900 p-2 rounded-lg text-white hover:bg-white hover:text-purple-900 transition"><FaCodepen size={24} /></a>
      </div>
      <p className="text-gray-500 mt-7">&copy; MahaKamran. All rights reserved</p>
    </footer>
  );
};

export default Footer;
