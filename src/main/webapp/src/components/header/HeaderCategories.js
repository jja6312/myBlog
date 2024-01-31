import React, { useState } from "react";
import HeaderCategoryElement from "./HeaderCategoryElement";

// 헤더 카테고리들 --[24.01.24 17:52 정지안]

const HeaderCategories = ({
  isClickedCategory, //클릭된 카테고리의 path
  setIsClickedCategory,
}) => {
  return (
    <div className="hidden text-md xl:flex">
      <HeaderCategoryElement
        link="/" // 클릭 시 이동할 url
        text="홈" //화면에 보여질 text
        icon="faHouse" //fontawesome의 아이콘 이름을 통해 아이콘 표시
        isClickedCategory={isClickedCategory} //클릭된 카테고리의 path
        setIsClickedCategory={setIsClickedCategory}
      />

      <HeaderCategoryElement
        link="/skill"
        text="기술스택"
        icon="faStackOverflow"
        isClickedCategory={isClickedCategory}
        setIsClickedCategory={setIsClickedCategory}
      ></HeaderCategoryElement>

      <HeaderCategoryElement
        link="/project"
        text="프로젝트"
        icon="faPersonDigging"
        isClickedCategory={isClickedCategory}
        setIsClickedCategory={setIsClickedCategory}
      ></HeaderCategoryElement>
      <HeaderCategoryElement
        link="/devlog"
        text="개발일지"
        icon="faKeyboard"
        isClickedCategory={isClickedCategory}
        setIsClickedCategory={setIsClickedCategory}
      ></HeaderCategoryElement>
      <HeaderCategoryElement
        link="/youtube"
        text="유튜브 활동"
        icon="faYoutube"
        isClickedCategory={isClickedCategory}
        setIsClickedCategory={setIsClickedCategory}
      ></HeaderCategoryElement>
      <HeaderCategoryElement
        link="/book"
        text="학습 도서"
        icon="faBook"
        isClickedCategory={isClickedCategory}
        setIsClickedCategory={setIsClickedCategory}
      ></HeaderCategoryElement>
      <HeaderCategoryElement
        link="/video"
        text="학습 강의"
        icon="faHeadphones"
        isClickedCategory={isClickedCategory}
        setIsClickedCategory={setIsClickedCategory}
      ></HeaderCategoryElement>
      <HeaderCategoryElement
        link="/timeline"
        text="타임라인"
        icon="faTimeline"
        isClickedCategory={isClickedCategory}
        setIsClickedCategory={setIsClickedCategory}
      ></HeaderCategoryElement>
      <HeaderCategoryElement
        link="/about"
        text="소개"
        icon="faAddressCard"
        isClickedCategory={isClickedCategory}
        setIsClickedCategory={setIsClickedCategory}
      ></HeaderCategoryElement>
    </div>
  );
};

export default HeaderCategories;
