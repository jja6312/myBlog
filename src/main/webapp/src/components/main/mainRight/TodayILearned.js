import React from "react";

const TodayILearned = () => {
  return (
    <div
      className=" flex flex-col rounded-lg border border-gray-800 p-4
    w-1/2 h-[300px]
    xl:w-full xl:h-[385px] xl:mt-0
    "
    >
      <span className="text-lg font-semibold">💡 Today I Learned</span>
      <br></br>
      <div className="flex items-center mt-3"></div>
    </div>
  );
};

export default TodayILearned;
