import React from "react";
import DashBoardNavbar from "../components/dashboard/navbar/DashBoardNavbar";
import { Outlet } from "react-router-dom";
import Container from "../components/common/Container";

const DashBoardWrapper: React.FC = () => {
  return (
    <div className="bg-dark-3 md:py-5">
      <Container>
        <DashBoardNavbar />
        <Outlet />
      </Container>
    </div>
  );
};

export default DashBoardWrapper;
