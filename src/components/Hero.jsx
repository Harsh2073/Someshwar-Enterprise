import React from "react";
import heroImg from "../assets/heroImg.jpg";
import { Building2, Star, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      id="/"
      className="relative w-full min-h-screen pt-20 overflow-hidden"
    >
      {/* Background Image */}

      <img
        src={heroImg}
        alt="Construction site"
        className="absolute inset-0 w-full h-full object-cover pt-20"
      />
      {/* Optional Overlay */}
      {/* Adjusted overlay for better readability on smaller screens */}

      <div className="absolute inset-0 bg-black/10 lg:bg-linear-to-r from-black/50 via-black/10 to-transparent" />
      {/* Content */}
      <div className="relative z-10 flex flex-col h-full text-white p-6 md:p-10 lg:p-20 pt-32 lg:pt-40 max-w-lg md:max-w-2xl lg:max-w-3xl gap-8 lg:gap-10 text-left justify-center min-h-[calc(100vh-80px)]">
        <div className="inline-block bg-red-600/20 w-fit px-3 py-1 rounded-full border border-red-600">
          <p className="text-white font-regular text-sm md:text-lg flex items-center gap-1">
            <Star size={15} />
            30+ Years of Excellence in Construction
          </p>
        </div>

        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-3">
            Building Dreams Into Reality{" "}
          </h1>

          <p className="text-base md:text-lg lg:text-xl">
            From residential complexes to commercial projects, we deliver
            quality, safety, and innovation in every build.
          </p>
        </div>

        <div>
          <Link to="/projectpage" onClick={() => window.scrollTo(0, 0)}>
            <button className="bg-white text-red-500 rounded-xl py-2 px-6 hover:text-black cursor-pointer font-semibold transition duration-300">
              View Our Work
            </button>
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
          <div className="flex gap-3 items-center">
            <div className="bg-red-500 w-fit p-3 rounded-lg h-fit shrink-0">
              <Building2 size={30} className="w-6 h-6 md:w-8 md:h-8" />
            </div>

            <div className="text-lg">
              <h3 className="font-bold text-2xl md:text-3xl">15+</h3>
              <p className="text-gray-200">Projects Completed</p>
            </div>
          </div>

          <div className="flex gap-3 items-center">
            <div className="bg-red-500 w-fit p-3 rounded-lg h-fit shrink-0">
              <Users size={30} className="w-6 h-6 md:w-8 md:h-8" />
            </div>

            <div className="text-lg">
              <h3 className="font-bold text-2xl md:text-3xl">100+</h3>
              <p className="text-gray-200">Happy Members</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
