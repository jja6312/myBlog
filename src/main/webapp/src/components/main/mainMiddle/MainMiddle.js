import React from "react";
import GithubDashboard from "./GithubDashboard";
import DataDashboard from "./DataDashboard";
import WriteDashboard from "./WriteDashboard";

// 메인 페이지의 가운데 콘텐츠표시부분. --[24.01.24 16:02 정지안]

const MainMiddle = () => {
  return (
    <div
      className="bg-darkDeep flex flex-col px-5
    sm:w-full 
    md:ml-0 md:w-full 
    xl:ml-0"
    >
      {/* 1년간 일별 공부시간 대시보드 */}
      <GithubDashboard></GithubDashboard>
      {/* 특정 날짜의 공부종류 및 공부량 데이터 시각화 */}
      <DataDashboard></DataDashboard>
      {/* 특정 날짜의 개발일지 */}
      <WriteDashboard></WriteDashboard>
    </div>
  );
};

export default MainMiddle;
