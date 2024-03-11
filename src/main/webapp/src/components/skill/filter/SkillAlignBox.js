import React from "react";
import { useSkillStore } from "../../../store/SkillStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpenReader,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";

const SkillAlignBox = ({ text }) => {
  const { selectedAlignBox, setSelectedAlignBox } = useSkillStore();
  return (
    <>
      <div
        className={`group w-full h-full gap-1 flex flex-col justify-end items-center rounded-md  cursor-pointer
${text === selectedAlignBox ? "bg-[#2a2a2e]" : "bg-[#39393E]"}
      hover:bg-[#2a2a2e]
    `}
        onClick={() => setSelectedAlignBox(text)}
      >
        {text === "학습시간순" ? (
          <span
            className={`
          ${selectedAlignBox === text && `text-yellow-200`}`}
          >
            <FontAwesomeIcon
              className="text-sm 
              lg:text-xl
              xl:text-2xl"
              icon={faBookOpenReader}
            />
          </span>
        ) : (
          <span
            className={`
          ${selectedAlignBox === text && `text-yellow-200`}`}
          >
            <FontAwesomeIcon
              className="text-sm 
              lg:text-xl
              xl:text-2xl"
              icon={faCalendarAlt}
            />
          </span>
        )}

        <span
          className={`
          text-[8px]
          lg:text-[12px]
          xl:text-[16px]
      ${text === selectedAlignBox ? "text-yellow-200" : "text-white"}
      `}
        >
          {text}
        </span>
      </div>
    </>
  );
};

export default SkillAlignBox;
