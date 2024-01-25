import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons";
import { faPersonDigging } from "@fortawesome/free-solid-svg-icons";
import { faBrain } from "@fortawesome/free-solid-svg-icons";
import hexagon from "./hexagon.module.css";

// 개발일지의 오른쪽 영역으로, 선택된 카테고리의 하위 구성 및 필터기능 제공 --[24.01.24 16:47 정지안]
const DevlogRight = ({ isSelected, setIsSelected }) => {
  return (
    <div className="relative w-3/12 flex flex-col items-center">
      <span className="absolute  top-[1.7vw] right-[3vw] italic z-40 text-3xl">
        Filter
      </span>
      <span className="absolute  top-[4.8vw] right-[3vw] italic z-40 text-2xl text-gray-400">
        by Category
      </span>

      {/* 육각형모양 이미지. custom을 위해 컴포넌트에서 분리. Hexagon.start ------*/}
      <div className="absolute top-0 left-[2vw] z-30">
        <button
          className={`relative w-[9vw] h-[7.7vw] mt-[0.5vw] ${hexagon.hexagon}
        text-black
        
        hover:shadow-white transition-all ease-in-out duration-300 `}
        >
          <img
            alt=""
            className="object-cover w-full h-full"
            src={process.env.PUBLIC_URL + "/image/test/all.png"}
          ></img>
          <span
            className="absolute top-2/3 left-1/2 -translate-x-1/2
        text-[1.2vw]
        "
          >
            (341)
          </span>
        </button>
      </div>
      {/* Hexagon.end --------------------------------------------------------*/}

      {/* 필터 */}
      <div className="absolute top-[4.3vw] px-5 pt-[4vw] pb-[1vw] flex flex-col bg-gray-800 w-10/12 min-h-[50vh] rounded-lg text-lg">
        <div className="mt-[1vw]">
          <FontAwesomeIcon className="text-xl " icon={faPersonDigging} />
          <span> 프로젝트 / 트러블슈팅</span>
          <div className=" bg-gray-700 w-full max-h-32 p-2 mt-2 overflow-y-scroll flex flex-col">
            <span className="text-yellow-500 cursor-pointer hover:bg-gray-500 hover:text-white">
              (애견 연애/산책)flirdog (13)
            </span>
          </div>
        </div>

        <div className="mt-[1vw]">
          <FontAwesomeIcon className="text-xl " icon={faBook} />
          <span> 학습 도서 관련 글</span>
          <div className=" bg-gray-700 w-full max-h-32 p-2 mt-2 overflow-y-scroll flex flex-col">
            <span className="text-yellow-500 cursor-pointer hover:bg-gray-500 hover:text-white">
              Effective Java (1)
            </span>
            <span className="text-yellow-500 cursor-pointer hover:bg-gray-500 hover:text-white">
              자바의 정석 (2)
            </span>
          </div>
        </div>

        <div className="mt-[1vw]">
          <FontAwesomeIcon className="text-xl " icon={faHeadphones} />
          <span> 학습 강의 관련 글</span>
          <div className=" bg-gray-700 w-full max-h-32 p-2 mt-2 overflow-y-scroll flex flex-col">
            <span className="text-yellow-500 cursor-pointer hover:bg-gray-500 hover:text-white">
              김영한의 스프링부트 고급 (11)
            </span>
          </div>
        </div>

        <div className="mt-[1vw]">
          <FontAwesomeIcon className="text-xl " icon={faBrain} />
          <span> 개념 정리</span>
          <div className=" bg-gray-700 w-full max-h-32 p-2 mt-2 overflow-y-scroll flex flex-col">
            <span className="text-yellow-500 cursor-pointer hover:bg-gray-500 hover:text-white">
              운영체제(35)
            </span>
            <span className="text-yellow-500 cursor-pointer hover:bg-gray-500 hover:text-white">
              네트워크(33)
            </span>
            <span className="text-yellow-500 cursor-pointer hover:bg-gray-500 hover:text-white">
              알고리즘(13)
            </span>
            <span className="text-yellow-500 cursor-pointer hover:bg-gray-500 hover:text-white">
              aws(22)
            </span>
            <span className="text-yellow-500 cursor-pointer hover:bg-gray-500 hover:text-white">
              자바(33)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevlogRight;
