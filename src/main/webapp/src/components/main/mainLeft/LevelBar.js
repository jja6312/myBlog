import React, { useEffect } from "react";
import { useStudyTimeStore } from "../../../store/StudyTimeStore";
import axios from "axios";

const LevelBar = () => {
  const {
    exp,
    level,
    studyTimeHourSum,
    setExp,
    setLevel,
    setStudyTimeHourSum,
  } = useStudyTimeStore();

  const getStudyTimeSum = () => {
    axios
      .get("http:// 43.203.18.91:8080/studyTime/getStudyTimeHourSum")
      .then((res) => {
        console.log("studyTimeSum:", res.data);

        setStudyTimeHourSum(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getStudyTimeSum();
  }, []);
  useEffect(() => {
    const calLevel = 1 + Math.floor(studyTimeHourSum / 100); //공부시간 100시간당 1레벨업.
    setLevel(calLevel);

    setExp(Math.floor((studyTimeHourSum - (calLevel - 1) * 100) * 100) / 100); // 소수점 2째자리까지 표현
  }, [studyTimeHourSum]);
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <span className="text-sm md:text-2xl">Lv.{level}</span>
      <div className="w-full flex justify-end">
        <span className="text-[8px] md:text-lg font-semibold">100 hours</span>
      </div>
      <div className="relative w-full h-10 md:h-6 xl:h-9 bg-gray-700 rounded-md overflow-hidden">
        <div
          className="bg-white h-full rounded-md"
          style={{ width: `${exp}%` }}
        ></div>
        <span
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  font-semibold
            ${exp <= 40 ? "text-gray-300" : "text-black"}
            `}
        >
          {exp}%
        </span>
      </div>
    </div>
  );
};

export default LevelBar;
