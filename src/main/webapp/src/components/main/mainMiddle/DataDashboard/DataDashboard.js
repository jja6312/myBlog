import React from "react";
import DataDashboardByDate from "./DataDashboardByDate";
import DataDashboardByRangeDate from "./DataDashboardByRangeDate";
import MainMiddleTitle from "../MainMiddleTitle";

// 깃허브대시보드를 클릭했을 때,
// 1. 하루동안 어떤 기술과 관련된 공부를 했는지
// 2. 일정 기간동안 어떤 기술과 관련된 공부를 했는지
// 동적으로 데이터를 시각화하여 보여주는 페이지 --[24.01.24 16:02 정지안]
const DataDashboard = () => {
  return (
    <div className="flex flex-col">
      <MainMiddleTitle
        imgSrc="/image/todolist/studyTime.png"
        firstText="STUDY TIME"
        secondText="DATA CHART"
      ></MainMiddleTitle>
      <div
        className="dataDashboard w-full bg-darkDeep flex 
      flex-col
      xl:flex-row 
      "
      >
        <DataDashboardByDate></DataDashboardByDate>
        <DataDashboardByRangeDate></DataDashboardByRangeDate>
      </div>
    </div>
  );
};

export default DataDashboard;
