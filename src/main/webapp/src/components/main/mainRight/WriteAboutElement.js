import React from "react";

const WriteAboutElement = ({ title, createdDate }) => {
  return (
    <div className="flex items-center">
      <div className="w-10 h-full flex justify-center items-center mr-5 relative translate-y-[5px]">
        <div className="w-[1px] h-full bg-gray-700"></div>
        <div className="rounded-full w-4 h-4 bg-gray-700 absolute top-0 left-1/2 -translate-x-1/2"></div>
      </div>
      <div className="flex flex-col">
        <span className="ml-3 text-md text-gray-500">{createdDate}</span>
        <span className="ml-3 text-md">{title}</span>
        <br></br>
      </div>
    </div>
  );
};

export default WriteAboutElement;
