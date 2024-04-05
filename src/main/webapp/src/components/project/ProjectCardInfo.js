import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const ProjectCardInfo = ({ title, detail, githubAddress, deployAddress }) => {
  return (
    <div className="flex flex-col justify-between items-center w-full h-2/6 p-4 gap-4">
      <span className="text-white text-2xl font-semibold">{title}</span>
      <span className="text-white">{detail}</span>
      <div className="flex w-full justify-center gap-4">
        {githubAddress && (
          <Link to={githubAddress}>
            <FontAwesomeIcon
              className="w-10 h-10 cursor-pointer hover:text-gray-500 transition duration-150"
              icon={faGithub}
            />
          </Link>
        )}

        {deployAddress && (
          <Link to={deployAddress}>
            <FontAwesomeIcon
              className="w-10 h-10 cursor-pointer hover:text-gray-500 transition duration-150"
              icon={faGlobe}
            />
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectCardInfo;
