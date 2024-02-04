import React from "react";

// 깃허브대시보드 박스에 마우스를 올렸을 때, 공부시간을 보여주는 컴포넌트
const FillboxHover = ({ durationHourAndMinute, isClicked, id, isToday }) => {
  return (
    <>
      <div
        className={`z-40 absolute left-1/2 transform -translate-x-1/2  justify-center items-center bg-slate-700 p-4
        ${isClicked ? "flex flex-col" : "hidden"}
        hover:opacity-50

        group-hover:flex group-hover:flex-col
        w-28 h-10 text-[7px] rounded-sm -translate-y-14
        
        lg:w-44 lg:h-14 lg:text-sm lg:rounded-lg lg:-translate-y-20
        `}
      >
        <div className="z-10 flex flex-col items-center">
          {isToday ? (
            <span>💞 Today 💞</span>
          ) : (
            <span>{id.includes("20") ? id : ""}</span> //
          )}
          {id === "smEvaluation" ? (
            <span>4시간 이상</span>
          ) : id === "mdEvaluation" ? (
            <span>6시간 이상</span>
          ) : id === "lgEvaluation" ? (
            <span>8시간 이상</span>
          ) : id === "xlEvaluation" ? (
            <span>10시간 이상</span>
          ) : (
            <span>공부시간 : {durationHourAndMinute}</span>
          )}
        </div>
        {/* 말풍선 꼬리표 */}
        <div className=" absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-slate-700 rotate-45"></div>
      </div>
    </>
  );
};

export default FillboxHover;
