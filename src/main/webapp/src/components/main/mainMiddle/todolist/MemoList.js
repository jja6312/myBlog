import React, { useEffect, useState } from "react";
import MemoContent from "./MemoContent";
import MemoListPlustBtn from "./MemoListPlustBtn";
import { useMemoStore } from "../../../../store/MemoStore";
import { useStudyTimeStore } from "../../../../store/StudyTimeStore";
import axios from "axios";

const MemoList = ({ title }) => {
  const { allMemoList, setAllMemoList, memoUpdated, setMemoUpdated } =
    useMemoStore();
  const { clickedDate } = useStudyTimeStore();
  const [todoListMemoList, setTodoListMemoList] = useState([]);
  const [progressMemoList, setProgressMemoList] = useState([]);
  const [doneMemoList, setDoneMemoList] = useState([]);

  const [visibleMemoInput, setVisibleMemoInput] = useState(false);

  const handleDrop = (e) => {
    e.preventDefault();
    const memoId = e.dataTransfer.getData("text/plain");
    const newStatus = title; // 드랍 영역의 제목이 새로운 status입니다.

    axios
      .post("http://43.203.18.91:8080/memo/updateStatus", {
        id: memoId,
        status: newStatus,
      })
      .then((response) => {
        console.log("Status update success", response.data);
        setMemoUpdated(!memoUpdated);
      })
      .catch((error) => {
        console.error("Status update failed", error);
      });
  };

  const handleDragOver = (e) => {
    e.preventDefault(); // 드랍 이벤트를 허용하기 위해 필요합니다.
  };

  useEffect(() => {
    if (clickedDate === "") return;
    axios
      .get("http://43.203.18.91:8080/memo/getMemo", {
        params: {
          clickedDate: clickedDate,
        },
      })
      .then((response) => {
        console.log("allMemoList", response.data);
        setAllMemoList(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [memoUpdated, clickedDate]);

  // allMemoList를 status에 따라 나눠서 저장
  useEffect(() => {
    const todoList = allMemoList.filter((data) => data.status === "TODOLIST");
    const progress = allMemoList.filter((data) => data.status === "PROGRESS");
    const done = allMemoList.filter((data) => data.status === "DONE");

    setTodoListMemoList(todoList);
    setProgressMemoList(progress);
    setDoneMemoList(done);
  }, [allMemoList]);

  return (
    <div
      className="flex flex-col rounded overflow-hidden"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <div className="flex justify-start items-center h-16 bg-gray-600 pl-5">
        <span>{title}</span>
      </div>
      <div className="flex flex-col items-center gap-2 p-2 h-full bg-gray-300">
        {/* 왼족, TODOLIST */}
        {title === "TODOLIST" &&
          todoListMemoList.map((item, key) => {
            return <MemoContent key={key} item={item}></MemoContent>;
          })}
        {/* 중앙, PROGRESS(진행상황) */}
        {title === "PROGRESS" &&
          progressMemoList.map((item, key) => {
            return <MemoContent key={key} item={item}></MemoContent>;
          })}
        {/* 오른쪽, DONE(완료) */}
        {title === "DONE" &&
          doneMemoList.map((item, key) => {
            return <MemoContent key={key} item={item}></MemoContent>;
          })}

        {/* TODOLIST에는 + 표시로 메모를 추가할 수 있다. */}
        {title === "TODOLIST" && (
          <>
            <MemoListPlustBtn
              PlustBtn
              visibleMemoInput={visibleMemoInput}
              setVisibleMemoInput={setVisibleMemoInput}
            ></MemoListPlustBtn>
          </>
        )}
      </div>
    </div>
  );
};

export default MemoL