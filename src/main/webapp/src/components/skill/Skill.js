import React, { useEffect, useState } from "react";

import Card from "./card/Card";

const cards = ["card1", "card2", "card3", "card4", "card5", "card6", "card7"];

const Skill = () => {
  // 활성화된 Card의 인덱스를 관리하는 상태
  const [selectedCard, setSelectedCard] = useState(null);

  // Card 클릭 핸들러
  const handleCardClick = (id) => {
    setSelectedCard(id); // 클릭된 Card의 인덱스로 상태 업데이트
  };

  useEffect(() => {
    // 카드 바깥을 클릭했을 때의 이벤트 핸들러
    const clickOutOfCard = (e) => {
      // 클릭된 타겟이 카드 내부가 아니라면
      if (!cards.some((cardId) => e.target.closest(`#${cardId}`))) {
        setSelectedCard(null);
      }
    };

    //카드 바깥을 클릭하면 setSelectedCard를 null로
    window.addEventListener("click", clickOutOfCard);

    return () => {
      window.removeEventListener("click", clickOutOfCard);
    };
  }, []);

  return (
    <div
      id="skillContainer"
      className="bg-dark text-white pl-5 min-h-screen flex justify-center"
    >
      <div className="grid grid-cols-3 place-items-center gap-10 mt-10">
        {cards.map((cardId) => (
          <div
            key={cardId}
            id={cardId}
            onClick={(e) => handleCardClick(e.currentTarget.id)}
            style={{
              zIndex: selectedCard === cardId ? 1000 : 1, // 클릭된 카드의 ID와 현재 상태를 비교
              position: "relative",
            }}
          >
            <Card selectedCard={selectedCard === cardId} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
