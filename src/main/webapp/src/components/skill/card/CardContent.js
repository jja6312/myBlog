import React, { useEffect } from "react";
import styles from "./card.module.css";
import { useSkillStore } from "../../../store/SkillStore";
import CloseBtnModal from "../btn/CloseBtnModal";
import { formatCreatedAt } from "../../../util/formatCreatedAt";
import axios from "axios";

const CardContent = ({ isSelected, name }) => {
  const {
    selectedView,
    setSelectedCard,
    skillList,
    selectedCard,
    selectedSkill,
    setSelectedSkill,
    setDevlogWriteList,

    setIsLoadingCardDevlog,
  } = useSkillStore();

  useEffect(() => {
    setIsLoadingCardDevlog(true);
    // 선택된 카드의 카테고리 name으로 개발일지 불러오기
    if (isSelected) {
      axios
        .get(
          `http://localhost:8080/devlog/getDevlogWriteListByCategoryName?name=${name}`
        )
        .then((res) => {
          setDevlogWriteList(res.data);
          console.log("devlogWriteList", res.data);
          setIsLoadingCardDevlog(false);
        })
        .catch((err) => {
          console.log("err", err);
          setIsLoadingCardDevlog(false);
        });
    }

    //-----------------------------------------
    // 선택된 카드의 skill정보를 SkillList에서 filter
    if (isSelected && skillList.length > 0) {
      const filteredData = skillList.find(
        (skill) => `id${skill.id}` === selectedCard
      );
      console.log("filteredData", filteredData);

      setSelectedSkill(filteredData);
    } else {
      setSelectedSkill(null);
    }

    //-----------------------------------------
    //만약 카드가 선택 해제되면, 선택된 스킬별 개발일지를 초기화
    if (!isSelected) setDevlogWriteList([]);
  }, [isSelected]);

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
          className={`absolute left-0 right-0 z-20 w-full h-full pl-10 pt-10 pb-[16px] pr-2 ${
            isSelected ? "flex" : "hidden"
          }`}
        >
          <div className="overflow-y-auto flex flex-col pr-8">
            {
              <>
                <span className="text-yellow-400 text-xl">첫 만남</span>
                <span>
                  {selectedSkill && formatCreatedAt(selectedSkill.createdAt)}
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
