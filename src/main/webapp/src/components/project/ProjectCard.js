import React from "react";
import ProjectCardImage from "./ProjectCardImage";
import ProjectCardInfo from "./ProjectCardInfo";

const ProjectCard = () => {
  return (
    <div className="flex flex-col items-center justify-between w-full h-[600px] rounded border bg-black border-white p-5">
      <ProjectCardImage></ProjectCardImage>
      <ProjectCardInfo></ProjectCardInfo>
      <div className="w-full h-[10%] py-2">
        <div className="flex justify-center items-center w-full h-full bg-blue-500 rounded cursor-pointer hover:bg-blue-700 transition duration-150">
          <span className="">자세히 보기</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
