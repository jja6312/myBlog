import React from "react";
import styles from "./card.module.css";

const CardContent = ({ isSelected }) => {
  return (
    <div
      className={`bg-gray-800 absolute right-[-370px] top-[-155px] 
   
    ${styles.cardContents} ${
        isSelected
          ? `opacity-100 w-[500px] h-[620px]`
          : `opacity-0 w-[0px] h-[0px]`
      }`}
    >
      <h1>Card Content</h1>
    </div>
  );
};

export default CardContent;
