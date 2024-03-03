import React, { useEffect } from "react";
import { useSkillStore } from "../../store/SkillStore";
import Card from "./card/Card";

const CardContainer = () => {
  const { selectedCard, selectedView, skillList, setSelectedCard } =
    useSkillStore();

  useEffect(() => {
    const clickOutOfCard = (e) => {
      if (!skillList.some((item) => e.target.closest(`#id${item.id}`))) {
        setSelectedCard(null);
      }
    };

    window.addEventListener("click", clickOutOfCard);

    return () => {
      window.removeEventListener("click", clickOutOfCard);
    };
  }, []);

  return (
    <div
      className={`grid 
      ${
        selectedView === "3개씩 보기"
          ? "gap-10 grid-cols-3"
          : selectedView === "6개씩 보기"
          ? "gap-6 grid-cols-6"
          : "gap-1 grid-cols-12"
      }
      place-items-center mt-10
      `}
    >
      {skillList.map((item) => (
        <div
          key={item.id}
          id={`id${item.id}`}
          style={{
            zIndex: selectedCard === item.id ? 1000 : 1,
            position: "relative",
          }}
        >
          <Card
            cardId={`id${item.id}`}
            createdAt={item.created_at}
            name={item.name}
            strength={item.strength}
            totalDuration={item.total_duration}
            type={item.type}
            updatedAt={item.updated_at}
            weakness={item.weakness}
            writeThumbnail={item.write_thumbnail} //이까지 카드 구성 요소
            selectedCard={selectedCard}
          />
        </div>
      ))}
    </div>
  );
};

export default CardContainer;
