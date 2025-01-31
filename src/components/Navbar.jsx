import React from "react";
import { FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const cvLink =
    "https://drive.google.com/file/d/1tizXuiyUe_5kzQYO0KNCPsmSiPbcZrnj/view?usp=sharing";

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const links = (
    <>
      <li>
        <button
          onClick={() => scrollToSection("about")}
          className="text-sm font-medium text-[#DAC6A8] hover:text-white"
        >
          ABOUT
        </button>
      </li>
      <li>
        <button
          onClick={() => scrollToSection("skills")}
          className="text-sm font-medium text-[#DAC6A8] hover:text-white"
        >
          SKILLS
        </button>
      </li>
      <li>
        <button
          onClick={() => scrollToSection("projects")}
          className="text-sm font-medium text-[#DAC6A8] hover:text-white"
        >
          PROJECTS
        </button>
      </li>
      <li>
        <button
          onClick={() => scrollToSection("education")}
          className="text-sm font-medium text-[#DAC6A8] hover:text-white"
        >
          EDUCATION
        </button>
      </li>
      <li>
        <button
          onClick={() => scrollToSection("contact")}
          className="text-sm font-medium text-[#DAC6A8] hover:text-white"
        >
          CONTACT
        </button>
      </li>
    </>
  );

  return (
    <div className="navbar sticky -top-1 mx-w-[1320px] mx-auto z-40 bg-black">
      <div className="navbar-start">
        <Link to="/" className="text-[#DAC6A8] text-3xl font-bold">
          Ash
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <Link to={cvLink} target="_blank">
          <button className="btn bg-[#D2B48C] text-black border-none hover:bg-[#C0A276]">
            Download CV <FaDownload />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
