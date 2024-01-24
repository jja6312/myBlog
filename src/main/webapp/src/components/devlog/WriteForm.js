import React, { useEffect, useState } from "react";

// 글쓰기 페이지. --[24.01.24 17:36 정지안]

// 위 페이지는 아래 세 가지 데이터를 다룬다.
// 1. 카테고리
//    ex)Spring, Java, 운영체제
// 2. 태그
//    ex)AOP, DI, IoC, MVC, REST API
// 3. 노션 페이지 아이디
//    (노션에서 작성한 개발일지를 fetch로 불러서 화면에 뿌린다.)

const WriteForm = () => {
  const [selectedCategory, setSelectedCategory] = useState("카테고리"); // 선택된 카테고리 저장
  const [selectedTag, setSelectedTag] = useState("태그"); // 선택된 태그 저장

  return (
    <div className="flex w-full min-h-screen bg-dark">
      <div className="flex flex-col w-min-h-screen w-2/12"></div>
      <div className="flex flex-col w-min-h-screen bg-darkDeep w-8/12 p-5">
        {/* 제목 입력 */}
        <input
          className="w-full h-20 bg-darkDeep text-white pl-3 mt-10 text-5xl"
          placeholder="제목을 입력하세요."
        ></input>
        <div className="flex w-full space-x-6">
          {/* 카테고리 선택 */}
          <div className="flex flex-col w-1/4">
            <select
              className=" h-12 bg-dark text-white pl-3 mt-10 text-2xl"
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option>카테고리</option>
              <option>새 카테고리 입력</option>
            </select>
            {selectedCategory === "새 카테고리 입력" && (
              <input
                className=" h-12 bg-dark text-white pl-3 mt-2 text-2xl"
                placeholder="카테고리 직접 입력"
              ></input>
            )}
          </div>
          {/* 태그 선택 */}
          <div className="flex flex-col w-1/4">
            <select
              className=" h-12 bg-dark text-white pl-3 mt-10 text-2xl"
              onChange={(e) => setSelectedTag(e.target.value)}
            >
              <option>태그</option>
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

        {/* 노션 페이지 아이디 입력 */}
        <input
          className="w-full h-20 bg-dark text-white pl-3 mt-10 text-2xl"
          placeholder="노션 페이지 아이디를 입력하세요."
        ></input>

        {/* 저장 버튼 */}
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
