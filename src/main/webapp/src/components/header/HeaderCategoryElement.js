import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faStackOverflow } from "@fortawesome/free-brands-svg-icons";
import { faPersonDigging } from "@fortawesome/free-solid-svg-icons";
import { faKeyboard } from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons";
import { faTimeline } from "@fortawesome/free-solid-svg-icons";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

// 헤더의 카테고리--[24.01.24 17:55 정지안]
const HeaderCategory = ({
  link, // 클릭 시 이동할 url
  text, //화면에 보여질 text
  icon, //fontawesome의 아이콘 이름을 통해 아이콘 표시
  isClickedCategory, //클릭된 카테고리의 path
  setIsClickedCategory,
}) => {
  return (
    <>
      <Link to={link} onClick={() => setIsClickedCategory(link)}>
        <div className="flex-col mt-3 ">
          {/* 아이콘과 카테고리 이름 */}
          <div className="flex justify-evenly pl-3 pr-3 hover:text-gray-400 transition-all duration-150">
            <FontAwesomeIcon
              className="text-xl "
              icon={
                icon === "faHouse" //아이콘 이름에 따라 다른 아이콘 표시
                  ? faHouse //홈 아이콘
                  : icon === "faStackOverflow"
                  ? faStackOverflow //기술스택 아이콘
                  : icon === "faPersonDigging"
                  ? faPersonDigging //프로젝트 아이콘
                  : icon === "faKeyboard"
                  ? faKeyboard //개발일지 아이콘
                  : icon === "faYoutube"
                  ? faYoutube //유튜브 활동 아이콘
                  : icon === "faBook"
                  ? faBook //학습 도서 아이콘
                  : icon === "faHeadphones"
                  ? faHeadphones //학습 강의 아이콘
                  : icon === "faTimeline"
                  ? faTimeline //타임라인 아이콘
                  : icon === "faAddressCard"
                  ? faAddressCard //소개 아이콘
                  : null
              }
            />

            <span className="ml-2 text-sm">{text}</span>
          </div>
          {/* 선택된 카테고리와 url 의 path가 일치하면, 주황색 바로 표시 */}
          {isClickedCategory === link ? (
            <div className="bg-orange-400 h-[2px] mt-3 translate-y-[1.6px]"></div>
          ) : null}
        </div>
      </Link>
    </>
  );
};

export default HeaderCategory;
