import React, { useState } from "react";
import HeaderCategoryElement from "./HeaderCategoryElement";
import { Link } from "react-router-dom";
import HeaderCategories from "./HeaderCategories";
import MobileHeaderCategory from "../mobile/mobileHeader/MobileHeaderCategory";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

// 헤더 --[24.01.24 17:43 정지안]
const Header = () => {
  const location = useLocation(); // 현재 url에 따라 선택된 헤더의 카테고리를 시각적으로 표시하기 위함
  const [isClickedCategory, setIsClickedCategory] = useState(location.pathname); //새로고침 했을 때 url의 path를 기본값으로 설정
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); //모바일에선 헤더를 드랍다운으로 표시

  // 모바일에서 메뉴아이콘을 누르면 드랍다운 state 변경
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div
        id="header"
        className="relative flex flex-col bg-darkDeep text-white text-sm border-b-2 border-gray-600 lg:text-xl xl:text-2xl"
      >
        {/* 블로그 이름 */}
        <div className="flex justify-start items-center py-3 pl-3">
          <img
            className="w-10 h-10 md:w-15 md:h-15 md:ml-5 rounded-xl"
            src={process.env.PUBLIC_URL + "/image/test/logo.png"}
            alt="logo"
          />
          <Link to="/" onClick={() => setIsClickedCategory("/")}>
            <span className="text-[10px] sm:text-lg md:text-xl lg:text-2xl ml-6 font-semibold ">
              정지 안하는 정지안의 블로그🔥🔥🔥
            </span>
          </Link>
        </div>
        {/* 헤더 카테고리들 */}
        <HeaderCategories
          isClickedCategory={isClickedCategory}
          setIsClickedCategory={setIsClickedCategory}
        />

        {/* 모바일: 헤더 카테고리들 */}
        <div id="mobile">
          <div className="relative xl:hidden">
            <MobileHeaderCategory
              isDropdownOpen={isDropdownOpen}
              setIsDropdownOpen={setIsDropdownOpen}
            />
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-5 xl:hidden">
            <FontAwesomeIcon
              size="xl"
              icon={faBars}
              onClick={toggleDropdown}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
