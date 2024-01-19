import React from "react";
import Developing from "../Developing";
import DevlogListElement from "./DevlogListElement";

const Devlog = () => {
  return (
    <div
      id="devlogContainer"
      className="bg-dark text-white flex flex-col items-center pl-5 min-h-screen "
    >
      <div className="w-10/12 text-[8px] flex flex-col md:text-sm md:w-7/12 mt-10">
        <span className=" font-semibold">전체 글 (341)</span>
        <div className="flex justify-start w-full">
          <DevlogListElement></DevlogListElement>
        </div>
      </div>
    </div>
  );
};

export default Devlog;
