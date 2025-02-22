import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Page1 from "./pages/page1";
import Page3 from "./pages/page3";
import Page4 from "./pages/page4";
import Page5 from "./pages/page5";
import girl from '/images/ko.webp'

const App = () => {
  return (
    <>
      <Navbar />
      <div id='home' className="w-full lg:h-[100vh] h-[900px]  bg-gradient-to-br from-[#1e024f] to-purple-800">
        <div className="flex flex-col-reverse md:flex-row items-center  lg:pt-[50px] md:mt-20 ">
          <div className="text-center md:text-left md:w-1/2 space-y-4">
            <h2 className="text-4xl md:text-7xl font-bold text-white leading-relaxed  pt-[140px] lg:pt-[70px] lg:pl-[100px]">
              Building Digital Experiences That Inspire
            </h2>
            <p className="text-gray-300   text-[18px] lg:pl-[100px] pt-[20px]">
              Passionate Frontend Developer | Transforming Ideas into <br />
              Seamless and Visually Stunning Web Solutions
            </p>
          </div>
          <div>
          <img  className='lg:w-[400px] w-[250px] mt-24 h-[260px] lg:h-[400px] lg:ml-[200px] lg:mt-11 rounded-2xl'src={girl}/>
          </div>

          <div className="absolute top-11 mt-[-250px] lg:mt-0  lg:pl-[900px] flex space-x-4">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt="React"
              id="nok"
              className="w-12 h-12 mt-[500px] lg:ml-[-20px] ml-[-90px]"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              id="nok"
              alt="HTML"
              className="w-12 h-12 lg:mt-[600px] mt-[580px]"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              id="nok"
              alt="CSS"
              className="w-12 h-12 lg:mt-[600px] mt-[580px]"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              id="nok"
              alt="JavaScript"
              className="w-12 h-12 lg:mt-[600px] mt-[580px]"
            />
          </div>
        </div>
      </div>
      <Page1 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Footer/>
    </>
  );
};

export default App;
