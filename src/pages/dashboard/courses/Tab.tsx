import React from "react";
import { motion } from "framer-motion";

interface ITab {
  isActive: boolean;
  setActive: () => void;
  label: string;
}

const Tab: React.FC<ITab> = ({ isActive, setActive, label }) => {
  return (
    <button
      onClick={setActive}
      className={` ${
        isActive ? " " : "text-gray-500"
      } text-center w-full rounded py-1 relative hover:bg-dark-3 duration-300 transition-all`}>
      <span className="relative z-10">{label}</span>
      {isActive && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute  inset-0 z-0 bg-dark-1"></motion.span>
      )}
    </button>
  );
};

export default Tab;
