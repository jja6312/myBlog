import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const ProjectCardInfo = () => {
  return (
    <div className="flex flex-col justify-between items-center w-full h-2/6 p-4 gap-4">
      <span className="text-white text-2xl font-semibold">프로젝트 이름</span>
      <span className="text-white">
        이프로젝트는 1922년 영국에서 시작되어 이프로젝트를 본사람은 영원히
        행복한 ...
      </span>
      <div className="flex w-full justify-center gap-4">
        <FontAwesomeIcon
          className="w-10 h-10 cursor-pointer hover:text-gray-500 transition duration-150"
          icon={faGithub}
        />
        <FontAwesomeIcon
          className="w-10 h-10 cursor-pointer hover:text-gray-500 transition duration-150"
          icon={faGlobe}
        />
      </div>
    </div>
  );
};

export default ProjectCardInfo;
