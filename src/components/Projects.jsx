import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Loading from "./Loading";

const Projects = () => {
  const { data: projects = [], isLoading } = useQuery({
    queryKey: ["project"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/projects`
      );
      return data;
    },
  });
  console.log(projects);
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="py-16 bg-black text-neutral-content">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#D2B48C]"> My Projects</h2>
        <p className="text-gray-400 text-lg mt-4">
          Here’s a showcase of my projects.
        </p>
      </div>
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
