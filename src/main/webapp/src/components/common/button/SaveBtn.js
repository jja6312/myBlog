import React from "react";

const SaveBtn = () => {
  return (
    <>
      <div
        // onClick={() => onSaveWrite()}
        className="fixed z-50  border-2 border-white flex justify-center items-center cursor-pointer font-semibold transition-all duration-200
          bg-gray-700 text-white
          hover:bg-amber-500 hover:text-black
      
      w-20 h-10 rounded-[20px] text-sm bottom-5 right-5
      lg:w-40 lg:h-16 lg:rounded-[30px] lg:text-2xl lg:bottom-10 lg:right-10
      
      2xl:w-60 2xl:h-20 2xl:rounded-[40px] 2xl:text-3xl 2xl:bottom-15 2xl:right-15
      "
      >
        <span className="pl-6">저장🔐</span>
      </div>
    </>
  );
};

export default SaveBtn;
