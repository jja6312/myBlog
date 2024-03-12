import React, { useEffect, useRef, useState } from "react";
import styles from "./card.module.css";
import CardContent from "./CardContent";
import { useSkillStore } from "../../../store/SkillStore";
import CardDevlog from "./CardDevlog";

const Card = ({
  cardId,
  // createdAt,
  name,
  // strength,
  totalDuration,
  // type,
  // updatedAt,
  // weakness,
  writeThumbnail,
  selectedCard,
  categoryName,
}) => {
  const { selectedView, setSelectedCard } = useSkillStore();
  const cardRef = useRef(null);
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
    const targetId = e.currentTarget.id.includes("span-")
      ? e.currentTarget.id.split("-")[1]
      : e.currentTarget.id;
    setSelectedCard(targetId); // 선택된 카드의 id를 store에 저장
    if (selectedCard === targetId) setSelectedCard(null); // 선택된 카드의 id가 같으면 store에 저장된 id를 null로 바꿈(다시 클릭하면 선택 해제됨

    const cardElement = document.getElementById(targetId);
    if (cardElement) {
      cardElement.scrollIntoView({
        behavior: "smooth", // 부드러운 스크롤 효과
        block: "center", // 뷰포트의 중앙에 위치
        inline: "nearest", // 가장 가까운 쪽으로 정렬
      });
    }
  };

  const convertToFormat = (totalDuration) => {
    const minute = totalDuration / 60;
    let hour = Math.floor(minute / 60);
    let min = Math.floor(minute % 60);
    return `${hour}h ${min}m`;
  };

  useEffect(() => {
    setIsSelected(selectedCard === cardId);
  }, [selectedCard]);

  useEffect(() => {
    // 선택된 카드에 대한 스타일 적용
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
  const updateSize = () => {
    // 화면 너비에 따라 조건을 설정합니다.
    const isLargeScreen = window.innerWidth >= 1024;

    if (selectedView === "3개씩 보기") {
      if (isLargeScreen) {
        setWidth(220);
        setHeight(310);
      } else {
        setWidth(110);
        setHeight(155);
      }
    } else if (selectedView === "6개씩 보기") {
      if (isLargeScreen) {
        setWidth(110);
        setHeight(155);
      } else {
        setWidth(55);
        setHeight(77.5);
      }
    }
  };

  useEffect(() => {
    // 컴포넌트 마운트 시에 한 번 실행하고, 화면 크기가 변경될 때마다 업데이트
    updateSize();
    window.addEventListener("resize", updateSize);

    // 컴포넌트 언마운트 시 이벤트 리스너를 정리
    return () => window.removeEventListener("resize", updateSize);
  }, [selectedView]);

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
          ref={cardRef}
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
            <img src={writeThumbnail} className="w-full h-full"></img>
            {isSelected && (
              <div
                className={`w-[330px] h-[466px] bg-black absolute top-0 left-0 z-50 ${
                  isHovering ? "opacity-20" : "opacity-0"
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
        {/* 카드 제목 */}
        <span
          className={`absolute   text-black ${
            !isSelected && selectedView === "3개씩 보기"
              ? "lg:text-[20px] text-[10px] font-bold lg:top-[8px] top-[4px] lg:left-[26px] left-[13px]"
              : !isSelected && selectedView === "6개씩 보기"
              ? "lg:text-[9px] text-[4.5px] lg:top-[6px] top-[3px] lg:left-[14px] left-[7px]"
              : isSelected && selectedView === "3개씩 보기"
              ? `${styles.textSizeUp} font-extrabold lg:-top-[132px] -top-[66px] lg:-left-[232px] -left-[116px]`
              : isSelected && selectedView === "6개씩 보기"
              ? `${styles.textSizeUp} font-extrabold lg:-top-[132px] -top-[66px] lg:-left-[232px] -left-[116px]`
              : ""
          }
          
          
          `}
        >
          {name}
        </span>

        {/* 누적학습시간이 없을 때와 있을 때, 카드 내에 다른 div(text)표시. */}
        {convertToFormat(totalDuration) === "0h 0m" ? (
          <div
            id={`span-${cardId}`}
            onClick={handleClick}
            className={`w-80 absolute cursor-pointer
            
        
            ${
              !isSelected && selectedView === "3개씩 보기"
                ? "lg:bottom-[38px] lg:left-[24px] bottom-[19px] left-[12px]  lg:text-[16px] text-[8px]"
                : !isSelected && selectedView === "6개씩 보기"
                ? "lg:bottom-[20px] lg:left-[20px] bottom-[10px] left-[10px] lg:text-[7px] text-[3.5px]"
                : isSelected && selectedView === "3개씩 보기"
                ? `lg:-translate-x-[230px] lg:translate-y-[222px] -translate-x-[115px] translate-y-[111px] ${styles.textSizeUpMore}`
                : isSelected && selectedView === "6개씩 보기"
                ? `lg:-translate-x-[230px] lg:translate-y-[222px] -translate-x-[115px] translate-y-[111px] ${styles.textSizeUpMore}`
                : ""
            }

          z-40`}
          >
            <span className={`text-gray-700`}>
              {name === "Dart"
                ? "Flutter 학습 시간과 통합"
                : "블로그 개설보다 먼저 학습"}
            </span>
          </div>
        ) : (
          <div
            id={`span-${cardId}`}
            onClick={handleClick}
            className={`w-80 absolute flex flex-col cursor-pointer 
            ${
              !isSelected && selectedView === "3개씩 보기"
                ? "lg:bottom-6 lg:left-6 bottom-3 left-3 lg:text-[18px] text-[9px]"
                : !isSelected && selectedView === "6개씩 보기"
                ? "lg:bottom-3 lg:left-3 bottom-1.5 left-1.5 lg:text-[7px] text-[3.5px]"
                : isSelected
                ? `lg:-translate-x-[230px] lg:translate-y-[208px] -translate-x-[115px] translate-y-[104px] ${styles.textSizeUpMore}`
                : ""
            }
          
          z-40`}
          >
            <span className={`text-black`}>[누적 학습시간] </span>
            <span className="text-red-600 font-semibold">
              {convertToFormat(totalDuration)}
            </span>
          </div>
        )}
        <CardContent name={name} isSelected={isSelected}></CardContent>
        <div
          className={`absolute -left-[280px]  transition-all duration-200 
          ${
            isSelected && categoryName ? "flex opacity-100" : "hidden opacity-0"
          }
          ${
            selectedView === "3개씩 보기"
              ? "-bottom-[266px]"
              : selectedView === "6개씩 보기" && "-bottom-[420px]"
          }
          
          `}
        >
          <CardDevlog></CardDevlog>
        </div>
      </div>
    </div>
  );
};

export default Card;
