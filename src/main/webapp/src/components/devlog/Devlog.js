import React, { useState } from "react";

import DevlogLeft from "./DevlogLeft";
import DevlogMain from "./DevlogMain";
import DevlogRight from "./DevlogRight";

//개발일지 페이지 [24.01.24 15:48 정지안]
const Devlog = () => {
  const [isSelected, setIsSelected] = useState(false); // DevlogLeft에서 선택한 카테고리를 저장하는 state
  return (
    <div className="flex justify-between text-white">
      {/* 카테고리 */}
      <DevlogLeft isSelected={isSelected} setIsSelected={setIsSelected} />

      {/* 콘텐츠(개발일지 목록) 표시 */}
      <DevlogMain />

      {/* 선택된 카테고리 내 세부 분류. 필터 기능 제공함.*/}
      <DevlogRight isSelected={isSelected} setIsSelected={setIsSelected} />
    </div>
  );
};

export default Devlog;
