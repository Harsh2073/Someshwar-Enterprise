import React, { useState, useEffect } from "react";
import { CheckCircle } from "lucide-react";
import { useParams } from "react-router-dom";
import { projects } from "../data";
import { MdLocationOn } from "react-icons/md";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((item) => item.id === Number(id));

  if (!project) {
    return (
      <section className="pt-32 pb-20 px-8 text-center">
        <p className="text-red-600 text-xl font-semibold">
          Project not found!
        </p>
      </section>
    );
  }

  const images = project?.images?.length ? project.images : [project.image];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="w-full overflow-hidden">
      {/* ================= HERO ================= */}
      <div className="relative w-screen h-screen">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`slide-${index}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-black/20" />

        <div className="relative z-10 h-full flex items-end">
          <div className="px-6 md:px-24 pb-16 max-w-3xl text-white text-left">
            <h1 className="text-3xl md:text-5xl font-semibold mb-4">
              {project.title}
            </h1>

            <div className="flex items-center gap-2 text-gray-200 mb-6">
              <div className="flex items-center gap-1">
                <MdLocationOn />
                <span>{project.location}</span>
              </div>
              <span className="w-px h-4 bg-gray-400" />
              <span>{project.status}</span>
            </div>

            <p className="text-lg md:text-2xl mb-6 opacity-90">
              {project.type}
            </p>

            <button className="bg-white text-black px-6 py-3 text-sm font-medium uppercase tracking-wide hover:bg-gray-100 transition cursor-pointer">
              Enquire Now
            </button>
          </div>
        </div>
      </div>

      {/* ================= INFO ================= */}
      <div className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-24">
          <h2 className="text-3xl md:text-5xl font-extralight leading-tight">
            Designed for Life, Work, and <br />
            <span className="text-gray-500">Everything Between</span>
          </h2>

          <p className="mt-10 text-xl font-light text-justify">
            {project.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-14">
            {project.specification.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <p className="text-lg font-medium">{item.name}</p>
                <p className="text-gray-600 mt-1">{item.subhead}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= GALLERY ================= */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl mb-2">Gallery</h2>
          <p className="text-gray-500 mb-8">
            See what the space looks like
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {project.images.map((item, index) => (
              <img
                key={index}
                src={item}
                alt={`gallery-${index}`}
                className="w-full h-64 object-cover rounded-lg"
              />
            ))}
          </div>
        </div>
      </div>

      {/* ================= AMENITIES ================= */}
      <div className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-24">
          <h2 className="text-4xl mb-12">Amenities</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {project.amenities.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <span className="text-4xl mb-3">{item.icon}</span>
                <span className="text-lg text-gray-600">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= CONNECTIVITY ================= */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-24 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-light mb-8 text-left">
              Why {project.title}
            </h2>

            <ul className="space-y-4">
              {project.connectivity.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-lg text-gray-700"
                >
                  <CheckCircle className="text-red-500 mt-1" size={18} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full h-80 rounded-lg overflow-hidden">
            <iframe
              title="Project Location"
              src={project.mapaddress}
              className="w-full h-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
