import React from "react";

const DevlogCategories = ({ categoryName }) => {
  return (
    <div
      id="DevlogCategories"
      className="rounded-[20px] px-5 w-full h-full flex justify-center items-center
pointer font-semibold transition-all duration-300
  bg-gray-800 text-yellow-400 border-[1px] border-dark
"
    >
      <span>{categoryName}</span>
    </div>
  );
};

export default DevlogCategories;
