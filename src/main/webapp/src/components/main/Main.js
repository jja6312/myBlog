import React, { useState } from "react";

import MainLeft from "./mainLeft/MainLeft";
import MainMiddle from "./mainMiddle/MainMiddle";
import MainRight from "./mainRight/MainRight";

// 메인 페이지 --[24.01.24 18:28 정지안]
const Main = () => {
  return (
    <>
      <div
        id="mainContainer"
        className="bg-dark text-white lg:px-20 block xl:flex xl:px-5"
      >
        {/* 프로필, 스톱워치 */}
        <MainLeft></MainLeft>
        {/* 
        1. 1년간 공부량 시각화
        2. 특정 날짜별 어떤 공부를 얼만큼 했는지 확인
        3. 특정 날짜에 작성한 개발일지
        */}
        <MainMiddle></MainMiddle>
        {/* 평균치, 관심 있는 기술 정렬, */}
        <MainRight></MainRight>
      </div>
    </>
  );
};

export default Main;
