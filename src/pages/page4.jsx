import React from "react";

const projects = [
  {
    title: "Movie Website",
    image: "/images/web1.PNG",
    link: "https://wonderful-biscochitos-94d80f.netlify.app",
  },
  {
    title: "Car Rental Website",
    image: "/images/web2.PNG",
    link: "https://flourishing-blini-640630.netlify.app",
  },
  {
    title: "Absoult Website",
    image: "/images/web3.PNG",
    link: "https://rainbow-parfait-d1ccc0.netlify.app",
  },
  {
    title: "Burger Wesite",
    image: "/images/web4.PNG",
    link: "https://bright-cassata-73e70b.netlify.app",
  }
];

export default function Page4() {
  return (
    <div  id='experience'   className="min-h-screen bg-[#0d0633] text-white p-10" >
      <h2 className="text-3xl font-bold text-center mb-5">Portfolio</h2>
      <p className="text-center text-gray-400 mb-10">My Web Projects</p>

      {/* Fix layout for 2 cards per row */}
      <div className="flex flex-wrap justify-center gap-10 max-w-4xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="lg:w-[400px] w-[700px] h-[280px] rounded-xl shadow-lg p-5 border-2 border-purple-800">
            <img src={project.image} alt={project.title} className="w-full h-[200px] lg:mt-0 mt-[-40px] lg:object-cover object-contain rounded-md" />
            <h3 className="text-xl font-semibold mt-3">{project.title}</h3>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 mt-2 inline-block"
            >
              Demo →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
