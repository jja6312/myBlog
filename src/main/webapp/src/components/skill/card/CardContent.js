import React from "react";
import styles from "./card.module.css";
import { useSkillStore } from "../../../store/SkillStore";

const CardContent = ({ isSelected }) => {
  const { selectedView } = useSkillStore();

  return (
    <div
      className={`${styles.CardContentBG} absolute 
      ${
        selectedView === "3개씩 보기"
          ? "right-[-370px] top-[-155px]"
          : selectedView === "6개씩 보기"
          ? "right-[-480px] top-[-155px]"
          : selectedView === "12개씩 보기"
          ? "right-[-590px] top-[-155px]"
          : ""
      }
      
   
    ${styles.cardContents} ${
        isSelected
          ? `opacity-100 w-[500px] h-[620px]`
          : `opacity-0 w-[0px] h-[0px]`
      }`}
    >
      <div className="bg-inherit overflow-y-auto h-[620px]">
        ddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddd
      </div>
    </div>
  );
};

export default CardContent;
