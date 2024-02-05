import React, { useEffect } from "react";
import { useStudyTimeStore } from "../../../store/StudyTimeStore";
import axios from "axios";

const GithubAbout = () => {
  const { averageStudyTimePerWeekend, setAverageStudyTimePerWeekend } =
    useStudyTimeStore();
  const { averageStudyTimePerDay, setAverageStudyTimePerDay } =
    useStudyTimeStore();
  const { averageStudyTimePerSum, setAverageStudyTimePerSum } =
    useStudyTimeStore();

  const convertToFormat = (minute) => {
    let hour = Math.floor(minute / 60);
    let min = minute % 60;
    return `${hour}h ${min}m`;
  };

  useEffect(() => {
    axios
      .get("http://43.203.18.91:8080/studyTime/averageStudyTime")
      .then((res) => {
        setAverageStudyTimePerWeekend(res.data.averageStudyTimePerWeekend);
        setAverageStudyTimePerDay(res.data.averageStudyTimePerDay);
        setAverageStudyTimePerSum(res.data.averageStudyTimePerSum);
        console.log(
          "res.data.averageStudyTimePerWeekend",
          res.data.averageStudyTimePerWeekend
        );
        console.log(
          "res.data.averageStudyTimePerDay",
          res.data.averageStudyTimePerDay
        );
        console.log(
          "res.data.averageStudyTimePerSum",
          res.data.averageStudyTimePerSum
        );
      });
  }, []);

  return (
    <div
      className="w-1/2  flex flex-col rounded-lg border border-gray-800  p-4 
    h-[300px]
    xl:h-[265px] xl:w-full xl:mt-[70px]  
    "
    >
      <span className="text-lg font-semibold">📖 평균 학습 시간</span>
      <br></br>
      <br></br>
      <div className="flex">
        <span className="text-gray-500 text-lg">평일 평균 :</span>
        <span className="ml-3 text-md">
          {convertToFormat(averageStudyTimePerDay)}
        </span>
      </div>
      <div className="flex">
        <span className="text-gray-500 text-lg">주말 평균 :</span>
        <span className="ml-3 text-md">
          {convertToFormat(averageStudyTimePerWeekend)}
        </span>
      </div>
      <div className="flex">
        <span className="text-gray-500 text-lg">합계 평균 :</span>
        <span className="ml-3 text-md">
          {convertToFormat(averageStudyTimePerSum)}
        </span>
      </div>
    </div>
  );
};

export default GithubAbout;
