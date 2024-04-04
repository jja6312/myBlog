import React, { useEffect } from "react";
import GithubDashboard from "./GithubDashboard";
import DataDashboard from "./DataDashboard/DataDashboard";
import WriteDashboard from "./WriteDashboard";
import axios from "axios";
import { useStudyTimeStore } from "../../../store/StudyTimeStore";
import TodoList from "./todolist/TodoList";

// 메인 페이지의 가운데 콘텐츠표시부분. --[24.02.05 16:02 정지안]

const MainMiddle = () => {
  const { setYearlyStudyTime } = useStudyTimeStore();
  //연간 공부량 데이터 불러오기
  const getYearlyStudyTime = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/studyTime/getYearlyStudyTime"
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
      {/* 1년간 일별 학습시간 대시보드 */}
      <div
        className="text-lg font-semibold mt-8 mb-2 flex 
      flex-col justify-center items-start
      md:flex-row md:justify-start md:items-center "
      >
        <span>연간 학습</span>
        <span
          className="text-gray-500 text-sm
         ml-0 
         md:ml-4"
        >
          색칠된 상자를 클릭하면 선택 날짜별 학습 데이터를 볼 수 있습니다.
        </span>
      </div>
      <GithubDashboard></GithubDashboard>
      {/* 특정 날짜의 공부종류 및 공부량 데이터 시각화 */}
      <DataDashboard></DataDashboard>

      {/* TODOLIST */}
      <TodoList></TodoList>

      {/* 특정 날짜의 개발일지 */}
      <WriteDashboard></WriteDashboard>
    </div>
  );
};

export default MainMiddle;
