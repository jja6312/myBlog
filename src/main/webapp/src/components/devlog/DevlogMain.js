import React, { useEffect, useState } from "react";
import DevlogListElement from "./DevlogListElement";
import DevlogWriteBtn from "./DevlogWriteBtn";
import { formatCreatedAt } from "../formatCreatedAt";
import InfiniteScroll from "../InpiniteScroll";

// 개발일지의 가운데 영역으로, 개발일지 목록을 표시하는 페이지 --[24.01.26 16:47 정지안]
const DevlogMain = ({
  isSelected,
  selectedDevlogWriteList,
  devlogWriteList,
  selectedFilter,
}) => {
  // ------------------무한로딩------------------
  const [visibleCount, setVisibleCount] = useState(6); // 초기에 표시할 게시글의 수
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태

  const totalLength =
    isSelected === "전체 글"
      ? devlogWriteList.length
      : selectedDevlogWriteList.length;

  const filteredDevlogList =
    // 전체글이라면 전체글(devlogWriteList) 기준으로 필터.
    isSelected === "전체 글"
      ? devlogWriteList
          .filter((devlog) => {
            return (
              (selectedFilter.topic === "" ||
                devlog.topic === selectedFilter.topic) &&
              (selectedFilter.tag === "" ||
                devlog.tag.name === selectedFilter.tag)
            );
          })
          .slice(-visibleCount) // 현재 설정된 최대 개수만큼 게시글을 표시
      : // 선택된 카테고리가 있을 경우, 그 카테고리의 글들을 기준으로 필터.
      selectedFilter.topic || selectedFilter.tag
      ? selectedDevlogWriteList
          .filter((devlog) => {
            return (
              (selectedFilter.topic === "" ||
                devlog.topic === selectedFilter.topic) &&
              (selectedFilter.tag === "" ||
                devlog.tag.name === selectedFilter.tag)
            );
          })
          .slice(0, visibleCount) // 현재 설정된 최대 개수만큼 게시글을 표시
      : selectedDevlogWriteList;

  // 최근 날짜가 위로 오도록 정렬
  const sortedFilteredDevlogList = filteredDevlogList.sort((a, b) => {
    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  // 스크롤 이벤트 핸들러
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop <
      document.documentElement.scrollHeight - 100
    )
      return;

    // 전체 길이와 visibleCount를 비교
    if (visibleCount < totalLength) {
      setIsLoading(true);
      setTimeout(() => {
        setVisibleCount((prevCount) => Math.min(prevCount + 10, totalLength)); // 최대 길이를 초과하지 않도록 설정
        setIsLoading(false);
      }, 1700);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visibleCount, totalLength, handleScroll]);

  return (
    <div
      className=" bg-darkDeep text-white flex flex-col items-center px-5 min-h-screen 
      w-full
      md:w-6/12
      "
    >
      {/* 글쓰기 버튼 */}
      <DevlogWriteBtn></DevlogWriteBtn>
      <div className="text-[10px] text-yellow-700 font-semibold flex md:hidden mt-8 bg-yellow-300 border-[2px] border-yellow-600 rounded-xl w-full p-2">
        <div>
          ⚠ 현재 카테고리 및 태그 필터는{" "}
          <span className="text-red-500">태블릿 이상 화면에서 자원됩니다.</span>
        </div>{" "}
      </div>
      <div className="text-[8px] flex flex-col md:text-sm mt-10 w-full">
        <span className=" font-semibold">
          {/* 카테고리이름 */}
          {isSelected}
          {/* 게시글 수 */}({totalLength})
        </span>
        {/* 하단, 개발일지 게시글 */}
        <InfiniteScroll
          visibleCount={visibleCount}
          setVisibleCount={setVisibleCount}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          totalLength={totalLength}
        >
          <div className="flex flex-col w-full">
            {sortedFilteredDevlogList.length > 0 &&
              sortedFilteredDevlogList.map((devlog) => (
                <DevlogListElement
                  key={devlog.id}
                  title={devlog.title}
                  createdAt={formatCreatedAt(devlog.createdAt)}
                  category={devlog.category.name}
                  tag={devlog.tag.name}
                  topic={devlog.topic}
                  notionPageId={devlog.notionPageId}
                  imgSrcWriteThumbnail={devlog.writeThumbnail}
                ></DevlogListElement>
              ))}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default DevlogMain;
