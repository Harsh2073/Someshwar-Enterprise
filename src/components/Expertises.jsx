import { Building2, FileCheck, HomeIcon } from "lucide-react";
import React from "react";

const Expertises = () => {
  const expertise = [
    {
      icon: HomeIcon,
      title: "Residential Construstion",
      desc: "Custom homes, apartment complexes, and gated communities built with precision and care.",
      features: [
        "Villas & Bungalows",
        "High-rise Apartments",
        "Township Development",
      ],
    },
    {
      icon: Building2,
      title: "Commercial Projects",
      desc: "Office buildings, retail spaces, and mixed-use developments that drive business growth.",
      features: ["Corporate Offices", "Retail Shops"],
    },
    {
      icon: FileCheck,
      title: "Project Management",
      desc: "End-to-end project oversight ensuring quality, budget, and timeline compliance.",
      features: [
        "Planning & Designing",
        "Execution & Monitoring",
        "Quality Control",
      ],
    },
  ];
  return (
    <section id="expertises" className="py-12 md:py-20">
      <div className="mx-auto px-4 md:px-8 lg:px-20 max-w-7xl">
        {/*Heading */}
        <div className="flex items-center flex-col gap-3 mb-10 md:mb-16">
          <h1 className="bg-red-100 text-red-500 rounded-2xl px-4 py-1 w-fit font-semibold">
            Expertises
          </h1>

          <h2 className="font-semibold text-2xl md:text-3xl text-center">
            Comprehensive Construction Solutions
          </h2>

          <p className="text-gray-500 text-center max-w-xl">
            From concept to completion, we offer full-spectrum construction
            services tailored to your needs
          </p>
        </div>
        {/*Expertises */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertise.map((expertise, index) => (
            <div
              key={index}
              className="border-2 border-gray-300 p-6 rounded-xl transition duration-300 hover:border-red-500 hover:shadow-xl"
            >
              <div className="flex flex-col gap-5 text-left">
                <div className="bg-red-100 text-red-500 w-fit p-3 rounded transition duration-300 group-hover:bg-red-500 group-hover:text-white">
                  <expertise.icon className="w-7 h-7" />
                </div>

                <h2 className="font-semibold text-xl">{expertise.title}</h2>

                <p className="text-gray-600 text-base">{expertise.desc}</p>

                <ul className="space-y-2">
                  {expertise.features.map((features, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-gray-700"
                    >
                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 shrink-0" />
                      {features}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertises;
