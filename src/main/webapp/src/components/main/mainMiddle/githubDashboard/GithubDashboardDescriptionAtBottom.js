import React from "react";
import Fillbox from "../Fillbox";
{
  /* 하단의 부연설명 --[24.01.29 10:17 정지안*/
}
const GithubDashboardDescriptionAtBottom = () => {
  return (
    <div className="bottomContainer text-gray-400 flex justify-between items-center mr-11 mt-3">
      <span className="text-[5px] md:text-lg">Find Out What Jian Learned</span>
      <div className="flex gap-2 items-center">
        <span>Less</span>
        <Fillbox brightness="bg-blue-900"></Fillbox>
        <Fillbox brightness="bg-blue-700"></Fillbox>
        <Fillbox brightness="bg-blue-500"></Fillbox>
        <Fillbox brightness="bg-blue-300"></Fillbox>
        <span>More</span>
      </div>
    </div>
  );
};

export default GithubDashboardDescriptionAtBottom;
