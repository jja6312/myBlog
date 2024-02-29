import React from "react";
import { useStudyTimeStore } from "../../../../store/StudyTimeStore";

const BtnRangeDate = ({ text }) => {
  const { clickedRange, setClickedRange } = useStudyTimeStore();
  return (
    <div
      className={`flex justify-center items-center px-2 py-1 bg-gray-700 cursor-pointer border-[1px] border-gray-500 hover:border-white hover:bg-orange-400 transition-all ease-in-out duration-150 
      w-1/3
      xl:w-auto 

      ${clickedRange === text ? "bg-orange-400 border-white" : ""}
      
      `}
      onClick={() => setClickedRange(text)}
    >
      {text}
    </div>
  );
};

export default BtnRangeDate;
