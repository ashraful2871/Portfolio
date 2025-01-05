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
      <Banner></Banner>
      <div className="max-w-sm  md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto">
        <hr />
      </div>
      <AboutMe></AboutMe>
      <div className="max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto">
        <hr />
      </div>
      <Skills></Skills>
      <div className="max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto">
        <hr />
      </div>
      <div>
        <Projects></Projects>
      </div>
      <div className="max-w-sm  md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto">
        <hr />
      </div>
      <Education></Education>
      <div className="max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto">
        <hr />
      </div>
      <div>
        <ContactMe></ContactMe>
      </div>
    </div>
  );
};

export default Home;
