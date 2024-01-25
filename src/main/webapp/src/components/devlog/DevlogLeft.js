import React from "react";
import Hexagon from "./Hexagon";

// 개발일지의 카테고리 선택 페이지 [24.01.24 15:50 정지안]
//┌--------------------------------------------------------------------------------┐
//| 꿀벌이 공간을 효율적으로 활용한 육각형 벌집에서 애벌레를 키우듯이,                  |
//| 나만의 효율적인 방식을 찾아 개발 지식을 튼튼하게 기르고싶다는 마음으로 디자인되었다. |
//└-------------------------------------------------------------------------------┘

const DevlogLeft = ({ isSelected, setIsSelected }) => {
  return (
    <div className="relative w-[25vw] flex justify-center pb-10">
      <span className="absolute top-7 right-8 text-3xl italic">Categories</span>
      {/* 세로로 나열된 육각형줄 4개 중 1번째 */}
      <div className="w-1/4 flex flex-col ">
        {/* 육각형 모양의 이미지 컴포넌트 */}
        <Hexagon
          isSelected={isSelected}
          setIsSelected={setIsSelected}
          id="1"
          imgSrc="/image/test/all.png"
          writeAccount="341"
        />
        <Hexagon
          isSelected={isSelected}
          setIsSelected={setIsSelected}
          id="2"
          imgSrc="/image/test/spring.png"
          writeAccount="75"
        />
        <Hexagon
          isSelected={isSelected}
          setIsSelected={setIsSelected}
          id="3"
          imgSrc="/image/test/kuber.png"
          writeAccount="47"
        />
        <Hexagon
          isSelected={isSelected}
          setIsSelected={setIsSelected}
          id="4"
          imgSrc=""
          writeAccount="Fill me"
        />
        <Hexagon
          isSelected={isSelected}
          setIsSelected={setIsSelected}
          id="5"
          imgSrc=""
          writeAccount="Fill me"
        />
        <Hexagon
          isSelected={isSelected}
          setIsSelected={setIsSelected}
          id="6"
          imgSrc=""
          writeAccount="Fill me"
        />
      </div>
      {/* 세로로 나열된 육각형줄 4개 중 2번째 */}
      <div className="w-1/4 flex flex-col mt-[3.45vw] -translate-x-[0.5vw]">
        <Hexagon
          isSelected={isSelected}
          setIsSelected={setIsSelected}
          id="7"
          imgSrc="/image/test/docker.png"
          writeAccount="73"
        />
        <Hexagon
          isSelected={isSelected}
          setIsSelected={setIsSelected}
          id="8"
          imgSrc="/image/test/java.png"
          writeAccount="34"
        />
        <Hexagon
          isSelected={isSelected}
          setIsSelected={setIsSelected}
          id="9"
          imgSrc=""
          writeAccount="Fill me"
        />
        <Hexagon
          isSelected={isSelected}
          setIsSelected={setIsSelected}
          id="10"
          imgSrc=""
          writeAccount="Fill me"
        />
        <Hexagon
          isSelected={isSelected}
          setIsSelected={setIsSelected}
          id="11"
          imgSrc=""
          writeAccount="Fill me"
        />
        <Hexagon
          isSelected={isSelected}
          setIsSelected={setIsSelected}
          id="12"
          imgSrc=""
          writeAccount="Fill me"
        />
      </div>
      {/* 세로로 나열된 육각형줄 4개 중 3번째 */}
      <div className="w-1/4 flex flex-col mt-[6.9vw] -translate-x-[1vw]">
        <Hexagon
          isSelected={isSelected}
          setIsSelected={setIsSelected}
          id="13"
          imgSrc=""
          writeAccount="Fill me"
        />
        <Hexagon
          isSelected={isSelected}
          setIsSelected={setIsSelected}
          id="14"
          imgSrc=""
          writeAccount="Fill me"
        />
        <Hexagon
          isSelected={isSelected}
          setIsSelected={setIsSelected}
          id="15"
          imgSrc=""
          writeAccount="Fill me"
        />
        <Hexagon
          isSelected={isSelected}
          setIsSelected={setIsSelected}
          id="16"
          imgSrc=""
          writeAccount="Fill me"
        />
        <Hexagon
          isSelected={isSelected}
          setIsSelected={setIsSelected}
          id="17"
          imgSrc=""
          writeAccount="Fill me"
        />
        <Hexagon
          isSelected={isSelected}
          setIsSelected={setIsSelected}
          id="18"
          imgSrc=""
          writeAccount="Fill me"
        />
      </div>
      {/* 세로로 나열된 육각형줄 4개 중 4번째 */}
      <div className="w-1/4 flex flex-col mt-[10.35vw] -translate-x-[1.5vw]">
        <Hexagon
          isSelected={isSelected}
          setIsSelected={setIsSelected}
          id="19"
          imgSrc=""
          writeAccount="Fill me"
        />
        <Hexagon
          isSelected={isSelected}
          setIsSelected={setIsSelected}
          id="20"
          imgSrc=""
          writeAccount="Fill me"
        />
        <Hexagon
          isSelected={isSelected}
          setIsSelected={setIsSelected}
          id="21"
          imgSrc=""
          writeAccount="Fill me"
        />
        <Hexagon
          isSelected={isSelected}
          setIsSelected={setIsSelected}
          id="22"
          imgSrc=""
          writeAccount="Fill me"
        />
        <Hexagon
          isSelected={isSelected}
          setIsSelected={setIsSelected}
          id="23"
          imgSrc=""
          writeAccount="Fill me"
        />
        <Hexagon
          isSelected={isSelected}
          setIsSelected={setIsSelected}
          id="24"
          imgSrc=""
          writeAccount="Fill me"
        />
      </div>
    </div>
  );
};

export default DevlogLeft;
