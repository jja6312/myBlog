import React from "react";

const IconSkillSelectOneBox = ({ isSelected }) => {
  return (
    <>
      <div
        className={`absolute -top-2 -right-2 border 
        w-[10px] h-[12px]
        lg:w-5 lg:h-6
        bg-[#39393E] 
       ${isSelected ? "border-yellow-200" : "border-white"}
      `}
      ></div>
      <div
        className={`absolute -top-1 -right-1 border 
        w-[10px] h-[12px]
        lg:w-5 lg:h-6
        bg-[#39393E] 
       ${isSelected ? "border-yellow-200" : "border-white"}
      `}
      ></div>
      <div
        className={`absolute top-0 border 
        w-[10px] h-[12px]
        lg:w-5 lg:h-6
        bg-[#39393E] 
       ${isSelected ? "border-yellow-200" : "border-white"}
      `}
      ></div>
    </>
  );
};

export default IconSkillSelectOneBox;
