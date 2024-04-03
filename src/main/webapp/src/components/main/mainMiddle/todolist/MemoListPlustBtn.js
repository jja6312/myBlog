import React, { useEffect, useState } from "react";
import axios from "axios";

const MemoListPlustBtn = ({ setVisibleMemoInput, visibleMemoInput }) => {
  const [memoSaveDTO, setMemoSaveDTO] = useState({
    content: "",
    status: "TODOLIST",
  });

  const onChange = (e) => {
    const textarea = e.target;
    textarea.style.height = "auto"; // 스크롤보다 내용길이가 잛을때 height를 auto설정으로 줄인다.
    textarea.style.height = textarea.scrollHeight + "px"; // 스크롤보다 내용길이가 많을때 height를 늘린다.

    setMemoSaveDTO({
      ...memoSaveDTO,
      content: e.target.value,
    });
  };

  const addMemo = () => {
    setVisibleMemoInput(false);
    axios
      .post("http://localhost:8080/memo/saveMemo", memoSaveDTO)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setMemoSaveDTO({
          content: "",
          status: "TODOLIST",
        });
      });
  };
  const resetMemo = () => {
    setVisibleMemoInput(false);

    setMemoSaveDTO({
      content: "",
      status: "TODOLIST",
    });
  };

  useEffect(() => {
    console.log(memoSaveDTO);
  }, [memoSaveDTO]);
  return (
    <>
      <div
        className="rounded w-full  h-14 bg-gray-400 flex justify-center items-center text-3xl cursor-pointer hover:opacity-60"
        onClick={() => setVisibleMemoInput(true)}
      >
        +
      </div>
      {visibleMemoInput && (
        <>
          <textarea
            onChange={onChange}
            className="w-full min-h-32 rounded bg-gray-200 text-black p-5 whitespace-pre"
            value={memoSaveDTO.content}
            style={{ overflowY: "hidden" }} // 스크롤 바가 나타나지 않도록 설정
          />
          <div className="grid grid-cols-3 gap-1 w-full ">
            <div
              className="bg-emerald-500 rounded h-10 flex justify-center items-center cursor-pointer col-span-2"
              onClick={addMemo}
            >
              <span>등록</span>
            </div>
            <div
              className="bg-red-500 rounded h-10 flex justify-center items-center cursor-pointer"
              onClick={resetMemo}
            >
              <span>취소</span>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MemoListPlustBtn;
