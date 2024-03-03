import React, { useEffect } from "react";
import axios from "axios";

import CardContainer from "./CardContainer";
import SkillFilterContainer from "./filter/SkillFilterContainer";
import WriteBtn from "../common/button/WriteBtn";
import { useSkillStore } from "../../store/SkillStore";

const Skill = () => {
  const {
    // 데이터를 불러올 때 사용할 필터 조건
    checkBoxes, //어떤 종류의 기술스택인지?
    selectedAlignBox, //공부시간순인지, 날짜순인지?
    selectedOrderBy, //오름차순인지?
    setSkillList, //불러온 데이터를 저장
  } = useSkillStore();

  useEffect(() => {
    const params = new URLSearchParams({
      checkBoxes: JSON.stringify(checkBoxes),
      selectedAlignBox,
      selectedOrderBy,
    }).toString();

    axios
      .get(`http://43.203.18.91:8080/skill/getSkillList?${params}`)
      .then((res) => {
        console.log("skillList", res.data);
        setSkillList(res.data);
      });
  }, [checkBoxes, selectedAlignBox, selectedOrderBy]);

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
