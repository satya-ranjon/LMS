import React, { ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface NavBarLinkProps {
  to: string;
  children?: ReactNode;
}

const NavBarLink: React.FC<NavBarLinkProps> = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "border-lime-400 text-lime-400 border-[2px] rounded-xl p-1"
          : "border-transparent text-zinc-500 border-[2px] rounded-xl p-1 hover:border-lime-500 hover:text-lime-500 duration-300 transition-colors"
      }>
      {children}
    </NavLink>
  );
};

export default NavBarLink;
