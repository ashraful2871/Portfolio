import { createBrowserRouter } from "react-router-dom";
import MainLAyout from "../Layout/MainLAyout";
import Home from "../pages/Home";
import ProjectDetails from "../pages/ProjectDetails";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import AboutMe from "../components/AboutMe";
import ContactMe from "../components/ContactMe";
import Education from "../components/Education";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLAyout></MainLAyout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/projectDetails/:id",
        element: <ProjectDetails></ProjectDetails>,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/projectDetails/${params.id}`),
      },
      {
        path: "/skills",
        element: <Skills></Skills>,
      },
      {
        path: "/projects",
        element: <Projects></Projects>,
      },
      {
        path: "/about",
        element: <AboutMe></AboutMe>,
      },
      {
        path: "/contact",
        element: <ContactMe></ContactMe>,
      },
      {
        path: "/education",
        element: <Education></Education>,
      },
    ],
  },
]);
export default router;
