import React from "react";

const DataAbout = () => {
  return (
    <div className="w-1/3 h-[300px] flex flex-col rounded-lg border border-gray-800 p-4 xl:h-[287px] xl:mt-10 xl:w-full">
      <span className="text-2xl font-semibold">👀 관심기술</span>
      <br></br>
      <div className="flex items-center mt-3">
        <span className="text-gray-500 text-5xl">🥇</span>
        <span className="ml-3 text-md">Spring</span>
      </div>
      <div className="flex items-center mt-3">
        <span className="text-gray-500 text-5xl">🥈</span>
        <span className="ml-3 text-md">Next.js</span>
      </div>
      <div className="flex items-center mt-3">
        <span className="text-gray-500 text-5xl">🥉</span>
        <span className="ml-3 text-md">Java</span>
      </div>
    </div>
  );
};

export default DataAbout;