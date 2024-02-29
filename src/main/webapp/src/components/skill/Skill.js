import React from "react";

import CardContainer from "./CardContainer";
import SkillFilterContainer from "./filter/SkillFilterContainer";

const Skill = () => {
  return (
    <div
      id="skill"
      className="bg-dark text-white min-h-screen flex flex-col items-center"
    >
      <SkillFilterContainer></SkillFilterContainer>

      <CardContainer></CardContainer>
    </div>
  );
};

export default Skill;
