import React from "react";
import DevlogListElement from "./DevlogListElement";
import DevlogWriteBtn from "./DevlogWriteBtn";

// 개발일지의 가운데 영역으로, 개발일지 목록을 표시하는 페이지 --[24.01.24 16:47 정지안]
const DevlogMain = () => {
  return (
    <div
      className=" bg-darkDeep text-white flex flex-col items-center px-5 min-h-screen 
      w-10/12
      md:w-6/12
      "
    >
      {/* 글쓰기 버튼 */}
      <DevlogWriteBtn></DevlogWriteBtn>

      <div className="text-[8px] flex flex-col md:text-sm mt-10 w-full">
        {/* 최상단, 카테고리이름 및 게시글 수 */}
        <span className=" font-semibold">전체 글 (341)</span>
        {/* 하단, 개발일지 게시글 */}
        <div className="flex flex-col w-full">
          <DevlogListElement></DevlogListElement>
        </div>
      </div>
    </div>
  );
};

export default DevlogMain;
