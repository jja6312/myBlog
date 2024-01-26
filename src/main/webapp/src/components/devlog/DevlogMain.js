import React from "react";
import DevlogListElement from "./DevlogListElement";
import DevlogWriteBtn from "./DevlogWriteBtn";
import { formatCreatedAt } from "../formatCreatedAt";

// 개발일지의 가운데 영역으로, 개발일지 목록을 표시하는 페이지 --[24.01.24 16:47 정지안]
const DevlogMain = ({
  isSelected,
  selectedDevlogWriteList,
  devlogWriteList,
}) => {
  return (
    <div
      className=" bg-darkDeep text-white flex flex-col items-center px-5 min-h-screen 
      w-10/12
      md:w-6/12
      "
    >
      {/* 글쓰기 버튼 */}
      <DevlogWriteBtn></DevlogWriteBtn>

      <div className="text-[8px] flex flex-col md:text-sm mt-10 w-full">
        <span className=" font-semibold">
          {/* 카테고리이름 */}
          {isSelected}
          {/* 게시글 수 */}(
          {isSelected === "전체 글"
            ? devlogWriteList && devlogWriteList.length
            : selectedDevlogWriteList && selectedDevlogWriteList.length}
          )
        </span>
        {/* 하단, 개발일지 게시글 */}
        <div className="flex flex-col w-full">
          {isSelected === "전체 글"
            ? devlogWriteList.length > 0 &&
              devlogWriteList.map((devlog) => (
                <DevlogListElement
                  title={devlog.title}
                  createdAt={formatCreatedAt(devlog.createdAt)}
                  category={devlog.category.name}
                  tag={devlog.tag.name}
                  topic={devlog.topic}
                  notionPageId={devlog.notionPageId}
                ></DevlogListElement>
              ))
            : selectedDevlogWriteList.length > 0 &&
              selectedDevlogWriteList.map((devlog) => (
                <DevlogListElement
                  title={devlog.title}
                  createdAt={formatCreatedAt(devlog.createdAt)}
                  category={devlog.category.name}
                  tag={devlog.tag.name}
                  topic={devlog.topic}
                  notionPageId={devlog.notionPageId}
                ></DevlogListElement>
              ))}
        </div>
      </div>
    </div>
  );
};

export default DevlogMain;
