import React from "react";
import IconSkillSelectOneBox from "./IconSkillSelectOneBox";
import { useSkillStore } from "../../../store/SkillStore";

const SkillSelectOneBox = ({ text }) => {
  const { selectedView, setSelectedView } = useSkillStore();
  return (
    <div
      className={`group w-full h-full flex flex-col justify-end items-center rounded-md  cursor-pointer min-h-[40px]
${text === selectedView ? "bg-[#2a2a2e]" : "bg-[#39393E]"}
      hover:bg-[#2a2a2e]
    
    `}
      onClick={() => setSelectedView(text)}
    >
      <div className="relative">
        <div
          className="
          transform -translate-x-[2px]
          lg:transform lg:translate-x-0
        w-[10px] h-[12px]
        lg:w-5 lg:h-6"
        >
          {text === "3개씩 보기" ? (
            <IconSkillSelectOneBox
              isSelected={text === selectedView}
            ></IconSkillSelectOneBox>
          ) : text === "6개씩 보기" ? (
            <>
              <div
                className="transform 
              -translate-x-[4.5px]
              lg:-translate-x-[9px]"
              >
                <IconSkillSelectOneBox
                  isSelected={text === selectedView}
                ></IconSkillSelectOneBox>
              </div>
              <div
                className="transform 
              translate-x-[4.5px]
              lg:translate-x-[9px]"
              >
                <IconSkillSelectOneBox
                  isSelected={text === selectedView}
                ></IconSkillSelectOneBox>
              </div>
            </>
          ) : text === "12개씩 보기" ? (
            <>
              <div className="transform -translate-x-[18px]">
                <IconSkillSelectOneBox
                  isSelected={text === selectedView}
                ></IconSkillSelectOneBox>
              </div>

              <IconSkillSelectOneBox
                isSelected={text === selectedView}
              ></IconSkillSelectOneBox>

              <div className="transform translate-x-[18px]">
                <IconSkillSelectOneBox
                  isSelected={text === selectedView}
                ></IconSkillSelectOneBox>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
      <span
        className={`
        text-[8px]
        lg:text-[16px]
      ${text === selectedView ? "text-yellow-200" : "text-white"}
      `}
      >
        {text}
      </span>
      <div className="h-1"></div>
    </div>
  );
};

export default SkillSelectOneBox;
