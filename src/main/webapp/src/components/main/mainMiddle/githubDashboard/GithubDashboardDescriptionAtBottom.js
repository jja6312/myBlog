import React, { useEffect } from "react";
import Fillbox from "../Fillbox";
import axios from "axios";
import { useStudyTimeStore } from "../../../../store/StudyTimeStore";
{
  /* 하단의 부연설명 --[24.01.29 10:17 정지안*/
}
const GithubDashboardDescriptionAtBottom = ({
  clickedDate,
  setClickedDate,
}) => {
  const { setStudyTimeByDayGroupByCategory } = useStudyTimeStore();
  useEffect(() => {
    console.log("clickedDate:", clickedDate);

    if (clickedDate === "") return;
    axios
      .get(
        "http://43.203.18.91:8080/studyTime/getStudyTimeByDayGroupByCategory",
        {
          params: {
            clickedDate: clickedDate,
          },
        }
      )
      .then((res) => {
        setStudyTimeByDayGroupByCategory(res.data);
        console.log("getStudyTimeByDayGroupByCategory:", res.data);
      });
  }, [clickedDate]);
  return (
    <div className="bottomContainer  flex justify-between items-center mr-11 mt-3">
      <span className="text-[12px] lg:text-lg">Find Out What Jian Learned</span>
      <div className="flex gap-2 items-center text-[12px]">
        <span>4시간</span>
        <Fillbox
          id="smEvaluation"
          brightness="bg-[#182E4F]"
          clickedDate={clickedDate}
          setClickedDate={setClickedDate}
        ></Fillbox>
        <Fillbox
          id="mdEvaluation"
          brightness="bg-[#244273]"
          clickedDate={clickedDate}
          setClickedDate={setClickedDate}
        ></Fillbox>
        <Fillbox
          id="lgEvaluation"
          brightness="bg-[#3360A6]"
          clickedDate={clickedDate}
          setClickedDate={setClickedDate}
        ></Fillbox>
        <Fillbox
          id="xlEvaluation"
          brightness="bg-[#4F93FF]"
          clickedDate={clickedDate}
          setClickedDate={setClickedDate}
        ></Fillbox>
        <span>10시간</span>
      </div>
    </div>
  );
};

export default GithubDashboardDescriptionAtBottom;
