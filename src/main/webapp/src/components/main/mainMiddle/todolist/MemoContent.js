import React from "react";

const MemoContent = ({ item }) => {
  const handleDragStart = (e) => {
    e.dataTransfer.setData("text/plain", item.id); // 드래그하는 메모의 ID를 전달합니다.
  };
  return (
    <div
      className="rounded w-full flex flex-col justify-between h-auto bg-gray-200 p-5 cursor-pointer hover:bg-gray-300"
      draggable="true"
      onDragStart={handleDragStart}
    >
      {item && (
        <span className="text-black whitespace-pre-wrap">{item.content}</span>
      )}
    </div>
  );
};

export default MemoContent;
