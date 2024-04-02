import React from "react";
import MemoContent from "./MemoContent";

const todoListContentArray = [];
const progressContentArray = ["내용", "hello"];
const doneContentArray = ["내용", "hello"];

const MemoList = ({ title }) => {
  return (
    <div className="flex flex-col rounded overflow-hidden">
      <div className="flex justify-start items-center h-16 bg-gray-600 pl-5">
        <span>{title}</span>
      </div>
      <div className="flex flex-col items-center gap-2 p-2 h-full bg-gray-300">
        {title === "TODOLIST" &&
          todoListContentArray.map((item, key) => {
            return <MemoContent key={key} content={item}></MemoContent>;
          })}
        {title === "PROGRESS" &&
          progressContentArray.map((item, key) => {
            return <MemoContent key={key} content={item}></MemoContent>;
          })}
        {title === "DONE" &&
          doneContentArray.map((item, key) => {
            return <MemoContent key={key} content={item}></MemoContent>;
          })}

        {/* TODOLIST에는 + 표시로 메모를 추가할 수 있다. */}
        {title === "TODOLIST" && (
          <div className="rounded w-full  h-14 bg-gray-400 flex justify-center items-center text-3xl cursor-pointer hover:opacity-60">
            +
          </div>
        )}
      </div>
    </div>
  );
};

export default MemoList;
