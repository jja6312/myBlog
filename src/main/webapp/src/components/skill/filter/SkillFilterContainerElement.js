import React from "react";

const SkillFilterContainerElement = ({ width, title, children }) => {
  return (
    <div className={`${width} h-full`}>
      <div
        className={`flex justify-center items-center w-full border-[2px] border-[#42424a]
        h-1/3
        lg:h-1/2
        `}
      >
        <span
          className="text-[#CBC3AD]
          text-lg
        lg:text-2xl"
        >
          {title}
        </span>
      </div>
      <div className="h-1/2">{children}</div>
    </div>
  );
};

export default SkillFilterContainerElement;
