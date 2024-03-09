import React from "react";
import CardContentDevlogListElement from "./CardContentDevlogListElement";
import { useSkillStore } from "../../../store/SkillStore";
import LoadingCardDevlog from "../loading/LoadingCardDevlog";

const CardDevlog = () => {
  const { devlogWriteList, isLoadingCardDevlog } = useSkillStore();
  return (
    <div className="w-[730px] h-[265px] bg-[#39393E] border-8 border-[#4B5563] overflow-y-auto p-4">
      <>
        {/* 로딩 */}
        {isLoadingCardDevlog && <LoadingCardDevlog></LoadingCardDevlog>}

        {/* 개발일지 */}
        {devlogWriteList.length > 0 && (
          <span className="text-yellow-400 text-xl">관련된 개발일지</span>
        )}

        {[...devlogWriteList].reverse().map((item) => (
          <CardContentDevlogListElement
            key={item.id}
            categoryName={item.categoryName}
            title={item.title}
            createdAt={item.createdAt}
            topic={item.topic}
            tagName={item.tagName}
            notionPageId={item.notionPageId}
            writeThumbnail={item.writeThumbnail}
          />
        ))}
      </>
    </div>
  );
};

export default CardDevlog;
