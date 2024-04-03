import React, { useState } from "react";
import MemoContent from "./MemoContent";
import MemoListPlustBtn from "./MemoListPlustBtn";

const todoListContentArray = [];
const progressContentArray = ["내용", "hello"];
const doneContentArray = ["내용", "hello"];

const MemoList = ({ title }) => {
  // const addMemo = () => {
  //   console.log("addMemo");
  // };
  const [memoInput, setMemoInput] = useState("");
  const [visibleMemoInput, setVisibleMemoInput] = useState(false);

  return (
    <div className="flex flex-col rounded overflow-hidden">
      <div className="flex justify-start items-center h-16 bg-gray-600 pl-5">
        <span>{title}</span>
      </div>
      <div className="flex flex-col items-center gap-2 p-2 h-full bg-gray-300">
        {/* 왼족, TODOLIST */}
        {title === "TODOLIST" &&
          todoListContentArray.map((item, key) => {
            return <MemoContent key={key} content={item}></MemoContent>;
          })}
        {/* 중앙, PROGRESS(진행상황) */}
        {title === "PROGRESS" &&
          progressContentArray.map((item, key) => {
            return <MemoContent key={key} content={item}></MemoContent>;
          })}
        {/* 오른쪽, DONE(완료) */}
        {title === "DONE" &&
          doneContentArray.map((item, key) => {
            return <MemoContent key={key} content={item}></MemoContent>;
          })}

        {/* TODOLIST에는 + 표시로 메모를 추가할 수 있다. */}
        {title === "TODOLIST" && (
          <>
            <MemoListPlustBtn
              visibleMemoInput={visibleMemoInput}
              setVisibleMemoInput={setVisibleMemoInput}
              memoInput={memoInput}
              setMemoInput={setMemoInput}
            ></MemoListPlustBtn>
          </>
        )}
      </div>
    </div>
  );
};

export default MemoList;
