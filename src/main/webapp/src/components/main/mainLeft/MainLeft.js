import React, { useEffect, useState } from "react";

import Stopwatch from "./Stopwatch";
import axios from "axios";

// 메인의 왼쪽. 프로필사진, 스탑워치 표시--[24.01.24 18:00 정지안]
const MainLeft = () => {
  const [studyTimeHourSum, setStudyTimeHourSum] = useState("");
  const [level, setLevel] = useState("");
  const [exp, setExp] = useState("");

  const getStudyTimeSum = () => {
    axios
      .get("http://43.203.18.91:8080/studyTime/getStudyTimeHourSum")
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
    const calLevel = 1 + Math.floor(studyTimeHourSum / 100);
    setLevel(calLevel);

    setExp(studyTimeHourSum - (calLevel - 1) * 100);
  }, [studyTimeHourSum]);

  return (
    <div
      id="mainLeft"
      className="w-full gap-6 pl-5 flex items-center xl:w-[300px] xl:pl-0 xl:flex-col xl:gap-0 xl:pr-5"
    >
      <div className="h-[250px] md:h-auto flex flex-col justify-between items-center xl:mr-0">
        {/* 프로필사진 */}

        <div
          className="flex justify-center items-center rounded-full overflow-hidden 
        mt-16
        w-[24vw] h-[24vw] 
        md:w-[15vw] md:h-[15vw] 
        lg:mt-4 
        transition-colors duration-500 ease-in-out border-2 border-dark 
        hover:border-gray-200"
        >
          <img
            alt=""
            className="w-full md:w-[120%] object-cover transition-transform duration-500 ease-in-out transform hover:scale-125"
            src={`${process.env.PUBLIC_URL}/image/profile/profile2.png`}
          />
        </div>

        <div className="w-full flex flex-col justify-center items-center">
          <span className="text-sm md:text-2xl">Lv.{level}</span>
          <div className="w-full flex justify-end">
            <span className="text-[8px] md:text-lg font-semibold">
              100 hours
            </span>
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
      </div>
      {/* 스탑워치 */}
      <Stopwatch />
    </div>
  );
};

export default MainLeft;
