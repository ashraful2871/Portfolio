import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const MainLAyout = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-5 p-2">
      <Navbar></Navbar>

      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLAyout;
