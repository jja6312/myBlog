import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-regular-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { useSkillStore } from "../../../store/SkillStore";

const SkillCheckBox = ({ category }) => {
  const {
    checkBoxes,
    setCheckBoxes,
    setCheckBoxNameAll,
    setCheckBoxesTrue,
    setCheckBoxesFalse,
  } = useSkillStore();

  const handleCheckBoxClick = () => {
    if (category === "All" && checkBoxes["All"] === false) {
      //모든 카테고리를 true로 check
      setCheckBoxesTrue();
      return;
    } else if (category === "All" && checkBoxes["All"] === true) {
      //모든 카테고리를 false로 check
      setCheckBoxesFalse();
      return;
    }
    setCheckBoxes(category); // category를 전달하면 해당 category에 대해 반대 boolean으로 스위칭시킴.
  };

  useEffect(() => {
    // "All" 체크박스를 제외한 나머지 체크박스 상태 확인
    const allCheckedState = Object.entries(checkBoxes).every(([key, value]) => {
      if (key === "All") return true; // "All"은 검사에서 제외
      return value;
    });

    // "All" 체크박스 상태가 현재 값과 다를 경우에만 업데이트
    if (checkBoxes["All"] !== allCheckedState) {
      setCheckBoxNameAll(allCheckedState);
    }
  }, [checkBoxes, setCheckBoxNameAll]);

  return (
    <div
      className="flex justify-center items-center gap-2
    w-full h-[90%] 
    rounded-lg border-[#5b5b64] bg-[#2a2a2e]
    cursor-pointer
    hover:opacity-80
    "
      onClick={handleCheckBoxClick}
    >
      {checkBoxes[category] ? (
        <span className="text-[20px] text-yellow-200">
          <FontAwesomeIcon icon={faSquareCheck} />
        </span>
      ) : (
        <span className="text-[20px] text-white">
          <FontAwesomeIcon icon={faSquare} />
        </span>
      )}

      <span className="text-[15px]">{category}</span>
    </div>
  );
};

export default SkillCheckBox;
