import React from "react";
import MemoList from "./MemoList";

import ClickedDate from "./ClickedDate";

const TodoList = () => {
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
      <div className="grid grid-cols-3 gap-2 mt-2">
        <MemoList title="TODOLIST"></MemoList>
        <MemoList title="PROGRESS"></MemoList>
        <MemoList title="DONE"></MemoList>
      </div>
    </div>
  );
};

export default TodoList;
