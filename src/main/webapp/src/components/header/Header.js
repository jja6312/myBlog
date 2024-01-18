import React, { useState } from "react";
import HeaderCategoryElement from "./HeaderCategoryElement";
import { Link } from "react-router-dom";
import HeaderCategories from "./HeaderCategories";
import MobileHeaderCategory from "../mobile/mobileHeader/MobileHeaderCategory";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div
        id="header"
        className="relative flex flex-col bg-darkDeep text-white text-sm border-b-2 border-gray-600 lg:text-xl xl:text-2xl"
      >
        <div className="flex justify-start items-center py-3 pl-3">
          <img
            className="w-10 h-10 md:w-15 md:h-15 md:ml-5 rounded-xl"
            src={process.env.PUBLIC_URL + "/image/test/logo.png"}
            alt="logo"
          />
          <Link to="/myBlog">
            <span className="text-[10px] sm:text-lg md:text-xl lg:text-2xl ml-6 font-semibold ">
              정지 안하는 정지안의 블로그🔥🔥🔥
            </span>
          </Link>
        </div>
        <HeaderCategories />
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
