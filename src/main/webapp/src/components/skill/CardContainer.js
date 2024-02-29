import React, { useEffect } from "react";
import { useSkillStore } from "../../store/SkillStore";
import Card from "./card/Card";

const cards = ["card1", "card2", "card3", "card4", "card5", "card6", "card7"];
const CardContainer = () => {
  const { selectedCard, setSelectedCard } = useSkillStore();
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

  return (
    <div className="grid grid-cols-3 place-items-center gap-10 mt-10">
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
            isSelected={selectedCard === cardId}
            setSelectedCard={setSelectedCard}
          />
        </div>
      ))}
    </div>
  );
};

export default CardContainer;
