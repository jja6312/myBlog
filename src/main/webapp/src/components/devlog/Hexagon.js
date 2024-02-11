import React from "react";
import styles from "./hexagon.module.css"; // CSS 모듈 임포트 경로가 정확한지 확인하세요.
import { useDevlogStore } from "../../store/DevlogStore";

const Hexagon = ({ imgSrc, writeAccount, writeItems, loadingIndex }) => {
  const { devlogWriteList, isLoading } = useDevlogStore();
  const { isSelected, setIsSelected } = useDevlogStore();

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
