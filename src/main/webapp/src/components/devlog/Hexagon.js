import React from "react";
import styles from "./hexagon.module.css";
import { useDevlogStore } from "../../store/DevlogStore";

// 개발일지의 카테고리 기능을 하는 육각형 --[24.01.26 17:29 정지안]
const Hexagon = ({
  imgSrc, //카테고리 이미지
  writeAccount, //카테고리별 글 개수
  writeItems, //카테고리 식별자
  loadingIndex,
}) => {
  const { isLoading, isSelected, setIsSelected, devlogWriteList } =
    useDevlogStore();
  const animationClass = styles[`opacityAnimation-${loadingIndex}`];

  return (
    <>
      <button
        className={`relative w-[7.3vw] h-[6.35vw] mt-[0.5vw] 
        ${styles.hexagon} 
        ${isSelected === writeItems.categoryName ? "opacity-100" : "opacity-50"}
        hover:opacity-100  transition-all ease-in-out duration-300 ${
          isLoading && !devlogWriteList.length && animationClass
        }`}
        onClick={() => setIsSelected(writeItems.categoryName)}
      >
        <img
          alt=""
          className="object-cover w-full h-full"
          src={
            imgSrc ? imgSrc : process.env.PUBLIC_URL + "/image/test/oops.png"
          }
        ></img>
        <div className="absolute top-2/3 left-1/2 -translate-x-1/2 text-[1.2vw] text-black bg-white/50 rounded-full w-full">
          <span className="opacity-100 text-black">{writeAccount}</span>
        </div>
      </button>
    </>
  );
};

export default Hexagon;
