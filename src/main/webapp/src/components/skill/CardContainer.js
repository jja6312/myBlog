import React, { useEffect, useState } from "react";
import { useSkillStore } from "../../store/SkillStore";
import Card from "./card/Card";

const cards = [
  "card1",
  "card2",
  "card3",
  "card4",
  "card5",
  "card6",
  "card7",
  "card8",
  "card9",
  "card10",
  "card11",
  "card12",
  "card13",
  "card14",
  "card15",
  "card16",
  "card17",
];
const CardContainer = () => {
  const { selectedCard, setSelectedCard, selectedView } = useSkillStore();
  const [perNum, setPerNum] = useState(3);

  const handleCardClick = (id) => {
    if (selectedCard === null) {
      setSelectedCard(id);
    }

    const cardElement = document.getElementById(id);
    if (cardElement) {
      cardElement.scrollIntoView({
        behavior: "smooth", // 부드러운 스크롤 효과
        block: "center", // 뷰포트의 중앙에 위치
        inline: "nearest", // 가장 가까운 쪽으로 정렬
      });
    }
  };

  useEffect(() => {
    const clickOutOfCard = (e) => {
      if (!cards.some((cardId) => e.target.closest(`#${cardId}`))) {
        setSelectedCard(null);
      }
    };

    window.addEventListener("click", clickOutOfCard);

    return () => {
      window.removeEventListener("click", clickOutOfCard);
    };
  }, []);

  useEffect(() => {
    const substringBeforeEA = selectedView.substring(
      0,
      selectedView.indexOf("개") //'개' 이전까지 문자열 반환(3,6,12)
    );
    setPerNum(substringBeforeEA);
  }, [selectedView]);

  return (
    <div
      className={`grid grid-cols-${perNum} place-items-center mt-10
      ${perNum === "3" ? "gap-10" : perNum === "6" ? "gap-6" : "gap-1"}
      `}
    >
      {cards.map((cardId) => (
        <div
          key={cardId}
          id={cardId}
          onClick={(e) => handleCardClick(e.currentTarget.id)}
          style={{
            zIndex: selectedCard === cardId ? 1000 : 1,
            position: "relative",
          }}
        >
          <Card
            cardId={cardId}
            isSelected={selectedCard === cardId}
            setSelectedCard={setSelectedCard}
          />
        </div>
      ))}
    </div>
  );
};

export default CardContainer;
