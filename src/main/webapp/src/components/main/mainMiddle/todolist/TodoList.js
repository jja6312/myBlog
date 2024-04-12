import React from "react";
import MemoList from "./MemoList";

import ClickedDate from "./ClickedDate";
import { useStudyTimeStore } from "../../../../store/StudyTimeStore";
import MainMiddleTitle from "../MainMiddleTitle";

const TodoList = () => {
  const { clickedDate } = useStudyTimeStore();

  return (
    <div className="w-[99.6%] flex flex-col bg-dark">
      <div className="flex items-center ">
        <MainMiddleTitle
          imgSrc="/image/todolist/jira.png"
          firstText="JIRA"
          secondText="SOFTWARE IN BLOG"
        ></MainMiddleTitle>
        <div className="mt-2">
          <ClickedDate></ClickedDate>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 mt-2 relative">
        {/* clickedDate가 2024-04-04일 이전이라면 */}
        {clickedDate === "" ? (
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-90 flex justify-center items-center border border-white z-20">
            <span className="text-white text-2xl">날짜를 선택해주세요.</span>
          </div>
        ) : (
          clickedDate < "2024-04-04" && (
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-90 flex justify-center items-center border border-white z-20">
              <span className="text-white text-2xl">
                해당 기능은 2024-04-04 이후 날짜부터 조회가 가능합니다.
              </span>
            </div>
          )
        )}
        <MemoList title="TODOLIST"></MemoList>
        <MemoList title="PROGRESS"></MemoList>
        <MemoList title="DONE"></MemoList>
      </div>
    </div>
  );
};

export default TodoList;
