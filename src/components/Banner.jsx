import React from "react";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaDownload,
} from "react-icons/fa";

const Banner = () => {
  const cvLink =
    "https://docs.google.com/document/d/1pf7ihQKirCDFx_9DdEqkvV57aCxJP6u1hv_4_-ADtY8/edit?usp=sharing";
  return (
    <div className="hero min-h-screen bg-black text-neutral-content">
      <div className="hero-content flex-col lg:flex-row-reverse w-full justify-evenly">
        {/* Right Section (Image and Icons) */}
        <div className="relative text-center">
          <img
            src="https://i.ibb.co.com/PT4mYTm/PXL-20230106-171208543-01-removebg.png"
            alt="Person"
            className="h-[300px] sm:h-[500px] md:h-[600px] mx-auto lg:h-[600px] object-contain"
          />
          {/* Social Media Links */}
          <div className="hidden md:block">
            <div className=" flex justify-center space-x-4 mt-4">
              <a
                href="https://github.com/ashraful2871"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-[#DAC6A8] hover:text-white text-2xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/ashraful-islam-1ba47b318/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-[#DAC6A8] hover:text-white text-2xl" />
              </a>
              <a
                href="https://www.facebook.com/ashraful2871"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-[#DAC6A8] hover:text-white text-2xl" />
              </a>

              <a
                href="https://www.instagram.com/ashrafulislam2871/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-[#DAC6A8] hover:text-white text-2xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Left Section (Text Content) */}
        <div className="max-w-lg">
          <p className="text-sm font-medium text-[#D2B48C]">
            ✦ Starting My Journey in Content Creation
          </p>
          <h1 className="text-4xl font-bold leading-tight mt-4 text-[#DAC6A8]">
            Building Websites with Passion and Purpose
          </h1>
          <p className="text-sm text-gray-400 mt-4 text-[#DAC6A8]">
            As a web developer, I’m focused on creating clean, user-friendly
            websites that deliver seamless experiences. I’m constantly learning
            new skills to craft responsive and interactive web solutions that
            bring ideas to life.
          </p>
          <div className=" block md:hidden">
            <div className=" flex space-x-4 mt-4">
              <a
                href="https://github.com/ashraful2871"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-[#DAC6A8] hover:text-white text-2xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/ashraful-islam-1ba47b318/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-[#DAC6A8] hover:text-white text-2xl" />
              </a>
              <a
                href="https://www.facebook.com/ashraful2871"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-[#DAC6A8] hover:text-white text-2xl" />
              </a>

              <a
                href="https://www.instagram.com/ashrafulislam2871/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-[#DAC6A8] hover:text-white text-2xl" />
              </a>
            </div>
          </div>
          <Link
            to={cvLink}
            target="_blank"
            className="btn bg-[#D2B48C] text-black border-none hover:bg-[#C0A276] mt-6"
          >
            Download CV <FaDownload />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
