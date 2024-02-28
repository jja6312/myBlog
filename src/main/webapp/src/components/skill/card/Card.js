import React, { useEffect, useRef } from "react";
import styles from "./card.module.css";

const Card = ({ selectedCard }) => {
  const containerRef = useRef(null);
  const overlayRef = useRef(null);
  const cardRef = useRef(null);

  const handleClick = () => {
    cardRef.current.classList.toggle(styles.cardActive);
  };

  useEffect(() => {
    if (selectedCard) {
      cardRef.current.classList.add(styles.cardActive);
    } else {
      cardRef.current.classList.remove(styles.cardActive);
    }
  }, [selectedCard]);

  const handleMouseMove = (e) => {
    // 마우스 이동 이벤트 핸들러 함수
    const { offsetX: x, offsetY: y } = e.nativeEvent; // 이벤트에서 x, y 좌표 추출
    const rotateY = (-1 / 5) * x + 20; // Y 축 회전값 계산
    const rotateX = (4 / 30) * y - 20; // X 축 회전값 계산

    overlayRef.current.style.backgroundPosition = `${1.5 * x + 1.5 * y}%`; // overlay 배경 위치 설정
    overlayRef.current.style.filter = `opacity(${x / 150}) brightness(1.2)`; // overlay 필터 설정

    containerRef.current.style.transform = `perspective(350px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`; // container 회전 및 원근 변환 설정
  };

  const handleMouseOut = () => {
    // overlayRef와 containerRef가 존재하는지 확인
    if (overlayRef.current && containerRef.current) {
      // overlay의 filter 속성을 변경하여 투명도를 0으로 설정
      overlayRef.current.style.filter = "opacity(0)";
      // container의 transform 속성을 변경하여 3D 회전을 초기화
      containerRef.current.style.transform =
        "perspective(350px) rotateY(0deg) rotateX(0deg)";
    }
  };

  return (
    <div
      className={styles.container}
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseOut={handleMouseOut}
      onClick={handleClick}
    >
      <div ref={overlayRef} className={styles.overlay}></div>
      <div ref={cardRef} className={styles.card}></div>
    </div>
  );
};

export default Card;
