import React from "react";

const Education = () => {
  const qualifications = [
    // {
    //   degree: "Higher Secondary Certificate (HSC) in Arts",
    //   institution: "Mohammadpur Model Collage, Dhaka",
    //   duration: "2019-2021",
    //   description:
    //     "Focused on humanities and social sciences, building foundational skills in literature, history, and sociology.",
    // },

    {
      degree: "Bachelor of Arts in Sociology",
      institution: "Dhaka College",
      duration: "2022 - Present",
      description:
        "Exploring social dynamics, cultural studies, and research methods. Actively engaging in projects and research to understand societal structures.",
    },
  ];

  return (
    <div className="bg-black text-neutral-content py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#D2B48C]">
            Educational Qualifications
          </h2>
          <p className="text-gray-400 text-lg mt-4">
            A glimpse into my academic journey and certifications that shaped my
            expertise.
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {qualifications.map((qualification, index) => (
            <div
              key={index}
              className="card bg-gray-800 text-neutral-content shadow-lg p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold text-[#D2B48C] mb-2">
                {qualification.degree}
              </h3>
              <p className="text-gray-400 text-sm mb-1 font-semibold">
                {qualification.institution}
              </p>
              <p className="text-gray-500 text-sm mb-4 italic">
                {qualification.duration}
              </p>
              <p className="text-gray-400">{qualification.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
