import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaDownload,
} from "react-icons/fa";

const Banner = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const cvLink =
    "https://drive.google.com/file/d/1tizXuiyUe_5kzQYO0KNCPsmSiPbcZrnj/view?usp=sharing";
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
      className="hero min-h-screen bg-black text-neutral-content"
    >
      <div className="hero-content flex-col lg:flex-row-reverse w-full justify-evenly">
        {/* Right Section (Image and Icons) */}
        <div className="relative text-center">
          <img
            src="https://i.ibb.co.com/zhYdQPqr/ash-propfollio-image-removebg.png"
            alt="Person"
            className="h-[300px] sm:h-[500px] md:h-[600px] mx-auto lg:h-[600px] p-3 object-cover rounded-full border-4 border-[#DAC6A8]"
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
            </div>
          </div>
        </div>

        {/* Left Section (Text Content) */}
        <div className="max-w-lg">
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-sm font-medium text-[#D2B48C]"
          >
            ✦ Starting as a web developer is an exciting and rewarding journey
            ahead.
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="text-4xl font-bold leading-tight mt-4 text-[#DAC6A8]"
          >
            Building Websites with Passion and Purpose
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            className="text-sm text-gray-400 mt-4 text-[#DAC6A8]"
          >
            As a web developer, I’m focused on creating clean, user-friendly
            websites that deliver seamless experiences. I’m constantly learning
            new skills to craft responsive and interactive web solutions that
            bring ideas to life.
          </motion.p>
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
            </div>
          </div>
          <Link to={cvLink} target="_blank">
            <motion.button
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
              className="btn bg-[#D2B48C] text-black border-none hover:bg-[#C0A276] mt-6"
            >
              Download CV <FaDownload />
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Banner;
