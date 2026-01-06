import React from "react";
import { MapPin, Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { projects } from "../data";

const Projects = () => {
  return (
    <section id="project" className="bg-gray-50 py-12 md:py-20 lg:py-28">
      <div className="px-4 md:px-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="items-center mx-auto mb-10 md:mb-16 flex flex-col gap-3 md:gap-4">
          <h1 className="bg-red-100 text-red-500 rounded-2xl px-4 py-1 w-fit font-semibold text-sm">
            Our Work
          </h1>

          <h2 className="font-semibold text-2xl md:text-3xl">
            Featured Projects
          </h2>

          <p className="text-gray-600 text-center max-w-xl text-base">
            Showcasing our commitment to excellence through landmark projects
            across Ahmedabad
          </p>
        </div>
        {/* Projects List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.slice(0, 4).map((project, index) => (
            <Link
              key={index}
              to={`/projectdetail/${project.id}`}
              onClick={() => window.scrollTo(0, 0)}
            >
              <div className="group cursor-pointer hover:border-2 hover:border-red-500 rounded-xl transition duration-300">
                <div className="relative overflow-hidden rounded-xl shadow-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 md:h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Fixed typo in original: 'bg-linear-to-t' is not a standard Tailwind class. Assuming 'bg-gradient-to-t' */}

                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/15 to-transparent" />

                  <div className="absolute top-4 right-4">
                    <div className="bg-red-100 hover:bg-red-500 text-red-500 hover:text-white rounded-md py-1 px-2 text-xs font-medium transition duration-300">
                      {project.category}{" "}
                    </div>
                  </div>

                  <div className="absolute bottom-0 right-0 left-0 text-white p-4 md:p-6 text-left">
                    <h3 className="mb-1 md:mb-2 font-bold text-lg md:text-xl">
                      {project.title}
                    </h3>

                    <p className="mb-2 text-sm text-gray-200 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex justify-between text-xs md:text-sm pt-2">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 md:w-4 md:h-4" />
                        <span>{project.location}</span>
                      </div>

                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                        <span>{project.year}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {/* View More Button */}
        <div className="flex justify-center mt-8 md:mt-12">
          <Link to="/projectpage" onClick={() => window.scrollTo(0, 0)}>
            <button className="group cursor-pointer flex items-center text-red-500 font-semibold hover:text-red-600 transition duration-300">
              View More Projects
              <ArrowRight className="w-5 h-5 font-semibold group-hover:translate-x-1 transition-transform duration-300 pl-1" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
