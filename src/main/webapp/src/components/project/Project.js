import React from "react";
import ProjectCard from "./ProjectCard";
import WriteBtn from "../../components/common/button/WriteBtn";

const Project = () => {
  return (
    <div
      id="projectContainer"
      className="bg-dark text-white flex justify-center pl-5 min-h-screen"
    >
      {/* 글쓰기 버튼 */}
      <WriteBtn category="프로젝트"></WriteBtn>
      <div
        className="container grid w-7/12 gap-7 mt-10
      grid-cols-1
      md:grid-cols-2
      xl:grid-cols-3
      "
      >
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default Project;
