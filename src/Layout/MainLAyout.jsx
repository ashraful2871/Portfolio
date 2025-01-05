import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const MainLAyout = () => {
  return (
    <div className="container mx-auto mt-5">
      <Navbar></Navbar>

      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLAyout;
