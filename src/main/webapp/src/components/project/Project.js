import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import WriteBtn from "../../components/common/button/WriteBtn";
import axios from "axios";
import ProjectLoading from "./ProjectLoading";

const Project = () => {
  const [projectList, setProjectList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8080/project/getProjectListAll")
      .then((response) => {
        setProjectList(response.data);

        console.log("projectList", response.data);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setIsLoading(true);
      });
  }, []);

  return (
    <>
      {!isLoading && <ProjectLoading />}
      <div
        id="projectContainer"
        className="bg-dark text-white flex justify-center pl-5 min-h-screen"
      >
        {/* 글쓰기 버튼 */}
        <WriteBtn category="프로젝트"></WriteBtn>
        <div
          className="container grid w-9/12 gap-7 mt-10
      grid-cols-1
      md:grid-cols-2
      xl:grid-cols-2
      "
        >
          {projectList &&
            [...projectList].reverse().map((item) => {
              return (
                <ProjectCard
                  key={item.id}
                  title={item.title}
                  detail={item.detail}
                  type={item.type}
                  startDate={item.startDate}
                  endDate={item.endDate}
                  img={item.img}
                  notionPageId={item.notionPageId}
                  githubAddress={item.githubAddress}
                  deployAddress={item.deployAddress}
                />
              );
            })}
        </div>
      </div>
      <div className="w-full h-[200px]"></div>
    </>
  );
};

export default Project;
