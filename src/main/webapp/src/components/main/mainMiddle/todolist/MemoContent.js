import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useMemoStore } from "../../../../store/MemoStore";

const MemoContent = ({ item }) => {
  const { memoUpdated, setMemoUpdated } = useMemoStore();
  const handleDragStart = (e) => {
    e.dataTransfer.setData("text/plain", item.id); // 드래그하는 메모의 ID를 전달합니다.
  };
  const onDeleteMemo = () => {
    if (
      prompt("정지안이 아니면 삭제하지마세요. 추적이 가능합니다.") !== "정지안"
    ) {
      alert("멋진 선택입니다 :)");
      return;
    }
    axios
      .delete(`http://43.203.18.91:8080/memo/deleteMemo/${item.id}`)
      .then((response) => {
        console.log("삭제완료", response.data);
        setMemoUpdated(!memoUpdated);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div
      className="relative group rounded w-full flex flex-col justify-between h-auto bg-gray-200 p-5 cursor-pointer hover:bg-white transition duration-150"
      draggable="true"
      onDragStart={handleDragStart}
    >
      <div>
        <span className="text-black whitespace-pre-wrap">{item.content}</span>
        <div className="hidden absolute top-1 right-7 w-6 h-6 group-hover:flex justify-center items-center rounded hover:bg-slate-400 transition duration-150">
          <FontAwesomeIcon className="text-slate-700" icon={faPenToSquare} />
        </div>
        <div
          className="hidden absolute top-1 right-1 w-6 h-6 group-hover:flex justify-center items-center rounded hover:bg-slate-400 transition duration-150"
          onClick={onDeleteMemo}
        >
          <FontAwesomeIcon className="text-slate-700" icon={faTrash} />
        </div>
      </div>
    </div>
  );
};

export default MemoContent;
