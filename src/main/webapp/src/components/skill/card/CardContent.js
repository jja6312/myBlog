import React, { useEffect } from "react";
import styles from "./card.module.css";
import { useSkillStore } from "../../../store/SkillStore";
import CloseBtnModal from "../btn/CloseBtnModal";
import { formatCreatedAt } from "../../../util/formatCreatedAt";

const CardContent = ({ isSelected }) => {
  const {
    selectedView,
    setSelectedCard,
    skillList,
    selectedCard,
    selectedSkill,
    setSelectedSkill,
  } = useSkillStore();

  useEffect(() => {
    if (isSelected && skillList.length > 0) {
      const filteredData = skillList.find(
        (skill) => `id${skill.id}` === selectedCard
      );
      console.log("filteredData", filteredData);

      setSelectedSkill(filteredData);
    } else {
      setSelectedSkill(null);
    }
    console.log("selectedSkill", selectedSkill);
  }, [isSelected]);

  useEffect(() => {
    if (isSelected) {
      console.log(selectedSkill);
    }
  }, [selectedSkill]);

  return (
    <div
      className={`${styles.CardContentBG} absolute 
      ${
        selectedView === "3개씩 보기"
          ? "right-[-230px] top-[-155px]"
          : selectedView === "6개씩 보기"
          ? "right-[-340px] top-[-155px]"
          : selectedView === "12개씩 보기"
          ? "right-[-395px] top-[-155px]"
          : ""
      }
      
   
    ${styles.cardContents} ${
        isSelected
          ? `opacity-100 w-[400px] h-[466px]`
          : `opacity-0 w-[0px] h-[0px]`
      }`}
    >
      <div className="relative bg-inherit h-[466px] ">
        <div className="absolute left-0 top-0 bg-black opacity-50 w-full h-full "></div>
        <div
          className={`absolute left-0 right-0 z-20 w-full h-full   p-10 ${
            isSelected ? "flex" : "hidden"
          }`}
        >
          <div className="overflow-y-auto flex flex-col">
            {
              <>
                <span className="text-yellow-400 text-xl">첫 만남</span>
                <span>
                  {selectedSkill && formatCreatedAt(selectedSkill.created_at)}
                </span>
                <br></br>
              </>
            }
            {
              <>
                <span className="text-yellow-400 text-xl">
                  얼만큼 이해하고 있나요?
                </span>
                <span className="whitespace-pre-wrap">
                  {selectedSkill && selectedSkill.strength}
                </span>
                <br></br>
              </>
            }
            {
              <>
                <span className="text-yellow-400 text-xl">부족한 부분</span>
                <span className="whitespace-pre-wrap">
                  {selectedSkill && selectedSkill.weakness}
                </span>
                <br></br>
              </>
            }
            {<span className="text-yellow-400 text-xl">관련된 개발일지</span>}
            {/* {(<span>관련된 프로젝트</span>)}
            {(<span>관련된 학습도서</span>)}
            {(<span>관련된 학습강의</span>)} */}
          </div>
        </div>
        {/* 닫기버튼 */}
        <div onClick={() => setSelectedCard(null)}>
          <CloseBtnModal></CloseBtnModal>
        </div>
      </div>
    </div>
  );
};

export default CardContent;
