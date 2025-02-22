import  React ,{ useState } from "react";
import { FaCode, FaServer, FaTools, FaUserTie } from "react-icons/fa";
import img from "/images/download.png";

const skills = {
  Frontend: [
    { name: "HTML5", level: 95 },
    { name: "CSS3 (Sass/SCSS)", level: 90 },
    { name: "JavaScript", level: 100 },
    { name: "React.js", level: 100 },
  ],
  Backend: [
    { name: "MySql", level: 70 },
    { name: "Php", level: 65 },
  ],
  "Soft Skills": [
    { name: "Problem-solving", level: 80 },
    { name: "Collaboration", level: 85 },
    { name: "Attention to Detail", level: 75 },
  ],
  Tools: [
    { name: "Git", level: 100 },
    { name: "GitHub", level: 90 },
    { name: "Deploy", level: 100 },
  ],
};

const icons = {
  Frontend: (
    <div className="bg-gray-700 lg:w-[60px] w-[40px] lg:mt-[-80px] mt-[-70px] border-2 border-purple-400 lg:ml-[-120px] ml-[-100px] lg:h-[60px] h-[40px] rounded-[10px]">
      <FaCode className="text-purple-400 text-xl absolute lg:ml-3  lg:text-3xl lg:mt-3 mt-2 ml-2" />
    </div>
  ),
  Backend: (
    <div className="bg-gray-700 lg:w-[60px] w-[40px] lg:mt-[-80px] mt-[-70px] border-2 border-purple-400 lg:ml-[-120px] ml-[-100px] lg:h-[60px] h-[40px] rounded-[10px]">
      <FaServer className="text-purple-400 text-xl absolute lg:ml-3  lg:text-3xl lg:mt-3 mt-2 ml-2" />
    </div>
  ),
  "Soft Skills": (
    <div className="bg-gray-700 lg:w-[60px] w-[40px] lg:mt-[-80px] mt-[-70px] border-2 border-purple-400 lg:ml-[-120px] ml-[-100px] lg:h-[60px] h-[40px] rounded-[10px]">
      <FaUserTie className="text-purple-400 text-xl absolute lg:ml-3  lg:text-3xl lg:mt-3 mt-2 ml-2" />
    </div>
  ),
  Tools: (
    <div className="bg-gray-700 lg:w-[60px] w-[40px] lg:mt-[-80px] mt-[-70px] border-2 border-purple-400 lg:ml-[-120px] ml-[-120px] lg:h-[60px] h-[40px] rounded-[10px]">
      <FaTools className="text-purple-400 text-xl absolute lg:ml-3  lg:text-3xl lg:mt-3 mt-2 ml-2" />
    </div>
  ),
};

export default function Page1() {
  const [activeTab, setActiveTab] = useState("Frontend");

  return (
    <div id='skills' className="min-h-screen bg-gradient-to-br from-[#1e024f] to-[#0d0633] flex flex-col md:flex-row items-center md:items-start md:justify-center p-6">
      <div className="w-full max-w-4xl text-white md:w-[700px]">
        <h2 className="text-3xl font-bold lg:pt-[200px] md:pt-[150px] text-center pt-16 md:text-left">
          Technical Proficiency
        </h2>
        <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-14 mt-8">
          {Object.keys(skills).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`w-[220px] md:w-[260px] h-[80px] md:h-[100px] mt-7 lg:mt-7 rounded-xl flex items-center justify-center text-lg md:text-xl font-semibold border-2 border-purple-400 transition-all duration-300 relative ${
                activeTab === tab
                  ? "bg-purple-500"
                  : "bg-gray-800 hover:bg-purple-400"
              }`}
            >
              {icons[tab]} <span className="ml-10">{tab}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="border-2 border-purple-400 w-full md:w-[650px] h-auto md:h-[400px] lg:mt-[200px] mt-10 md:mt-[-340px] p-5 rounded-xl">
        <h3 className="text-2xl pt-2 font-semibold text-purple-400 mb-3">
          {activeTab}
        </h3>
        <hr className="border-purple-400 w-full" />
        {skills[activeTab].length > 0 ? (
          skills[activeTab].map((skill) => (
            <div key={skill.name} className="pt-5">
              <p className="text-sm pt-2">{skill.name}</p>
              <div className="w-full bg-gray-600 mt-4 rounded-full h-2.5">
                <div
                  className="bg-purple-500 h-2.5 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-400">No data available</p>
        )}
      </div>
    </div>
  );
}
