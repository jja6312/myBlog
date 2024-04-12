import React, { useEffect, useState } from "react";

import hexagon from "../../devlog/hexagon.module.css";

const animationArray = [
  hexagon.opacityAnimationFast0,
  hexagon.opacityAnimationFast1,
  hexagon.opacityAnimationFast2,
  hexagon.opacityAnimationFast3,
  hexagon.opacityAnimationFast4,
  hexagon.opacityAnimationFast5,
  hexagon.opacityAnimationFast6,
];

const LoadingCard = ({ selectedView }) => {
  const [width, setWidth] = useState(220);
  const [height, setHeight] = useState(310);

  useEffect(() => {
    if (selectedView === "3개씩 보기") {
      setWidth(220);
      setHeight(310);
    } else if (selectedView === "6개씩 보기") {
      setWidth(110);
      setHeight(155);
    }
  }, [selectedView]);

  // selectedView 값에 따라 렌더링할 카드 수 결정
  const cardCount = selectedView === "6개씩 보기" ? 24 : 12;

  // Card컴포넌트의 틀을 이용하가 위한 가짜 데이터 배열 생성
  const items = Array.from({ length: cardCount }, (_, index) => ({
    id: index,
  }));

  return (
    <>
      {items.map((item) => (
        <div
          key={item.id}
          id={`id${item.id}`}
          style={{
            zIndex: 1,
            position: "relative",
            width: width,
            height: height,
          }}
        >
          <div
            id={`id${item.id}`}
            className={`
          w-full h-full bg-gray-700 absolute top-0 left-0 z-50
          ${animationArray[item.id % 7]}
          `}
          ></div>
        </div>
      ))}
    </>
  );
};

export default LoadingCard;
