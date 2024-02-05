import React, { useEffect } from "react";
import GithubDashboard from "./GithubDashboard";
import DataDashboard from "./DataDashboard";
import WriteDashboard from "./WriteDashboard";
import axios from "axios";
import { useStudyTimeStore } from "../../../store/StudyTimeStore";

// 메인 페이지의 가운데 콘텐츠표시부분. --[24.02.05 16:02 정지안]

const MainMiddle = () => {
  const { setYearlyStudyTime } = useStudyTimeStore();
  //연간 공부량 데이터 불러오기
  const getYearlyStudyTime = async () => {
    try {
      const response = await axios.get(
        "http://43.203.18.91:8080/studyTime/getYearlyStudyTime"
      );
      setYearlyStudyTime(response.data);
      console.log("yearlyStudyTime", response.data);
    } catch (error) {
      console.error("Error fetching yearly study time", error);
    }
  };

  useEffect(() => {
    getYearlyStudyTime();
  }, []);

  return (
    <div
      className="bg-darkDeep flex flex-col px-5
    sm:w-full 
    md:ml-0 md:w-full 
    xl:ml-0"
    >
      {/* 1년간 일별 공부시간 대시보드 */}
      <span className="text-lg font-semibold mt-8 mb-2">연간 학습</span>
      <GithubDashboard></GithubDashboard>
      {/* 특정 날짜의 공부종류 및 공부량 데이터 시각화 */}
      <span className="text-lg font-semibold mt-8 mb-2">기간별 학습 종류</span>
      <DataDashboard></DataDashboard>
      {/* 특정 날짜의 개발일지 */}
      <WriteDashboard></WriteDashboard>
    </div>
  );
};

export default MainMiddle;
