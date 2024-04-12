import React, { useEffect } from "react";
import { useSkillStore } from "../../store/SkillStore";
import Card from "./card/Card";
import LoadingCard from "./loading/LoadingCard";

const CardContainer = () => {
  const { selectedCard, selectedView, skillList, setSelectedCard, isLoading } =
    useSkillStore();

  //카드 외의 다른 곳을 클릭했을 때, 카드를 닫아주는 useEffect
  useEffect(() => {
    console.log("selectedCard:", selectedCard);
    if (selectedCard === null) return;

    const clickOutOfCard = (e) => {
      if (!skillList.some((item) => e.target.closest(`#id${item.id}`))) {
        setSelectedCard(null);
      }
    };

    window.addEventListener("click", clickOutOfCard);

    return () => {
      window.removeEventListener("click", clickOutOfCard);
    };
  }, [selectedCard]);

  return (
    <div
      className={`grid 
      mt-10

      ${
        selectedView === "3개씩 보기"
          ? "gap-10 grid-cols-3"
          : selectedView === "6개씩 보기"
          ? "gap-6 grid-cols-6"
          : "gap-1 grid-cols-12"
      }
      place-items-center 
      `}
    >
      {isLoading && <LoadingCard selectedView={selectedView}></LoadingCard>}
      {!isLoading &&
        skillList.map((item) => (
          <div
            key={item.id}
            id={`id${item.id}`}
            style={{
              zIndex: selectedCard === `id${item.id}` ? 1000 : 1,
              position: "relative",
            }}
          >
            <Card
              cardId={`id${item.id}`}
              createdAt={item.createdAt}
              name={item.name}
              strength={item.strength}
              totalDuration={item.totalDuration}
              type={item.type}
              updatedAt={item.updatedAt}
              weakness={item.weakness}
              writeThumbnail={item.writeThumbnail} //이까지 카드 구성 요소
              selectedCard={selectedCard}
              categoryName={item.categoryName} //카드 클릭시 개발일지 div를 빠르게 띄우기 위해 검사로직에 필요.(null이면 띄우지 않음)
            />
          </div>
        ))}
    </div>
  );
};

export default CardContainer;
