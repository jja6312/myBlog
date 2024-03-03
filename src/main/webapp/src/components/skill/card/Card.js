import React, { useEffect, useRef, useState } from "react";
import styles from "./card.module.css";
import CardContent from "./CardContent";
import { useSkillStore } from "../../../store/SkillStore";

const Card = ({
  cardId,
  // createdAt,
  // name,
  // strength,
  // totalDuration,
  // type,
  // updatedAt,
  // weakness,
  // writeThumbnail,
  selectedCard,
}) => {
  const { selectedView, setSelectedCard } = useSkillStore();
  const containerRef = useRef(null);
  const overlayRef = useRef(null);
  const cardRefFront = useRef(null);
  const cardRefBack = useRef(null);
  const [width, setWidth] = useState(220);
  const [height, setHeight] = useState(310);
  const [isHovering, setIsHovering] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = (e) => {
    initCardDegree(); //클릭했을 때 휘어진 카드를 똑바로 돌려놓기 위한 함수
    // cardRefFront.current.classList.toggle(styles.cardActive);
    // cardRefBack.current.classList.toggle(styles.cardActive);
    // overlayRef.current.classList.toggle(styles.overlayActive);
    if (selectedCard === null) {
      setSelectedCard(e.currentTarget.id);
    } else {
      setSelectedCard(null);
    }

    const cardElement = document.getElementById(e.currentTarget.id);
    if (cardElement) {
      cardElement.scrollIntoView({
        behavior: "smooth", // 부드러운 스크롤 효과
        block: "center", // 뷰포트의 중앙에 위치
        inline: "nearest", // 가장 가까운 쪽으로 정렬
      });
    }
  };

  useEffect(() => {
    setIsSelected(selectedCard === cardId);
  }, [selectedCard]);

  useEffect(() => {
    if (isSelected) {
      cardRefFront.current.classList.add(styles.cardActive);
      cardRefBack.current.classList.add(styles.cardActive);
      overlayRef.current.classList.add(styles.overlayActive);
    } else {
      cardRefFront.current.classList.remove(styles.cardActive);
      cardRefBack.current.classList.remove(styles.cardActive);
      overlayRef.current.classList.remove(styles.overlayActive);
    }
  }, [isSelected]);

  useEffect(() => {
    if (selectedView === "3개씩 보기") {
      setWidth(220);
      setHeight(310);
    } else if (selectedView === "6개씩 보기") {
      setWidth(110);
      setHeight(155);
    } else if (selectedView === "12개씩 보기") {
      setWidth(55);
      setHeight(77.5);
    }
  }, [selectedView]);

  const handleMouseMove = (e) => {
    // 마우스 이동 이벤트 핸들러 함수
    const { offsetX: x, offsetY: y } = e.nativeEvent; // 이벤트에서 x, y 좌표 추출
    const rotateY = (-1 / 5) * x + 20; // Y 축 회전값 계산
    const rotateX = (4 / 30) * y - 20; // X 축 회전값 계산

    overlayRef.current.style.backgroundPosition = `${1.5 * x + 1.5 * y}%`; // overlay 배경 위치 설정
    overlayRef.current.style.filter = `opacity(${x / 150}) brightness(1.2)`; // overlay 필터 설정

    containerRef.current.style.transform = `perspective(350px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`; // container 회전 및 원근 변환 설정
  };

  const initCardDegree = () => {
    containerRef.current.style.transform = `perspective(350px) rotateX(0deg) rotateY(0deg)`; // container 회전 및 원근 변환 설정
    overlayRef.current.style.filter = "opacity(0)";
    containerRef.current.style.perspective = "350px";
  };

  return (
    <div className="flex">
      <div
        className={`${styles.container}`}
        style={{ width: width, height: height }}
        ref={containerRef}
        onMouseMove={(e) => {
          if (isSelected) {
            initCardDegree();
          } else {
            handleMouseMove(e);
          }
        }}
        onMouseOut={initCardDegree}
      >
        <div
          id={cardId}
          className="cursor-pointer"
          onClick={handleClick}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div
            ref={overlayRef}
            className={styles.overlay}
            style={{ width: width, height: height }}
          ></div>
          <div
            ref={cardRefFront}
            className={`${styles.card} ${styles.cardFront} overflow-hidden relative`}
            style={{ width: width, height: height }}
          >
            {isSelected && (
              <div
                className={`w-[330px] h-[466px] bg-black z-50 ${
                  isHovering ? "opacity-10" : "opacity-0"
                }`}
              ></div>
            )}
          </div>
        </div>
        <div
          ref={cardRefBack}
          className={`${styles.card} ${styles.cardBack}`}
          style={{ width: width, height: height }}
        ></div>
        {/* <span>{cardId}</span>
          <span>{name}</span>
          <span>{strength}</span>
          <span>{totalDuration}</span>
          <span>{type}</span>
          <span>{updatedAt}</span>
          <span>{weakness}</span>
          <img
            src={writeThumbnail}
            className="w-full h-full object-cover"
            alt="thumbnail"
          />
          <span>{createdAt}</span> */}
        <CardContent isSelected={isSelected}></CardContent>
      </div>
    </div>
  );
};

export default Card;
