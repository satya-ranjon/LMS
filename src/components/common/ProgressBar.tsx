import React from "react";

interface IProgressBar {
  progress: number;
}

const ProgressBar: React.FC<IProgressBar> = ({ progress }) => {
  return (
    <>
      <div className="w-full flex justify-between mb-1 text-sm text-light-1">
        <span>Progress</span>
        <span>{progress}%</span>
      </div>
      <div className="w-full bg-[#484848] overflow-hidden rounded-md">
        <div className={`w-[${progress}%] btn-gradient-1`}></div>
      </div>
    </>
  );
};

export default ProgressBar;
