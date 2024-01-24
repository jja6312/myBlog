import React, { useEffect, useState } from "react";

const WriteForm = () => {
  const [selectedTag, setSelectedTag] = useState("태그");
  const [selectedCategory, setSelectedCategory] = useState("카테고리");

  return (
    <div className="flex w-full min-h-screen bg-dark">
      <div className="flex flex-col w-min-h-screen w-2/12"></div>
      <div className="flex flex-col w-min-h-screen bg-darkDeep w-8/12 p-5">
        <input
          className="w-full h-20 bg-darkDeep text-white pl-3 mt-10 text-5xl"
          placeholder="제목을 입력하세요."
        ></input>
        <div className="flex w-full space-x-6">
          <div className="flex flex-col w-1/4">
            <select
              className=" h-12 bg-dark text-white pl-3 mt-10 text-2xl"
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option>카테고리</option>
              {/* 이 곳에 DB에 저장된 카테고리 map으로 뿌려야함. */}
              <option>새 카테고리 입력</option>
            </select>
            {selectedCategory === "새 카테고리 입력" && (
              <input
                className=" h-12 bg-dark text-white pl-3 mt-2 text-2xl"
                placeholder="카테고리 직접 입력"
              ></input>
            )}
          </div>
          <div className="flex flex-col w-1/4">
            <select
              className=" h-12 bg-dark text-white pl-3 mt-10 text-2xl"
              onChange={(e) => setSelectedTag(e.target.value)}
            >
              <option>태그</option>
              {/* 이 곳에 DB에 저장된 태그 map으로 뿌려야함. */}
              <option>새 태그 입력</option>
            </select>
            {selectedTag === "새 태그 입력" && (
              <input
                className="h-12 bg-dark text-white pl-3 mt-2 text-2xl"
                placeholder="태그 직접 입력"
              ></input>
            )}
          </div>
        </div>
        <input
          className="w-full h-20 bg-dark text-white pl-3 mt-10 text-2xl"
          placeholder="노션 페이지 아이디를 입력하세요."
        ></input>

        <div
          className="fixed z-50  border-4 border-white flex justify-center items-center cursor-pointer font-semibold transition-all duration-200
          bg-gray-700 text-white
          hover:bg-amber-500 hover:text-black
      
      w-20 h-10 rounded-[20px] text-sm bottom-5 right-5
      lg:w-40 lg:h-16 lg:rounded-[30px] lg:text-2xl lg:bottom-10 lg:right-10
      
      2xl:w-60 2xl:h-20 2xl:rounded-[40px] 2xl:text-3xl 2xl:bottom-15 2xl:right-15
      "
        >
          <span>저장</span>
        </div>
      </div>
      <div className="flex flex-col w-min-h-screen w-2/12"></div>
    </div>
  );
};

export default WriteForm;
