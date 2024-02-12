import React from "react";
import FillboxHover from "./FillboxHover";

// 깃허브대시보드 박스
const Fillbox = ({
  id,
  brightness,
  durationHourAndMinute,
  clickedDate,
  setClickedDate,
  isToday,
}) => {
  const isClicked = clickedDate === id;

  const handlingClick = () => {
    if (isClicked) {
      setClickedDate("");
    } else if (!isClicked) {
      setClickedDate(id);
    }
  };

  return (
    <div
      id={id}
      onClick={handlingClick}
      className={`group cursor-pointer relative   border-1 

      border-gray-400 
      hover:border-white  hover:border-2

      w-[4px] h-[4px]  rounded-[1px]
      sm:w-2 sm:h-2 sm:rounded-sm
      xl:w-[10px] xl:h-[10px]
      2xl:w-3 2xl:h-3 
      ${brightness} 
      ${isClicked && "border-white border-[1px] lg:border-2"}
      `}
    >
      <FillboxHover
        id={id}
        durationHourAndMinute={durationHourAndMinute}
        isClicked={isClicked}
        isToday={isToday}
      />
    </div>
  );
};

export default Fillbox;
