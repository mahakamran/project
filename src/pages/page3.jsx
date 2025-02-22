import React from "react";
import { FaEnvelope, FaGithub } from "react-icons/fa";

export default function Page3() {
  return (
    <div id="contact" className="min-h-screen bg-[#0d0633] flex flex-col p-10 text-white">
      <h2 className="text-3xl font-bold mb-10 lg:pl-24 lg:pt-10 text-center md:text-left">
        Contact Me
      </h2>

      <div className="flex flex-wrap md:flex-nowrap md:justify-evenly w-full max-w-5xl mx-auto">
        {/* Contact Info Section */}
        <div className="w-full md:w-[550px] flex flex-col items-center lg:ml-[-200px] md:items-start ml-0 md:ml-[100px]">
          <div className="h-[150px] border-2 border-purple-600 rounded-xl flex flex-col items-center justify-center relative w-full max-w-[550px]">
            <div className="bg-purple-600 lg:w-[70px] lg:h-[60px] w-[50px] h-[40px] rounded-[5px] flex items-center justify-center absolute lg:top-4 top-7 left-1/2 transform -translate-x-1/2">
              <FaEnvelope className="text-white lg:text-3xl text-xl" />
            </div>
            <br />
            <span className="lg:text-lg text-center lg:pt-11 pt-11 lg:ml-[-20px] md:ml-36">
              mahakamran@gmail.com
            </span>
          </div>

          <div className="h-[150px] mt-14 border-2 border-purple-600 rounded-xl flex flex-col items-center justify-center relative w-full max-w-[550px]">
            <div className="bg-purple-600 lg:w-[70px] lg:h-[60px] w-[50px] h-[40px] rounded-[5px] flex items-center justify-center absolute lg:top-4 top-7 left-1/2 transform -translate-x-1/2">
              <FaGithub className="text-white lg:text-3xl text-xl" />
            </div>
            <br />
            <span className="lg:text-lg text-center lg:pt-11 pt-14 lg:ml-[-20px] md:ml-32">
              <a href="https://github.com/MahaKamran" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
                github.com/MahaKamran
              </a>
            </span>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="w-[870px] md:w-[450px] flex flex-col gap-7 px-5 md:px-0 mt-10 md:mt-0 pl-0 md:pl-[100px]">
          <div className="flex flex-col md:flex-row gap-5">
            <input
              type="text"
              placeholder="First Name"
              className="flex-1 bg-gray-700 px-8 py-3 border-2 border-purple-600 rounded-md"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="flex-1 bg-gray-700 px-8 py-3 border-2 border-purple-600 rounded-md"
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            className="w-full md:w-[530px] px-8 py-3 bg-gray-700 border-2 border-purple-600 rounded-md"
          />
          <textarea
            placeholder="Message"
            rows="4"
            className="w-full md:w-[530px] px-8 bg-gray-700 py-3 border-2 border-purple-600 rounded-md"
          ></textarea>
          <button className="w-full md:w-[530px] p-3 bg-purple-600 rounded-md text-lg font-semibold hover:bg-purple-400 transition-all">
            SEND
          </button>
        </div>
      </div>
    </div>
  );
}
