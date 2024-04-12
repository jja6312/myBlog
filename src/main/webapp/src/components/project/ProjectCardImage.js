import React from "react";
import ProjectCardHover from "./ProjectCardHover";

const ProjectCardImage = ({ type, img, startDate, endDate }) => {
  return (
    <div className="relative group flex flex-col justify-center w-full h-3/6 ">
      <div className="w-full h-full overflow-hidden flex items-center bg-dark">
        <ProjectCardHover
          type={type}
          startDate={startDate}
          endDate={endDate}
        ></ProjectCardHover>

        <img
          src={img}
          alt="project1"
          className="object-cover w-full group-hover:scale-125 transition duration-300"
        />
      </div>
    </div>
  );
};

export default ProjectCardImage;
