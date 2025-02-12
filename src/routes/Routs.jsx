import { createHashRouter } from "react-router-dom";
import MainLAyout from "../Layout/MainLAyout";
import Home from "../pages/Home";
import ProjectDetails from "../pages/ProjectDetails";
const router = createHashRouter([
  {
    path: "/",
    element: <MainLAyout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/projectDetails/:id",
        element: <ProjectDetails />,
      },
    ],
  },
]);

export default router;
