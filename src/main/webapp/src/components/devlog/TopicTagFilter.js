import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// 개발일지 우측, 토픽 및 태그 필터링 기능 제공 --[24.01.28 12:47 정지안]
const TopicTagFilter = ({
  icon,
  topicName,
  tagList,
  countTagFunc,
  selectedFilter,
  setSelectedFilter,
}) => {
  // 고유한 태그 이름만 추출
  const uniqueTagNames = Array.from(
    new Set(tagList.map((write) => write.tag.name))
  );

  const filterHandling = (e) => {
    const filterType = e.target.id; // 'topic' 또는 'tag'가 추출됨.
    let filterName;

    if (filterType === "tag") {
      // 태그의 경우, 이름만 추출
      filterName = e.target.innerText.split(" ")[0];
    } else if (filterType === "topic") {
      // 토픽의 경우, 전체 텍스트 사용
      filterName = e.target.innerText;
    }
    // 동일한 필터를 선택했을 경우, 필터를 해제함.
    if (filterType === "topic") {
      if (selectedFilter.topic === filterName) {
        setSelectedFilter({ topic: "", tag: "" }); // 이미 선택된 토픽을 해제
      } else {
        setSelectedFilter({ topic: filterName, tag: "" }); // 새로운 토픽 선택
      }
    } else if (filterType === "tag") {
      if (
        selectedFilter.tag === filterName &&
        selectedFilter.topic === topicName
      ) {
        setSelectedFilter({ topic: "", tag: "" }); // 이미 선택된 태그를 해제
      } else {
        setSelectedFilter({ topic: topicName, tag: filterName }); // 새로운 태그 선택
      }
    }
  };

  useEffect(() => {
    console.log("selectedFilter", selectedFilter);
  }, [selectedFilter]);

  return (
    <div className="mt-[1vw]">
      <div
        className={`flex items-center space-x-2 transition-all ease-in-out duration-150 hover:bg-gray-500 cursor-pointer ${
          selectedFilter.topic === topicName && selectedFilter.tag === ""
            ? "bg-slate-500"
            : ""
        } `}
      >
        <FontAwesomeIcon className="text-xl" icon={icon} />
        <span id="topic" onClick={filterHandling} className="text-green-200">
          {" "}
          {topicName}
        </span>
      </div>
      <div className="bg-gray-700 w-full max-h-32 p-2 mt-2 overflow-y-scroll flex flex-col">
        {uniqueTagNames.length > 0
          ? uniqueTagNames.map((tagName) => (
              <span
                id="tag"
                onClick={filterHandling}
                className={`text-yellow-500 cursor-pointer transition-all ease-in-out duration-150 hover:bg-gray-500 hover:text-white ${
                  selectedFilter.topic === topicName &&
                  selectedFilter.tag === tagName
                    ? "bg-slate-500"
                    : ""
                }`}
              >
                {tagName} ({countTagFunc(tagList, tagName)})
              </span>
            ))
          : "-"}
      </div>
    </div>
  );
};

export default TopicTagFilter;