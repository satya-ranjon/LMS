import React, { ReactNode } from "react";
import DashBoardNavbar from "../components/dashboard/navbar/DashBoardNavbar";

interface AppWrapperProps {
  children: ReactNode;
}

const DashBoardWrapper: React.FC<AppWrapperProps> = ({ children }) => {
  return (
    <div className="bg-dark-3 md:py-5">
      <div className="container mx-auto md:px-5">
        <DashBoardNavbar />
        {children}
      </div>
    </div>
  );
};

export default DashBoardWrapper;
