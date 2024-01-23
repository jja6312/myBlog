import React, { useState } from "react";
import HeaderCategoryElement from "./HeaderCategoryElement";

const HeaderCategories = ({ isClickedCategory, setIsClickedCategory }) => {
  return (
    <div className="hidden text-md xl:flex">
      <HeaderCategoryElement
        link="/myBlog"
        text="홈"
        icon="faHouse"
        isClickedCategory={isClickedCategory}
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
