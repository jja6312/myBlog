import React from "react";
import { useSkillStore } from "../../../store/SkillStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const SkillAlignOrderBy = ({ text }) => {
  const { selectedOrderBy, setSelectedOrderBy } = useSkillStore();
  return (
    <>
      <div
        className={`group w-full h-full gap-2 flex justify-center items-center rounded-md  cursor-pointer
${text === selectedOrderBy ? "bg-[#2a2a2e]" : "bg-[#39393E]"}
      hover:bg-[#2a2a2e]
    
    `}
        onClick={() => setSelectedOrderBy(text)}
      >
        {text === "오름차순" ? (
          <span className="text-red-500">
            <FontAwesomeIcon icon={faChevronUp} />
          </span>
        ) : (
          <span className="text-blue-500">
            <FontAwesomeIcon icon={faChevronDown} />
          </span>
        )}
        <span
          className={`
      ${text === selectedOrderBy ? "text-yellow-200" : "text-white"}
      `}
        >
          {text}
        </span>
      </div>
    </>
  );
};

export default SkillAlignOrderBy;
