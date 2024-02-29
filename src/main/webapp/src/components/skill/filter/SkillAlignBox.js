import React from "react";
import { useSkillStore } from "../../../store/SkillStore";

const SkillAlignBox = ({ text }) => {
  const { selectedAlignBox, setSelectedAlignBox } = useSkillStore();
  return (
    <>
      <div
        className={`group w-full h-full flex flex-col justify-end items-center rounded-md  cursor-pointer
${text === selectedAlignBox ? "bg-[#2a2a2e]" : "bg-[#39393E]"}
      hover:bg-[#2a2a2e]
    
    `}
        onClick={() => setSelectedAlignBox(text)}
      >
        <span
          className={`
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
