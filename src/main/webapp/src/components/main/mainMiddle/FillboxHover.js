import React from "react";

// 깃허브대시보드 박스에 마우스를 올렸을 때, 공부시간을 보여주는 컴포넌트
const FillboxHover = () => {
  return (
    <>
      <div
        className="z-30  absolute flex justify-center items-center bg-slate-700 opacity-0 group-hover:opacity-100
      w-16 h-3 text-[7px] rounded-sm
      lg:w-32 lg:h-7 lg:text-sm lg:rounded
      
      "
      >
        공부시간 : 7h 39m
      </div>
    </>
  );
};

export default FillboxHover;