import React from "react";

const IconSkillSelectOneBox = ({ isSelected }) => {
  return (
    <>
      <div
        className={`absolute -top-2 -right-2 border w-5 h-6 bg-[#39393E] 
       ${isSelected ? "border-yellow-200" : "border-white"}
      `}
      ></div>
      <div
        className={`absolute -top-1 -right-1 border w-5 h-6 bg-[#39393E] 
       ${isSelected ? "border-yellow-200" : "border-white"}
      `}
      ></div>
      <div
        className={`absolute top-0 border w-5 h-6 bg-[#39393E] 
       ${isSelected ? "border-yellow-200" : "border-white"}
      `}
      ></div>
    </>
  );
};

export default IconSkillSelectOneBox;
