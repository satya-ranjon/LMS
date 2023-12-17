import React from "react";
import DashBoardNavbar from "../components/dashboard/navbar/DashBoardNavbar";
import { Outlet } from "react-router-dom";

const DashBoardWrapper: React.FC = () => {
  return (
    <div className="bg-dark-3 md:py-5">
      <div className="container mx-auto md:px-5">
        <DashBoardNavbar />
        <Outlet />
      </div>
    </div>
  );
};

export default DashBoardWrapper;
