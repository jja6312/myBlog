import React from "react";

const ProjectCardImage = () => {
  return (
    <div className="relative group flex flex-col justify-center w-full h-3/6 ">
      <div className="w-full h-full overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center z-20 transition duration-300 gap-4
        opacity-0 group-hover:opacity-100
        "
        >
          <span className="text-white text-4xl">개인 프로젝트</span>
          <span className="text-white text-2xl">개발기간</span>
          <span className="text-white text-xl">2024-04-04 ~ 2024-04-04</span>
        </div>

        <img
          src="/image/project/project1.jpg"
          alt="project1"
          className="object-cover w-full h-full group-hover:scale-125 transition duration-300"
        />
      </div>
    </div>
  );
};

export default ProjectCardImage;
