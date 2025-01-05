import React from "react";
import { FaGithub, FaLink } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const ProjectDetails = () => {
  const project = useLoaderData();

  return (
    <div className="min-h-screen bg-gray-900 text-white p-3">
      <div className="px-3">
        {/* Project Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#D2B48C]">{project.name}</h1>
          <p className="mt-4 text-lg text-gray-400">{project.description}</p>
        </div>

        {/* Project Details Section */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Left Side: Project Image */}
          <div className="rounded-lg shadow-lg overflow-hidden">
            <img src={project.image} alt={project.name} />
          </div>

          {/* Right Side: Project Details */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-[#D2B48C]">
                Tech Stack
              </h2>
              <p className="text-lg text-gray-400">{project.techStack}</p>
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-[#D2B48C]">
                Description
              </h2>
              <p className="text-lg text-gray-400">{project.description}</p>
            </div>

            {/* Live Link & GitHub Link */}
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold text-[#D2B48C]">Links</h2>
              <div className="flex space-x-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn bg-[#D2B48C] text-black hover:bg-[#C0A276] flex items-center space-x-2"
                >
                  <FaLink />
                  <span>Live Link</span>
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn bg-[#D2B48C] text-black hover:bg-[#C0A276] flex items-center space-x-2"
                >
                  <FaGithub />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

            {/* Challenges Faced */}
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-[#D2B48C]">
                Challenges Faced
              </h2>
              <p className="text-lg text-gray-400">
                {project.challenges ||
                  "No major challenges faced during the project."}
              </p>
            </div>

            {/* Future Improvements */}
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-[#D2B48C]">
                Future Improvements
              </h2>
              <p className="text-lg text-gray-400">
                {project.futureImprovements ||
                  "This project is continuously evolving, and improvements are planned for better functionality."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
