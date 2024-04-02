import React from "react";

const MemoContent = ({ content }) => {
  return (
    <div className="rounded w-full flex flex-col justify-between h-32 bg-gray-200 p-5 cursor-pointer hover:bg-gray-300">
      <span className="text-black text-lg">{content}</span>
    </div>
  );
};

export default MemoContent;
