import React from "react";
import { FaDownload } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const cvLink =
    "https://docs.google.com/document/d/1pf7ihQKirCDFx_9DdEqkvV57aCxJP6u1hv_4_-ADtY8/edit?usp=sharing";
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className="text-sm font-medium text-[#DAC6A8] hover:text-white"
        >
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className="text-sm font-medium text-[#DAC6A8] hover:text-white"
        >
          ABOUT
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/skills"
          className="text-sm font-medium text-[#DAC6A8] hover:text-white"
        >
          SKILLS
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/projects"
          className="text-sm font-medium text-[#DAC6A8] hover:text-white"
        >
          PROJECTS
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/education"
          className="text-sm font-medium text-[#DAC6A8] hover:text-white"
        >
          EDUCATION
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className="text-sm font-medium text-[#DAC6A8] hover:text-white"
        >
          CONTACT
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar sticky -top-1 container mx-auto z-40 bg-black">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className=" text-[#DAC6A8] text-3xl font-bold">
          Ash
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end">
        <Link
          to={cvLink}
          target="_blank"
          className="btn bg-[#D2B48C] text-black border-none hover:bg-[#C0A276] mt-6"
        >
          Download CV <FaDownload />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
