import React from "react";
import hexagon from "./hexagon.module.css";

// 개발일지의 카테고리 기능을 하는 육각형 --[24.01.24 17:29 정지안]
const Hexagon = ({
  isSelected, // DevlogLeft에서 선택한 카테고리를 저장하는 state
  setIsSelected,
  imgSrc, //카테고리 이미지
  writeAccount, //카테고리별 글 개수
  id, //카테고리 식별자
}) => {
  return (
    <>
      {/* imgSrc를 전달받으면, writeAccount를 까만글씨. 전달받지 않으면 하얀글씨. */}
      <button
        className={`relative w-[7.3vw] h-[6.35vw] mt-[0.5vw] 
        ${hexagon.hexagon} 
        ${imgSrc ? "text-black" : "text-white"} 
        ${isSelected === id ? "opacity-100" : "opacity-50"}
        hover:opacity-100 hover:shadow-white transition-all ease-in-out duration-300 `}
        onClick={() => setIsSelected(id)}
      >
        <img
          alt=""
          className="object-cover w-full h-full"
          src={
            imgSrc //카테고리 이미지
              ? process.env.PUBLIC_URL + imgSrc
              : process.env.PUBLIC_URL + "/image/test/oops.png" //상위 컴포넌트에서 이미지를 전달하지 않았을 때 보여줄 이미지
          }
        ></img>
        {/* 카테고리별 글 개수 === writeAccount */}
        <span
          className="absolute top-2/3 left-1/2 -translate-x-1/2
        text-[1.2vw]
        "
        >
          ({writeAccount})
        </span>
      </button>
    </>
  );
};

export default Hexagon;
