import React from "react";
import MemoList from "./MemoList";

import ClickedDate from "./ClickedDate";
import { useStudyTimeStore } from "../../../../store/StudyTimeStore";

const TodoList = () => {
  const { clickedDate } = useStudyTimeStore();
  return (
    <div className="w-[99.6%] flex flex-col bg-dark">
      <div className="flex items-center ">
        <div className="bg-white w-12 h-12 rounded-full flex justify-center items-center">
          <img
            className="w-8 h-8 transform -translate-x-[1px] translate-y-[1px]"
            src="/image/todolist/jira.png"
          ></img>
        </div>
        <span className="pl-4 text-2xl font-semibold text-blue-300">JIRA</span>
        <span className="pl-2 text-2xl font-semibold">SOFTWARE IN BLOG</span>
        <ClickedDate></ClickedDate>
      </div>
      <div className="grid grid-cols-3 gap-2 mt-2 relative">
        {/* clickedDate가 2024-04-04일 이전이라면 */}
        {clickedDate < "2024-04-04" && (
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-90 flex justify-center items-center border border-white z-20">
            <span className="text-white text-2xl">
              해당 기능은 2024-04-04 이후 날짜부터 조회가 가능합니다.
            </span>
          </div>
        )}
        <MemoList title="TODOLIST"></MemoList>
        <MemoList title="PROGRESS"></MemoList>
        <MemoList title="DONE"></MemoList>
      </div>
    </div>
  );
};

export default TodoList;
