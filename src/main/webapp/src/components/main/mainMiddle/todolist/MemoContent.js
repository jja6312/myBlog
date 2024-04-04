import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useMemoStore } from "../../../../store/MemoStore";

const MemoContent = ({ item }) => {
  const { memoUpdated, setMemoUpdated } = useMemoStore();
  const [editState, setEditState] = useState(false);
  const [editContent, setEditContent] = useState(item.content);
  const handleDragStart = (e) => {
    e.dataTransfer.setData("text/plain", item.id); // 드래그하는 메모의 ID를 전달합니다.
  };

  const editCancle = () => {
    // 초기화
    setEditContent(item.content);
    setEditState(false);
  };

  const onChangeEditContent = (e) => {
    setEditContent(e.target.value);
  };

  const updateMemo = () => {
    if (
      prompt("정지안이 아니면 수정하지마세요. 추적이 가능합니다.") !== "정지안"
    ) {
      alert("멋진 선택입니다 :)");
      return;
    }
    axios
      .put(`http://43.203.18.91:8080/memo/editMemo/${item.id}`, {
        content: editContent,
      })
      .then((response) => {
        console.log("수정완료", response.data);
        setMemoUpdated(!memoUpdated);
        setEditState(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    console.log("editContent", editContent);
  }, [editContent]);

  const deleteMemo = () => {
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
      className="relative group rounded w-full flex flex-col justify-between h-auto bg-gray-200 p-5 cursor-pointer hover:bg-white transition duration-150 z-10"
      draggable="true"
      onDragStart={handleDragStart}
    >
      {!editState ? (
        <span className="text-black whitespace-pre-wrap">{item.content}</span>
      ) : (
        <>
          <textarea
            className="text-black whitespace-pre-wrap border-none w-full h-full"
            value={editContent}
            onChange={onChangeEditContent}
          ></textarea>
          <div className="w-full grid grid-cols-3 gap-1 mt-4">
            <div
              className="flex justify-center items-center rounded bg-blue-400 h-10 col-span-2"
              onClick={updateMemo}
            >
              수정
            </div>
            <div
              className="flex justify-center items-center rounded bg-red-500 h-10 "
              onClick={editCancle}
            >
              취소
            </div>
          </div>
        </>
      )}
      <div
        className="hidden absolute top-1 right-7 w-6 h-6 group-hover:flex justify-center items-center rounded hover:bg-slate-400 transition duration-150"
        onClick={() => setEditState(true)}
      >
        <FontAwesomeIcon className="text-slate-700" icon={faPenToSquare} />
      </div>
      <div
        className="hidden absolute top-1 right-1 w-6 h-6 group-hover:flex justify-center items-center rounded hover:bg-slate-400 transition duration-150"
        onClick={deleteMemo}
      >
        <FontAwesomeIcon className="text-slate-700" icon={faTrash} />
      </div>
    </div>
  );
};

export default MemoContent;
