import React, { useRef } from "react";
import styles from "./card.module.css";

const Card = () => {
  const containerRef = useRef(null);
  const overlayRef = useRef(null);

  const handleMouseMove = (e) => {
    const { offsetX: x, offsetY: y } = e.nativeEvent;
    const rotateY = (-1 / 5) * x + 20;
    const rotateX = (4 / 30) * y - 20;

    if (overlayRef.current && containerRef.current) {
      overlayRef.current.style.backgroundPosition = `${x / 5 + y / 5}%`;
      overlayRef.current.style.filter = `opacity(${x / 200}) brightness(1.2)`;

      containerRef.current.style.transform = `perspective(350px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }
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
    >
      <div className={styles.overlay} ref={overlayRef}></div>
      <div className={styles.card}></div>
    </div>
  );
};

export default Card;
