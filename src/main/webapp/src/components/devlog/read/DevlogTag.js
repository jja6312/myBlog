import React from "react";

// 개발일지 글 읽을때 보이는 태그 --[24.01.26 19:13 정지안]
const DevlogTag = ({ tagName }) => {
  return (
    <div
      id="DevlogTag"
      className="rounded-[20px] w-full h-full px-5 flex justify-center items-center
     font-semibold transition-all duration-300
      bg-gray-700 text-orange-400 border-[1px] border-dark

    
    "
    >
      <span>{tagName}</span>
    </div>
  );
};

export default DevlogTag;
