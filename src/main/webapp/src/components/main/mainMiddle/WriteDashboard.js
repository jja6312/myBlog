import React from "react";
import WriteElement from "./WriteElement";

// 특정 날짜의 개발일지 --[24.01.24 18:22 정지안]
const WriteDashboard = () => {
  return (
    <div className="writeDashboard w-full bg-darkDeep flex flex-col my-6">
      <div className="flex">
        <span className="text-2xl ml-2">14</span>
        <span className="text-2xl ml-5">January</span>
        <span className="text-2xl ml-5 text-gray-500">2024</span>
      </div>
      <hr className="border-gray-800 mt-5 mb-5"></hr>
      <WriteElement
        title="지안"
        createdDate="2024.01.15"
        content="안녕?"
      ></WriteElement>
      <WriteElement
        title="지안"
        createdDate="2024.01.15"
        content="안녕?"
      ></WriteElement>
    </div>
  );
};

export default WriteDashboard;