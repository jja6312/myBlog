import React, { useState, useEffect } from "react";
import Fillbox from "./Fillbox";
import GithubDashboardMonthAtTop from "./githubDashboard/GithubDashboardMonthAtTop";
import GithubDashboardDayOfWeekAtMiddle from "./githubDashboard/GithubDashboardDayOfWeekAtMiddle";
import GithubDashboardDescriptionAtBottom from "./githubDashboard/GithubDashboardDescriptionAtBottom";

const GithubDashboard = ({ yearlyStudyTime }) => {
  const year = 2024; // 2024년
  const [dates, setDates] = useState([]); // 달력 데이터 저장 state

  useEffect(() => {
    setDates(generateCalendar(year));
  }, [year]);

  const generateCalendar = (year) => {
    let allDates = [];
    for (let month = 0; month < 12; month++) {
      let date = new Date(year, month, 1);
      while (date.getMonth() === month) {
        allDates.push(new Date(date));
        date.setDate(date.getDate() + 1);
      }
    }
    return allDates;
  };

  const formatDate = (date) => {
    if (!date) return "";
    let d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  };

  const fillBoxWithDate = (date) => {
    const formattedDate = formatDate(date);
    const id = formattedDate
      ? `date-${formattedDate}`
      : `empty-${Math.random()}`;
    const dayStudyTime = yearlyStudyTime.filter(
      (item) => item.date === formattedDate
    );
    const durationHours = dayStudyTime[0]
      ? dayStudyTime[0].durationInSeconds / 3600
      : 0;

    return (
      <Fillbox
        id={id}
        brightness={
          durationHours >= 10
            ? "bg-blue-300"
            : durationHours >= 8
            ? "bg-blue-500"
            : durationHours >= 6
            ? "bg-blue-700"
            : durationHours >= 4
            ? "bg-blue-900"
            : "bg-dark" // 이 부분은 durationHours가 4시간 미만일 때의 색상입니다.
        }
      ></Fillbox>
    );
  };

  const renderWeeks = () => {
    const numberOfWeeks = Math.ceil(dates.length / 7);
    const weeks = [];
    for (let i = 0; i < numberOfWeeks; i++) {
      weeks.push(
        <div
          key={i}
          className="flex flex-col mt-2 justify-start items-center gap-[1px] md:gap-[4px] lg:gap-1"
        >
          {dates.slice(i * 7, (i + 1) * 7).map((date, index) => (
            <div key={index}>{fillBoxWithDate(date)}</div>
          ))}
        </div>
      );
    }
    return weeks;
  };

  return (
    <div className="flex flex-col w-full bg-darkDeep">
      <div className="flex justify-center rounded-lg border border-gray-800 px-4 py-5 ">
        <div className="w-fit my-5">
          {/* 상단, 1~12월 텍스트*/}
          <GithubDashboardMonthAtTop />
          <div className="flex ml-2 gap-[0.5px] md:gap-[4px] lg:gap-1">
            {/* 좌측, 월 수 금 텍스트 */}
            <GithubDashboardDayOfWeekAtMiddle />
            {/* 메인, 공부시간에 따라 밝기를 나타내는 네모상자, 2024년 1년치 렌더 */}
            {renderWeeks()}
          </div>
          {/* 하단, 부연 설명 */}
          <GithubDashboardDescriptionAtBottom />
        </div>
      </div>
    </div>
  );
};

export default GithubDashboard;
