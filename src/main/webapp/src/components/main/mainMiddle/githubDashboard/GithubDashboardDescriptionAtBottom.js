import React from "react";
import Fillbox from "../Fillbox";
{
  /* 하단의 부연설명 --[24.01.29 10:17 정지안*/
}
const GithubDashboardDescriptionAtBottom = ({
  clickedDate,
  setClickedDate,
}) => {
  return (
    <div className="bottomContainer  flex justify-between items-center mr-11 mt-3">
      <span className="text-[5px] md:text-lg">Find Out What Jian Learned</span>
      <div className="flex gap-2 items-center">
        <span>4시간</span>
        <Fillbox
          id="smEvaluation"
          brightness="bg-blue-900"
          clickedDate={clickedDate}
          setClickedDate={setClickedDate}
        ></Fillbox>
        <Fillbox
          id="mdEvaluation"
          brightness="bg-blue-700"
          clickedDate={clickedDate}
          setClickedDate={setClickedDate}
        ></Fillbox>
        <Fillbox
          id="lgEvaluation"
          brightness="bg-blue-500"
          clickedDate={clickedDate}
          setClickedDate={setClickedDate}
        ></Fillbox>
        <Fillbox
          id="xlEvaluation"
          brightness="bg-blue-300"
          clickedDate={clickedDate}
          setClickedDate={setClickedDate}
        ></Fillbox>
        <span>10시간</span>
      </div>
    </div>
  );
};

export default GithubDashboardDescriptionAtBottom;
