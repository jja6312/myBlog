import React, { useEffect } from "react";
import axios from "axios";
import { useStudyTimeStore } from "../../../store/StudyTimeStore";

const GithubAbout = () => {
  const { averageStudyTimePerWeekend, setAverageStudyTimePerWeekend } =
    useStudyTimeStore();
  const { averageStudyTimePerDay, setAverageStudyTimePerDay } =
    useStudyTimeStore();
  const { averageStudyTimeAll, setAverageStudyTimeAll } = useStudyTimeStore();

  const convertToFormat = (minute) => {
    let hour = Math.floor(minute / 60);
    let min = Math.floor(minute % 60);
    return `${hour}h ${min}m`;
  };

  useEffect(() => {
    axios
      .get("http://132.226.236.237:8080/api/studyTime/averageStudyTime")
      .then((res) => {
        setAverageStudyTimePerWeekend(res.data.averageStudyTimePerWeekend);
        setAverageStudyTimePerDay(res.data.averageStudyTimePerDay);
        setAverageStudyTimeAll(res.data.averageStudyTimeAll);
        console.log(
          "res.data.averageStudyTimePerWeekend",
          res.data.averageStudyTimePerWeekend
        );
        console.log(
          "res.data.averageStudyTimePerDay",
          res.data.averageStudyTimePerDay
        );
        console.log(
          "res.data.averageStudyTimeAll",
          res.data.averageStudyTimeAll
        );
      });
  }, []);

  return (
    <div
      className="w-1/2  flex flex-col rounded-lg border border-gray-800  p-4 
    h-[300px]
    xl:h-[265px] xl:w-full xl:mt-[68px]  
    "
    >
      <span className="text-lg font-semibold">📖 평균 학습 시간</span>
      <br></br>

      <div className="flex flex-col">
        <span className="text-gray-500 text-lg">평일 평균</span>
        <span className="text-md">
          {convertToFormat(averageStudyTimePerDay)}
        </span>
      </div>
      <div className="flex flex-col">
        <span className="text-gray-500 text-lg">주말 평균</span>
        <span className="text-md">
          {convertToFormat(averageStudyTimePerWeekend)}
        </span>
      </div>
      <div className="flex flex-col">
        <span className="text-gray-500 text-lg">합계 평균</span>
        <span className="text-md">{convertToFormat(averageStudyTimeAll)}</span>
      </div>
    </div>
  );
};

export default GithubAbout;
