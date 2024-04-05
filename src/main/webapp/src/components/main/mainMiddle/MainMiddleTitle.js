import React from "react";

const MainMiddleTitle = ({ imgSrc, firstText, secondText }) => {
  return (
    <div className="flex items-center mt-2">
      <div className="bg-white w-12 h-12 rounded-full flex justify-center items-center">
        <img
          className="w-8 h-8 transform -translate-x-[1px] translate-y-[1px]"
          src={imgSrc}
        ></img>
      </div>
      <span className="pl-4 text-2xl font-semibold text-blue-300">
        {firstText}
      </span>
      <span className="pl-2 text-2xl font-semibold">{secondText}</span>
    </div>
  );
};

export default MainMiddleTitle;
