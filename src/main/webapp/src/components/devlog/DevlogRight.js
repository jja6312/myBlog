import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons";
import { faPersonDigging } from "@fortawesome/free-solid-svg-icons";
import { faBrain } from "@fortawesome/free-solid-svg-icons";
import hexagon from "./hexagon.module.css";
import TopicTagFilter from "./TopicTagFilter";

// 개발일지의 오른쪽 영역으로, 선택된 카테고리의 하위 구성 및 필터기능 제공 --[24.01.27 12:47 정지안]
const DevlogRight = ({
  isSelected,
  selectedDevlogWriteList,
  devlogWriteList,

  selectedFilter,
  setSelectedFilter,
}) => {
  const [filteredTagByTopic, setFilteredTagByTopic] = useState({
    projectAndTroubleShooting: [], // 프로젝트 / 트러블슈팅
    book: [], // 학습 도서 관련 글
    lecture: [], // 학습 강의 관련 글
    concept: [], // 개념 정리
  }); // 선택된 카테고리에 대해 topic값을 기준으로 필터.

  // 토픽 이름별로 태그 이름에 따른 글의 수를 세는 함수
  const countTagOccurrencesInTopic = (topic, tagName) => {
    return topic.filter((write) => write.tag && write.tag.name === tagName)
      .length;
  };

  // filteredTagByTopic의 초기값은 devlogWriteList를 기준으로함.
  useEffect(() => {
    // 전체 글일 경우 전체글(devlogWriteList) 기준으로 필터.
    setFilteredTagByTopic({
      projectAndTroubleShooting: devlogWriteList.filter(
        (write) => write.topic === "프로젝트 / 트러블슈팅"
      ),
      book: devlogWriteList.filter(
        (write) => write.topic === "학습 도서 관련 글"
      ),
      lecture: devlogWriteList.filter(
        (write) => write.topic === "학습 강의 관련 글"
      ),
      concept: devlogWriteList.filter((write) => write.topic === "개념 정리"),
    });

    // 만약 선택된 카테고리가 있을 경우, 그 카테고리의 글들을 기준으로 필터.
    if (selectedDevlogWriteList[0]) {
      setFilteredTagByTopic({
        projectAndTroubleShooting: selectedDevlogWriteList.filter(
          (write) => write.topic === "프로젝트 / 트러블슈팅"
        ),
        book: selectedDevlogWriteList.filter(
          (write) => write.topic === "학습 도서 관련 글"
        ),
        lecture: selectedDevlogWriteList.filter(
          (write) => write.topic === "학습 강의 관련 글"
        ),
        concept: selectedDevlogWriteList.filter(
          (write) => write.topic === "개념 정리"
        ),
      });
    }
  }, [devlogWriteList, selectedDevlogWriteList]);

  // 카테고리가 변경되면 필터 초기화!
  useEffect(() => {
    setSelectedFilter({ topic: "", tag: "" });
  }, [isSelected]);

  useEffect(() => {
    console.log("filteredTagByTopic", filteredTagByTopic);
  }, [filteredTagByTopic]);

  return (
    <div className="relative w-3/12 flex flex-col items-center">
      <div className="absolute  top-[1.7vw] right-[3vw] italic z-40 text-3xl">
        <span className="text-green-200">Topic </span>
        <span>&</span>
        <span className="text-yellow-500"> Tag</span>
      </div>
      <span className="absolute  top-[4.8vw] right-[3vw] italic z-40 text-2xl text-gray-400">
        by Category
      </span>

      {/* 육각형모양 이미지. custom을 위해 컴포넌트에서 분리. Hexagon.start ------*/}
      <div className="absolute top-0 left-[2vw] z-30">
        <button
          className={`relative w-[9vw] h-[7.7vw] mt-[0.5vw] ${hexagon.hexagon}
        text-black
        
        hover:shadow-white transition-all ease-in-out duration-300 `}
          onClick={() => setSelectedFilter({ topic: "", tag: "" })}
        >
          <img
            alt=""
            className="object-cover w-full h-full"
            src={
              process.env.PUBLIC_URL +
              `/storage/categories/${
                isSelected === "전체 글"
                  ? "all.png"
                  : selectedDevlogWriteList[0] &&
                    selectedDevlogWriteList[0].category.categoryThumbnail
              }`
            }
          ></img>
          <span
            className="absolute top-2/3 left-1/2 -translate-x-1/2
        text-[1.2vw]
        "
          >
            {/* 선택된 카테고리가 있으면 그것의 글갯수, 없으면 총글의 갯수. */}(
            {selectedDevlogWriteList[0]
              ? selectedDevlogWriteList.length
              : devlogWriteList.length}
            )
          </span>
        </button>
      </div>
      {/* Hexagon.end --------------------------------------------------------*/}

      {/* 카테고리에 따른 토픽 & 태그 필터 */}
      <div className="absolute top-[4.3vw] px-5 pt-[4vw] pb-[1vw] flex flex-col bg-gray-800 w-10/12 min-h-[50vh] rounded-lg text-lg">
        <TopicTagFilter
          icon={faPersonDigging}
          topicName="프로젝트 / 트러블슈팅"
          tagList={filteredTagByTopic.projectAndTroubleShooting}
          countTagFunc={countTagOccurrencesInTopic}
          // ------------/Devlog/DevlogRight/TopicTagFilter.js ------------

          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
          //--------------------------------------------------------------
        />
        <TopicTagFilter
          icon={faBook}
          topicName="학습 도서 관련 글"
          tagList={filteredTagByTopic.book}
          countTagFunc={countTagOccurrencesInTopic}
          // ------------/Devlog/DevlogRight/TopicTagFilter.js ------------

          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
          //--------------------------------------------------------------
        />
        <TopicTagFilter
          icon={faHeadphones}
          topicName="학습 강의 관련 글"
          tagList={filteredTagByTopic.lecture}
          countTagFunc={countTagOccurrencesInTopic}
          // ------------/Devlog/DevlogRight/TopicTagFilter.js ------------

          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
          //--------------------------------------------------------------
        />
        <TopicTagFilter
          icon={faBrain}
          topicName="개념 정리"
          tagList={filteredTagByTopic.concept}
          countTagFunc={countTagOccurrencesInTopic}
          // ------------/Devlog/DevlogRight/TopicTagFilter.js ------------
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
          //--------------------------------------------------------------
        />
      </div>
    </div>
  );
};

export default DevlogRight;
