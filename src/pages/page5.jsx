import React,{ useState } from "react";
import { FaCode, FaPenNib, FaLayerGroup } from "react-icons/fa";

const services = [
  {
    title:
      "Website\n                                                              \tDeveloper",
    icon: <FaCode size={40} className="mt-[90px] ml-[-170px]" />,
    details: [
      "I develop user interfaces with HTML, CSS, React.",
      "Web page development.",
      "I can clone any website.",
      "Design an idea for a webpage.",
    ],
  },
  {
    title: "UI / UX\nDesigner",
    icon: <FaPenNib size={40} className="mt-[90px] ml-[-170px]" />,
    details: [
      "User interface prototyping.",
      "User experience research.",
      "Interactive wireframing.",
      "Design system creation.",
    ],
  },
  {
    title: "Full Stack\nWebsite",
    icon: <FaLayerGroup size={40} className="mt-[90px] ml-[-170px]" />,
    details: [
      "Frontend & backend development.",
      "Database integration.",
      "Authentication & security.",
      "API development.",
    ],
  },
];

export default function Page5() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div id='about' className="bg-[#0d0633] py-20 text-white text-center relative">
      <h2 className="text-4xl font-bold mb-8">Services</h2>
      <p className="text-gray-300 mb-12">What I Offer</p>
      <div className="grid md:grid-cols-3 gap-8 px-8 md:px-16">
        {services.map((service, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden shadow-lg bg-purple-900 text-white p-8 flex flex-col w-[290px]  lg:h-[400px] lg:w-[350px] items-center"
          >
            {service.icon}
            <h3 className="text-3xl ml-[-120px]  font-semibold mt-7 whitespace-pre-line text-center">
              {service.title}
            </h3>

            <p
              className="text-white text-xl mt-7 ml-[-140px] font-semibold cursor-pointer hover:underline"
              onClick={() => setSelectedService(service)}
            >
              View More
            </p>
          </div>
        ))}
      </div>
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-purple-800 text-white p-6 rounded-lg shadow-lg w-[300px] lg:w-[450px] lg:h-[300px]  relative">
            <button
              className="absolute top-2 right-2 text-white hover:text-black"
              onClick={() => setSelectedService(null)}
            >
              ✖
            </button>
            <h3 className="text-xl font-semibold mb-4 whitespace-pre-line text-center">
              {selectedService.title}
            </h3>
            <p className="text-white mb-2">
              Services with more than 3 months of experience.
            </p>
            <ul className="text-white">
              {selectedService.details.map((detail, i) => (
                <li key={i} className="flex items-center gap-2 mb-2">
                  ✔ {detail}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
