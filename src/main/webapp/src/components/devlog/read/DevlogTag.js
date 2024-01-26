import React from "react";

// 개발일지 글 읽을때 보이는 태그 --[24.01.26 19:13 정지안]
const DevlogTag = ({ tagName }) => {
  return (
    <div
      className="rounded-[20px] w-full h-full px-5 flex justify-center items-center
    cursor-pointer font-semibold transition-all duration-300
      bg-gray-700 text-orange-400 border-[1px] border-dark
    hover:bg-gray-900 hover:text-orange-600 hover:border-[1px] hover:border-gray-600

    
    "
    >
      <span>{tagName}</span>
    </div>
  );
};

export default DevlogTag;
