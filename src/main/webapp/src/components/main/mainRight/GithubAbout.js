import React from "react";

const GithubAbout = () => {
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
        <span className="ml-3 text-md">7h 31m</span>
      </div>
      <div className="flex">
        <span className="text-gray-500 text-lg">주말 평균 :</span>
        <span className="ml-3 text-md">4h 53m</span>
      </div>
      <div className="flex">
        <span className="text-gray-500 text-lg">합계 평균 :</span>
        <span className="ml-3 text-md">6h 57m</span>
      </div>
    </div>
  );
};

export default GithubAbout;
