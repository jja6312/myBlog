import React from "react";

const DevlogCategories = ({ categoryName }) => {
  return (
    <div
      className="rounded-[20px] px-5 min-w-20 h-10 flex justify-center items-center
cursor-pointer font-semibold transition-all duration-300
  bg-gray-800 text-yellow-400 border-[1px] border-dark
hover:bg-gray-900 hover:text-yellow-600 hover:border-[1px] hover:border-gray-600"
    >
      <span>{categoryName}</span>
    </div>
  );
};

export default DevlogCategories;
