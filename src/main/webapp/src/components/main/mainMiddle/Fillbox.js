import React from "react";
import FillboxHover from "./FillboxHover";

// 깃허브대시보드 박스
const Fillbox = ({ brightness }) => {
  return (
    <div
      className={`group relative rounded-sm w-[4px] h-[4px] md:w-2 md:h-2 xl:w-[10px] xl:h-[10px] 2xl:w-3 2xl:h-3 ${brightness} ${
        brightness === "bg-blue-300" ? "border border-white" : ""
      }`}
    >
      <FillboxHover />
    </div>
  );
};

export default Fillbox;
