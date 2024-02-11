import React, { useEffect, useState } from "react";
import { useStudyTimeStore } from "../../../store/StudyTimeStore";

const DataAbout = () => {
  const { sortedCategoryNames } = useStudyTimeStore();
  const [top3, setTop3] = useState({
    first: "",
    second: "",
    third: "",
  });

  useEffect(() => {
    if (sortedCategoryNames.length > 0) {
      setTop3({
        first: sortedCategoryNames[0],
        second: sortedCategoryNames[1],
        third: sortedCategoryNames[2],
      });
    }
  }, [sortedCategoryNames]);

  return (
    <div
      className=" flex flex-col rounded-lg border border-gray-800 p-4
    w-1/2 h-[300px]
    xl:w-full xl:h-[287px] xl:mt-0
    "
    >
      <span className="text-lg font-semibold">👀 관심기술</span>
      <br></br>
      <div className="flex items-center mt-3">
        <span className="text-gray-500 text-5xl">🥇</span>
        <span className="ml-3 text-md">{top3.first}</span>
      </div>
      <div className="flex items-center mt-3">
        <span className="text-gray-500 text-5xl">🥈</span>
        <span className="ml-3 text-md">{top3.second}</span>
      </div>
      <div className="flex items-center mt-3">
        <span className="text-gray-500 text-5xl">🥉</span>
        <span className="ml-3 text-md">{top3.third}</span>
      </div>
    </div>
  );
};

export default DataAbout;
