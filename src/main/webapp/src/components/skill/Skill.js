import React from "react";

import CardContainer from "./CardContainer";
import SkillFilterContainer from "./filter/SkillFilterContainer";
import WriteBtn from "../common/button/WriteBtn";

const Skill = () => {
  return (
    <div
      id="skill"
      className="bg-dark text-white min-h-screen flex flex-col items-center"
    >
      {/* 기술스택 글쓰기 버튼 */}
      <WriteBtn category="기술스택"></WriteBtn>
      <SkillFilterContainer></SkillFilterContainer>

      <CardContainer></CardContainer>
      <div className="h-96"></div>
    </div>
  );
};

export default Skill;
