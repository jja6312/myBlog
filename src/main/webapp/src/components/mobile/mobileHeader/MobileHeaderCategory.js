import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faStackOverflow } from "@fortawesome/free-brands-svg-icons";
import { faProjectDiagram } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faChalkboardTeacher } from "@fortawesome/free-solid-svg-icons";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const MobileHeaderCategory = ({ isDropdownOpen, setIsDropdownOpen }) => {
  return (
    <div>
      <div
        className={`text-2xl gap-1 bg-dark z-50 ${
          isDropdownOpen ? "max-h-screen" : "max-h-0"
        } overflow-hidden transition-max-height duration-200 ease-in-out flex flex-col absolute left-0 right-0 shadow-md mt-2`}
      >
        <Link
          to="/myBlog"
          className="flex px-4 py-2 bg-dark hover:bg-darkDeep hover:text-gray-500"
          onClick={() => setIsDropdownOpen(false)}
        >
          <FontAwesomeIcon icon={faHome} />
          <span className="ml-2">홈</span>
        </Link>

        <Link
          to="/skill"
          className="flex px-4 py-2 bg-dark hover:bg-darkDeep hover:text-gray-500"
          onClick={() => setIsDropdownOpen(false)}
        >
          <FontAwesomeIcon icon={faStackOverflow} />
          <span className="ml-2">기술스택</span>
        </Link>

        <Link
          to="/project"
          className="flex px-4 py-2 bg-dark hover:bg-darkDeep hover:text-gray-500"
          onClick={() => setIsDropdownOpen(false)}
        >
          <FontAwesomeIcon icon={faProjectDiagram} />
          <span className="ml-2">프로젝트</span>
        </Link>

        <Link
          to="/devlog"
          className="flex px-4 py-2 bg-dark hover:bg-darkDeep hover:text-gray-500"
          onClick={() => setIsDropdownOpen(false)}
        >
          <FontAwesomeIcon icon={faBook} />
          <span className="ml-2">개발일지</span>
        </Link>

        <Link
          to="/youtube"
          className="flex px-4 py-2 bg-dark hover:bg-darkDeep hover:text-gray-500"
          onClick={() => setIsDropdownOpen(false)}
        >
          <FontAwesomeIcon icon={faChalkboardTeacher} />
          <span className="ml-2">유튜브 활동</span>
        </Link>

        <Link
          to="/book"
          className="flex px-4 py-2 bg-dark hover:bg-darkDeep hover:text-gray-500"
          onClick={() => setIsDropdownOpen(false)}
        >
          <FontAwesomeIcon icon={faBook} />
          <span className="ml-2">학습 도서</span>
        </Link>

        <Link
          to="/video"
          className="flex px-4 py-2 bg-dark hover:bg-darkDeep hover:text-gray-500"
          onClick={() => setIsDropdownOpen(false)}
        >
          <FontAwesomeIcon icon={faCalendarAlt} />
          <span className="ml-2">학습 강의</span>
        </Link>

        <Link
          to="/timeline"
          className="flex px-4 py-2 bg-dark hover:bg-darkDeep hover:text-gray-500"
          onClick={() => setIsDropdownOpen(false)}
        >
          <FontAwesomeIcon icon={faCalendarAlt} />
          <span className="ml-2">타임라인</span>
        </Link>

        <Link
          to="/about"
          className="flex px-4 py-2 bg-dark hover:bg-darkDeep hover:text-gray-500"
          onClick={() => setIsDropdownOpen(false)}
        >
          <FontAwesomeIcon icon={faAddressCard} />
          <span className="ml-2">소개</span>
        </Link>
      </div>
    </div>
  );
};

export default MobileHeaderCategory;
