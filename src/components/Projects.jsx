import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";
import axios from "axios";

// const projects = [

//   {
//     id: 1,
//     name: "Car Rent",
//     image: "https://i.ibb.co.com/hWf974X/car.jpg",
//     techStack: "React, Node.js, MongoDB, Express",
//     description:
//       "A user-friendly platform for browsing, booking, and managing car rentals with real-time availability",
//     liveLink: "#",
//     githubLink: "#",
//   },
//   {
//     id: 2,
//     name: "Game Review",
//     image:
//       "https://i.ibb.co.com/QHqBy4X/Purple-Blue-Modern-Game-Review-Youtube-Thumbnail.png",
//     techStack: "React, Node.js, MongoDB, Express",
//     description:
//       "A platform for reviewing and rating video games, allowing users to share their experiences, read reviews, and discover new games based on ratings.",
//     liveLink: "#",
//     githubLink: "#",
//   },
//   {
//     id: 3,
//     name: "Solo Sphere",
//     image:
//       "https://i.ibb.co.com/sFHZvWB/Purple-and-Black-Futuristic-Artificial-Intelligence-Technology-Banner-1.png",
//     techStack: "React, Node.js, MongoDB, Express",
//     description:
//       "This platfrom any one  can post for job and anyone apply in a job ",
//     liveLink: "#",
//     githubLink: "#",
//   },
// ];

const Projects = () => {
  const [projects, setProjects] = useState();
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/projects`)
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      });
  }, []);
  return (
    <div className="py-16 bg-black text-neutral-content">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#D2B48C]"> My Projects</h2>
        <p className="text-gray-400 text-lg mt-4">
          Here’s a showcase of my projects.
        </p>
      </div>
      {/* <h2 className="text-4xl font-bold text-center text-[#D2B48C] mb-12">
        My Projects
      </h2>
      <p className="text-gray-400 text-lg mt-4">
        Here’s a showcase of my projects.
      </p> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {projects?.map((project) => (
          <div
            key={project._id}
            className="card bg-black shadow-lg rounded-lg overflow-hidden"
          >
            <figure>
              {" "}
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-52"
              />
            </figure>
            <div className="card-body p-6">
              <h3 className="text-2xl font-bold text-[#D2B48C]">
                {project.name}
              </h3>
              <p className="text-sm text-gray-400">{project.description}</p>
              <div className="flex justify-between items-center mt-4">
                <Link
                  to={`/projectDetails/${project._id}`}
                  className="btn btn-outline text-[#D2B48C] hover:bg-[#C0A276] flex items-center space-x-2"
                >
                  <span>View More</span>
                  <FaExternalLinkAlt />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
