import React from "react";
import ProjectCardImage from "./ProjectCardImage";
import ProjectCardInfo from "./ProjectCardInfo";
import { Link } from "react-router-dom";

// detail={item.detail}
//                 type={item.type}
const ProjectCard = ({
  title,
  detail,
  type,
  startDate,
  endDate,
  img,
  notionPageId,
  githubAddress,
  deployAddress,
}) => {
  return (
    <div className="flex flex-col items-center justify-between w-full h-[700px] rounded border bg-black border-white p-5">
      <ProjectCardImage
        type={type}
        img={img}
        startDate={startDate}
        endDate={endDate}
      ></ProjectCardImage>
      <ProjectCardInfo
        title={title}
        detail={detail}
        githubAddress={githubAddress}
        deployAddress={deployAddress}
      ></ProjectCardInfo>

      <Link
        to={`/projectReadForm?notionPageId=${notionPageId}`}
        className="w-full h-[10%]"
      >
        <div className="w-full h-full py-2 flex justify-center items-center bg-blue-500 rounded cursor-pointer hover:bg-blue-700 transition duration-150">
          <span className="">자세히 보기</span>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
