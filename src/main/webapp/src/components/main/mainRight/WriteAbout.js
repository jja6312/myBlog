import React from "react";
import WriteAboutElement from "./WriteAboutElement";

const WriteAbout = () => {
  return (
    <div className="w-1/3 h-[300px] flex flex-col rounded-lg border border-gray-800 p-4 xl:h-auto xl:mt-[76px] xl:w-full">
      <span className="text-2xl font-semibold">💦 최근활동</span>
      <br></br>
      <WriteAboutElement
        title="오늘 밥 맛 좋다"
        createdDate="1 hours ago"
      ></WriteAboutElement>
      <WriteAboutElement
        title="커피맛 좋다!"
        createdDate="1 days ago"
      ></WriteAboutElement>
    </div>
  );
};

export default WriteAbout;
