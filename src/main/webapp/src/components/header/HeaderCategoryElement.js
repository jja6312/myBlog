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

const HeaderCategory = ({
  text,
  icon,
  link,
  isClickedCategory,
  setIsClickedCategory,
}) => {
  return (
    <>
      <Link to={link} onClick={() => setIsClickedCategory(link)}>
        <div className="flex-col mt-3 ">
          <div className="flex justify-evenly pl-3 pr-3 hover:text-gray-400 transition-all duration-150">
            <FontAwesomeIcon
              className="text-xl "
              icon={
                icon === "faHouse"
                  ? faHouse
                  : icon === "faStackOverflow"
                  ? faStackOverflow
                  : icon === "faPersonDigging"
                  ? faPersonDigging
                  : icon === "faKeyboard"
                  ? faKeyboard
                  : icon === "faYoutube"
                  ? faYoutube
                  : icon === "faBook"
                  ? faBook
                  : icon === "faHeadphones"
                  ? faHeadphones
                  : icon === "faTimeline"
                  ? faTimeline
                  : icon === "faAddressCard"
                  ? faAddressCard
                  : null
              }
            />

            <span className="ml-2 text-sm">{text}</span>
          </div>
          {isClickedCategory === link ? (
            <div className="bg-orange-400 h-[2px] mt-3 translate-y-[1.6px]"></div>
          ) : null}
        </div>
      </Link>
    </>
  );
};

export default HeaderCategory;
