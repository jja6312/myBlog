import React from "react";
import MemoContent from "./MemoContent";

const MemoList = ({ title }) => {
  return (
    <div className="flex flex-col rounded overflow-hidden">
      <div className="flex justify-start items-center h-16 bg-gray-600 pl-5">
        <span>{title}</span>
      </div>
      <div className="flex flex-col gap-2 p-2 bg-gray-300">
        <MemoContent></MemoContent>
        <MemoContent></MemoContent>
        <MemoContent></MemoContent>
      </div>
    </div>
  );
};

export default MemoList;
