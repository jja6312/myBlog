import React from "react";
import SkillFilterContainerElement from "./SkillFilterContainerElement";
import SkillCheckBox from "./SkillCheckBox";
import SkillSelectOneBox from "./SkillSelectOneBox";
import SkillAlignBox from "./SkillAlignBox";

const SkillFilterContainer = () => {
  return (
    <div className="w-full flex bg-[#39393E] h-36">
      {/* 종류 필터 */}
      <SkillFilterContainerElement width="w-1/3" title="종류">
        <div className="w-full h-1/2  border-[2px] border-[#42424a]">
          <SkillCheckBox category="All"></SkillCheckBox>
        </div>
        <div
          className={` w-full h-1/2 border-[2px] border-[#42424a]
        grid grid-cols-4 place-items-center gap-1
        `}
        >
          <SkillCheckBox category="FrontEnd"></SkillCheckBox>
          <SkillCheckBox category="BackEnd"></SkillCheckBox>
          <SkillCheckBox category="DevOps"></SkillCheckBox>
          <SkillCheckBox category="Certificate"></SkillCheckBox>
        </div>
      </SkillFilterContainerElement>

      {/* 모아보기 필터*/}
      <SkillFilterContainerElement width="w-1/3" title="모아보기">
        <div
          className={`h-full border-[2px] border-[#42424a]
        grid grid-cols-3 place-items-center gap-1
        `}
        >
          <SkillSelectOneBox text="3개씩 보기"></SkillSelectOneBox>
          <SkillSelectOneBox text="6개씩 보기"></SkillSelectOneBox>
          <SkillSelectOneBox text="12개씩 보기"></SkillSelectOneBox>
        </div>
      </SkillFilterContainerElement>

      {/* 정렬 필터*/}
      <SkillFilterContainerElement width="w-1/3" title="정렬">
        <div
          className={`h-full border-[2px] border-[#42424a]
        grid grid-cols-4 place-items-center gap-1
        `}
        >
          <SkillAlignBox text="기술스택별 공부시간순"></SkillAlignBox>
          <SkillAlignBox text="공부시간순"></SkillAlignBox>
          <SkillAlignBox text="날짜순"></SkillAlignBox>
        </div>
      </SkillFilterContainerElement>
    </div>
  );
};

export default SkillFilterContainer;
