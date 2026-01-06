import React, { useCallback } from "react";
import { Mail, Phone } from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const QUICK_LINKS = [
  { label: "About Us", id: "about" },
  { label: "Our Expertises", id: "expertises" },
  { label: "Projects", id: "project" },
  { label: "Contact", id: "contact" },
];

const EXPERTISES = [
  "Residential Construction",
  "Commercial Projects",
  "Project Management",
];

const Footer = () => {
  const scrollToSection = useCallback((id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <footer className="bg-red-600 text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-10 border-b border-white pb-6 text-left">
          {/* Brand */}
          <div className="md:w-1/4">
          <div className="mb-3">
            <div className="flex items-center gap-1">
                <img 
                src="/src/assets/Logo.png"
                alt="logo"
                className="w-12 h-12 md:w-16 md:h-16"
                />
                <h1 className="font-Charm text-5xl font-bold">Sun</h1>
            </div>
            <p className="font-semibold">Someshwar Enterprise</p>
          </div>
            <p className="mb-4 text-sm leading-relaxed">
              Building the future of India with quality, innovation, and
              sustainable construction practices.
            </p>

            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Facebook"
                className="bg-white text-black p-1 rounded-md text-lg hover:scale-105 transition opacity-90"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="bg-white text-black p-1 rounded-md text-lg hover:scale-105 transition opacity-90"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer Navigation">
            <h2 className="mb-3 font-bold">Quick Links</h2>
            <ul className="space-y-1">
              {QUICK_LINKS.map((link) => (
                <li
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="cursor-pointer hover:text-[#0b1c2d] transition"
                >
                  {link.label}
                </li>
              ))}
            </ul>
          </nav>

          {/* Expertises */}
          <div>
            <h2 className="mb-3 font-bold">Expertises</h2>
            <ul className="space-y-1">
              {EXPERTISES.map((item, index) => (
                <li
                  key={index}
                  onClick={() => scrollToSection("expertises")}
                  className="cursor-pointer hover:text-[#0b1c2d] transition"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <address className="not-italic">
            <h2 className="mb-3 font-bold">Contact Info</h2>
            <p className="flex items-center gap-2 mb-1">
              <Phone size={18} />
              <span>+91 93772 21716</span>
            </p>
            <p className="flex items-center gap-2 mb-1">
              <Phone size={18} />
              <span>+91 93271 68439</span>
            </p>
            <p className="flex items-center gap-2">
              <Mail size={18} />
              <span>sun@gmail.com</span>
            </p>
          </address>
        </div>

        {/* Bottom */}
        <div className="pt-4 text-sm opacity-80 text-left">
          © 2025 Sun, Someshwar Enterprise. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
