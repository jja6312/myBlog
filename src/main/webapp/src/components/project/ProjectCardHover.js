import React from "react";

const ProjectCardHover = ({ startDate, endDate, type }) => {
  return (
    <div
      className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center z-20 transition duration-300 gap-4
        opacity-0 group-hover:opacity-100
        "
    >
      <span className="text-white text-4xl">{type}</span>
      <span className="text-white text-2xl">개발기간</span>
      <span className="text-white text-xl">
        {startDate} ~ {endDate === "" ? "진행중" : endDate}
      </span>
    </div>
  );
};

export default ProjectCardHover;
