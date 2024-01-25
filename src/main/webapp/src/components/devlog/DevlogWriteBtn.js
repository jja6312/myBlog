import React from "react";
import { Link } from "react-router-dom";

// 글쓰기 버튼 --[24.01.24 17:29 정지안]
const DevlogWriteBtn = () => {
  return (
    <>
      <Link to="/writeForm">
        <div
          className="fixed z-50 bg-gray-700 border-4 border-white flex justify-center items-center cursor-pointer font-semibold transition-all duration-200
      hover:bg-amber-500 hover:text-black
      
      w-20 h-10 rounded-[20px] text-sm bottom-5 right-5
      lg:w-40 lg:h-16 lg:rounded-[30px] lg:text-2xl lg:bottom-10 lg:right-10
      
      2xl:w-60 2xl:h-20 2xl:rounded-[40px] 2xl:text-3xl 2xl:bottom-15 2xl:right-15
      "
        >
          <span>글쓰기</span>
        </div>
      </Link>
    </>
  );
};

export default DevlogWriteBtn;
