import React from "react";
import styles from "./card.module.css";
import { useSkillStore } from "../../../store/SkillStore";
import CloseBtnModal from "../btn/CloseBtnModal";

const CardContent = ({ isSelected }) => {
  const { selectedView, setSelectedCard } = useSkillStore();

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
      <div className="relative bg-inherit h-[466px]">
        <div className="absolute left-0 top-0 bg-black opacity-70 w-full h-full"></div>
        <div className="absolute left-0 right-0 z-20 w-full h-full overflow-y-auto flex flex-col">
          <span>숙련도에 대한 설명</span>
          <span>관련 개발일지</span>
          <span>관련 프로젝트</span>
          <span>관련 학습도서</span>
          <span>관련 학습강의</span>
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
