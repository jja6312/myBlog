import React from "react";
import { useStudyTimeStore } from "../../../../store/StudyTimeStore";

const ClickedDate = () => {
  const { clickedDate } = useStudyTimeStore();
  return (
    <div className="flex items-center">
      {clickedDate ? (
        <span className="text-green-300 text-xl p-4">{clickedDate}</span>
      ) : (
        <span className="text-yellow-400 text-xl p-4">
          날짜를 선택해 주세요.
        </span>
      )}

      {clickedDate && <span className="text-green-400 text-xl">선택됨</span>}
    </div>
  );
};

export default ClickedDate;
