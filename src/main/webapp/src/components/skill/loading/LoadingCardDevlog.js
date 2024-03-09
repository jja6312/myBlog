import React from "react";
import hexagon from "../../devlog/hexagon.module.css";

const LoadingCardDevlog = () => {
  return (
    <div className="flex flex-col">
      <span className="text-yellow-400 text-xl">관련된 개발일지</span>
      <hr className="border-gray-500 my-5 "></hr>
      <div
        className={`rounded w-full h-40 bg-[#2A2A2E] ${hexagon.opacityAnimation0}`}
      ></div>
    </div>
  );
};

export default LoadingCardDevlog;
