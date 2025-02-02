import React from "react";

const Skills = () => {
  const skills = [
    {
      name: "HTML",
      description:
        "Developing structured, semantic, and accessible web content using HTML",
      level: 90,
      logo: "https://i.ibb.co.com/vJBWRrt/html-logo-removebg-preview.png",
    },
    {
      name: "CSS",
      description:
        "Designing visually appealing, responsive, and user-friendly interfaces with CSS.",
      level: 80,
      logo: "https://i.ibb.co.com/Ldsk77X/icons8-css-500.png",
    },
    {
      name: "Tailwind CSS ",
      description:
        "Designing responsive, scalable, and highly customizable user interfaces using utility-first CSS framework",
      level: 85,
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    },
    {
      name: "JavaScript",
      description:
        "Creating dynamic, interactive, and feature-rich web applications with JavaScript.",
      level: 75,
      logo: "https://i.ibb.co.com/RPwF750/icons8-js-480.png",
    },
    {
      name: "React",
      description:
        "Building scalable, interactive user interfaces with React for seamless web experiences.",
      level: 80,
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    },
    {
      name: "MongoDB",
      description:
        "Managing flexible, scalable data storage with MongoDB for efficient web applications.",
      level: 70,
      logo: "https://i.ibb.co.com/MpX5G9r/mongodb-svgrepo-com-removebg-preview.png",
    },
  ];

  return (
    <div className="bg-black text-neutral-content py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#D2B48C]">My Skills</h2>
          <p className="text-gray-400 text-lg mt-4">
            Here’s a showcase of my core skills and expertise, each vital for
            delivering impactful projects.
          </p>
        </div>

        {/* Skills Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="card bg-gray-800 text-neutral-content shadow-lg p-6 rounded-lg"
            >
              {/* Skill Logo */}
              <div className="flex justify-center mb-4">
                <img
                  src={skill.logo}
                  alt={`${skill.name} logo`}
                  className="w-16 h-16"
                />
              </div>
              {/* Skill Info */}
              <h3 className="text-xl font-bold text-[#D2B48C] mb-2 text-center">
                {skill.name}
              </h3>
              <p className="text-gray-400 mb-4 text-center flex-grow">
                {skill.description}
              </p>
              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium text-gray-400">
                    Progress
                  </span>
                  <span className="text-sm text-gray-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-4">
                  <div
                    className="bg-[#D2B48C] h-4 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
