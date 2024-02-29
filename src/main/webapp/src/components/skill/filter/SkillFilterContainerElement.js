import React from "react";

const SkillFilterContainerElement = ({ width, title, children }) => {
  return (
    <div className={`${width} h-full`}>
      <div
        className={`flex justify-center items-center w-full h-1/2 border-[2px] border-[#42424a]`}
      >
        <span className="text-2xl text-[#CBC3AD]">{title}</span>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default SkillFilterContainerElement;
