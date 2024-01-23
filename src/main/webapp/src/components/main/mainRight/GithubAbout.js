import React from "react";

const GithubAbout = () => {
  return (
    <div className="w-1/3 h-[300px] flex flex-col rounded-lg border border-gray-800  p-4 xl:mt-[76px] xl:h-[265px] xl:w-full">
      <span className="text-2xl font-semibold">📖 공부량</span>
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
