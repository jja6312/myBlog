import React from "react";

import CardContainer from "./CardContainer";
import SkillFilterContainer from "./filter/SkillFilterContainer";
import DevlogWriteBtn from "../devlog/DevlogWriteBtn";

const Skill = () => {
  return (
    <div
      id="skill"
      className="bg-dark text-white min-h-screen flex flex-col items-center"
    >
      {/* 기술스택 글쓰기 버튼 */}
      <DevlogWriteBtn category="기술스택"></DevlogWriteBtn>
      <SkillFilterContainer></SkillFilterContainer>

      <CardContainer></CardContainer>
      <div className="h-96"></div>
    </div>
  );
};

export default Skill;
