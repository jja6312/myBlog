import React, { useEffect, useRef, useState } from "react";
import styles from "./card.module.css";
import CardContent from "./CardContent";
import { useSkillStore } from "../../../store/SkillStore";

const Card = ({
  cardId,
  // createdAt,
  // name,
  // strength,
  totalDuration,
  // type,
  // updatedAt,
  // weakness,
  writeThumbnail,
  selectedCard,
}) => {
  const { selectedView, setSelectedCard } = useSkillStore();
  const containerRef = useRef(null);
  const overlayRef = useRef(null);
  const cardRefFront = useRef(null);
  const cardRefBack = useRef(null);
  const textDurationRef = useRef(null);
  const [width, setWidth] = useState(220);
  const [height, setHeight] = useState(310);
  const [isHovering, setIsHovering] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = (e) => {
    initCardDegree(); //클릭했을 때 휘어진 카드를 똑바로 돌려놓기 위한 함수
    textDurationRef.current.classList.add(styles.hiddenClass); // 카드를 클릭했을때 글자를 바로 숨기기 위해 hiddenClass를 추가

    setSelectedCard(e.currentTarget.id); // 선택된 카드의 id를 store에 저장
    if (selectedCard === e.currentTarget.id) setSelectedCard(null); // 선택된 카드의 id가 같으면 store에 저장된 id를 null로 바꿈(다시 클릭하면 선택 해제됨

    const cardElement = document.getElementById(e.currentTarget.id);
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
    if (isSelected) {
      cardRefFront.current.classList.add(styles.cardActive);
      cardRefBack.current.classList.add(styles.cardActive);
      overlayRef.current.classList.add(styles.overlayActive);
    } else {
      cardRefFront.current.classList.remove(styles.cardActive);
      cardRefBack.current.classList.remove(styles.cardActive);
      overlayRef.current.classList.remove(styles.overlayActive);
    }

    // 카드를 클릭했을때 글자가 서서히 보이게하기 위해 cardRefFront의  hiddenClass를 제거해준다.
    if (isSelected) {
      //카드가 돌아가는 시간 0.2초만큼 timeout
      setTimeout(() => {
        textDurationRef.current.classList.remove(styles.hiddenClass);
      }, 400);
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
        {/* <span>{cardId}</span>
          <span>{name}</span>
          <span>{strength}</span> */}

        {convertToFormat(totalDuration) === "0h 0m" ? (
          <div
            className={`w-80 absolute
        ${selectedView === "3개씩 보기" ? "bottom-9 left-6" : "bottom-3 left-3"}
        ${isSelected && "-translate-x-[267px] -translate-y-[20px]"}
        z-40`}
          >
            <span
              ref={textDurationRef}
              className={`text-gray-500
            ${
              isSelected
                ? `text-[24px]`
                : selectedView === "6개씩 보기" && "text-[7px]"
            }`}
            >
              학습시간이 추적되지 않음
            </span>
          </div>
        ) : (
          <div
            className={`w-80 absolute 
          ${
            selectedView === "3개씩 보기"
              ? "bottom-9 left-6"
              : "bottom-3 left-3"
          }
          ${isSelected && "-translate-x-[265px] -translate-y-[20px]"}
          z-40`}
          >
            <span
              className={`text-black ${
                isSelected
                  ? "text-[22px] "
                  : selectedView === "6개씩 보기" && "text-[7px]"
              }`}
            >
              누적 학습시간:{" "}
            </span>
            <span
              className={`text-red-600 font-semibold text-[17px]
             ${
               isSelected
                 ? "text-[26px]"
                 : selectedView === "6개씩 보기" && "text-[10px]"
             }`}
            >
              {convertToFormat(totalDuration)}
            </span>
          </div>
        )}

        {/* <span>{type}</span>
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
