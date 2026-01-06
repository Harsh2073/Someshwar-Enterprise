import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Import icons for mobile menu
import { NavLink, Link } from "react-router-dom";

import Logo from "/src/assets/Logo.png";

const navLinks = [
  { name: "Home", to: "/", state: { scrollTo: "/" } },
  { name: "About", to: "/", state: { scrollTo: "about" } },
  { name: "Expertises", to: "/", state: { scrollTo: "expertises" } },
  { name: "Project", to: "/", state: { scrollTo: "project" } },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white fixed w-full top-0 px-4 md:px-8 py-3 z-50 shadow-md">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-left flex items-center gap-2">
            <Link
              to="/"
              state={{ scrollTo: "/" }}
              className="flex items-center"
            >
              <img
                src={Logo}
                alt="logo"
                className="w-12 h-12 md:w-16 md:h-16"
              />
              {/* Adjusted size */}
              <div>
                <h1 className="text-red-500 text-3xl md:text-5xl font-Charm font-bold leading-none">
                  Sun
                </h1>

                <h2 className="text-red-500 text-xs md:text-base font-medium leading-none">
                  Someshwar Enterprise
                </h2>
              </div>
            </Link>
          </div>
          {/* Desktop Menu */}
          <div className="hidden lg:flex justify-between gap-8 text-lg text-gray-700 font-semibold">
            {navLinks.map(({ name, to, state }, i) => (
              <Link
                key={i}
                to={to}
                state={state}
                className="relative group transition hover:text-red-500"
              >
                {name}

                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-red-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>
          {/* Desktop Contact Button */}
          <div className="hidden lg:block">
            <Link
              to="/"
              state={{ scrollTo: "contact" }}
              className="cursor-pointer hover:text-red-500"
            >
              {/* NOTE: Assuming 'btn' is a pre-defined style, otherwise text/padding may need explicit Tailwind classes */}

              <button className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600 transition duration-300 cursor-pointer">
                Contact Us
              </button>
            </Link>
          </div>
          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-red-500 p-2 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu Panel */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col space-y-3 p-4 bg-gray-50 rounded-lg shadow-inner">
          {navLinks.map(({ name, to, state }, i) => (
            <Link
              key={i}
              to={to}
              state={state}
              onClick={() => setIsOpen(false)} // Close menu on click
              className="text-gray-700 hover:text-red-500 font-medium py-2 border-b border-gray-200 last:border-b-0"
            >
              {name}
            </Link>
          ))}
          {/* Mobile Contact Button */}
          <Link
            to="/"
            state={{ scrollTo: "contact" }}
            onClick={() => setIsOpen(false)}
            className="mt-4 pt-4 border-t border-gray-300"
          >
            <button className="w-full bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600 transition duration-300">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
