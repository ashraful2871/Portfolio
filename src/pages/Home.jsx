import React from "react";
import Banner from "../components/Banner";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Education from "../components/Education";
import ContactMe from "../components/ContactMe";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <div className="space-y-3 p-3">
      <Banner />
      <hr className="max-w-7xl mx-auto" />
      <div id="about">
        <AboutMe />
      </div>
      <hr className="max-w-7xl mx-auto" />
      <div id="skills">
        <Skills />
      </div>
      <hr className="max-w-7xl mx-auto" />
      <div id="projects">
        <Projects />
      </div>
      <hr className="max-w-7xl mx-auto" />
      <div id="education">
        <Education />
      </div>
      <hr className="max-w-7xl mx-auto" />
      <div id="contact">
        <ContactMe />
      </div>
    </div>
  );
};

export default Home;
