import React from "react";
import DevlogListElement from "./DevlogListElement";
import DevlogWriteBtn from "./DevlogWriteBtn";

const DevlogMain = () => {
  return (
    <div
      className=" bg-darkDeep text-white flex flex-col items-center px-5 min-h-screen 
      w-10/12
      md:w-6/12
      "
    >
      <DevlogWriteBtn></DevlogWriteBtn>

      <div className="text-[8px] flex flex-col md:text-sm mt-10 w-full">
        <span className=" font-semibold">전체 글 (341)</span>
        <div className="flex flex-col w-full">
          <DevlogListElement></DevlogListElement>
          <DevlogListElement></DevlogListElement>
          <DevlogListElement></DevlogListElement>
        </div>
      </div>
    </div>
  );
};

export default DevlogMain;
