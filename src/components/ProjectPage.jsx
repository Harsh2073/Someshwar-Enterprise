import React from "react";
import { MapPin, Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { projects } from "../data";
import { FaChevronRight } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

const ProjectPage = () => {
  return (
    <section className="px-4 py-12 md:px-8 md:py-20 lg:px-20 lg:py-28 max-w-7xl mx-auto">
      {/* Header */}
      <h1 className="text-3xl md:text-4xl font-bold text-[#B30016] text-center mb-3 md:mb-2">
        Our Signature Projects
      </h1>
      <p className="text-gray-600 text-base md:text-lg mb-8 md:mb-12 max-w-3xl mx-auto text-center">
        Showcasing excellence in construction through thoughtfully designed
        residential and commercial developments.
      </p>
      {/* Project List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
        {projects.map((projects, index) => (
          <div
            key={index}
            className="group bg-white shadow-sm hover:shadow-xl border border-gray-200 rounded-lg overflow-hidden transition-all duration-300"
          >
            {/* Image Section */}
            <div className="relative h-[350px] w-full">
              <img
                src={projects.image}
                alt={projects.title}
                className="w-full h-full object-cover"
              />

              {/* Status Badge */}
              <div className="absolute top-3 right-3 bg-red-600 text-white text-sm px-3 py-1 rounded">
                {projects.status}
              </div>
            </div>

            {/* Content Section */}
            <div className="p-4 md:p-5">
              {/* Title & Location */}
              <div className="flex justify-between items-start pb-2">
                <h1 className="font-semibold text-xl">{projects.title}</h1>

                <div className="flex items-center gap-1 text-gray-600">
                  <MdLocationOn className="text-lg text-red-600" />
                  <p className="text-lg">{projects.location}</p>
                </div>
              </div>

              {/* Type & Price */}
              <div className="py-2 text-left">
                <p className="text-lg text-gray-600">{projects.type}</p>
                <p className="text-gray-600 text-base">Price on Request</p>
              </div>

              {/* Enquire */}
              <Link
                  to={`/projectdetail/${projects.id}`}
                  onClick={() => window.scrollTo(0, 0)}
                >
              <div className="group flex items-center gap-1 pt-3 text-gray-600 cursor-pointer hover:text-red-500 w-fit">
                
                  <p className="text-lg">Enquire Now</p>
                  <FaChevronRight className="mt-0.5 transition-transform group-hover:translate-x-1" />
                
              </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectPage;