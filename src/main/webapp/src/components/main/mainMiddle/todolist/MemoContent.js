import React from "react";

const MemoContent = ({ item }) => {
  return (
    <div className="rounded w-full flex flex-col justify-between h-auto bg-gray-200 p-5 cursor-pointer hover:bg-gray-300">
      {item && <span className="text-black">{item.content}</span>}
    </div>
  );
};

export default MemoContent;
