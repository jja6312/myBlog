import React, { useEffect, useState } from "react";
import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import { NotionRenderer } from "react-notion";
import axios from "axios";
import "./notionAPICustom.css";
import DevlogTag from "./DevlogTag";
import DevlogCategories from "./DevlogCategories";
import { useLocation } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenClip } from "@fortawesome/free-solid-svg-icons";

// 개발일지 읽기 페이지 [24.01.24 15:46 정지안]
const ReadForm = () => {
  const [notionData, setNotionData] = useState({}); // Notion API로 받아온 데이터 저장
  const [createdAt, setCreatedAt] = useState("");
  const location = useLocation();

  useEffect(() => {
    const param = new URLSearchParams(location.search);
    const NOTION_PAGE_ID = param.get("notionPageId"); // Notion 페이지 ID
    setCreatedAt(param.get("createdAt")); // 작성일 저장
    // Notion API로 데이터 받아오기
    axios
      .get(`https://notion-api.splitbee.io/v1/page/${NOTION_PAGE_ID}`)
      .then(({ data }) => {
        setNotionData(data);
        console.log(notionData);
      });
  }, []);
  return (
    <div className="bg-dark text-white w-full min-h-screen flex justify-center">
      <div className="w-8/12 p-10 flex flex-col mt-32">
        {/* 제목 */}
        <span className="text-6xl font-semibold">
          (AWS) Beanstalk로 배포하기
        </span>

        {/* 작성자 정보 */}
        <div className="flex items-center space-x-4  mt-12">
          {/* 작성자 프로필사진 */}
          <div className="flex justify-center items-center rounded-full overflow-hidden w-12 h-12 ">
            <img
              alt=""
              className="w-full md:w-[120%] object-cover "
              src={`${process.env.PUBLIC_URL}/image/profile/profile2.png`}
            />
          </div>
          <span className="text-xl">정지안</span>
          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
          <span className="text-xl text-gray-400">{createdAt}</span>
        </div>

        <div className="flex w-full mt-5 space-x-4">
          {/* 카테고리 */}
          <div className="min-w-20 h-10">
            <DevlogCategories categoryName="aws" />
          </div>
          {/* 태그 */}
          <div className="min-w-20 h-10">
            <DevlogTag tagName="Beanstalk" />
          </div>
        </div>
        {/* Notion API로 노션페이지에서 받아온 개발일지를 NotionRenderer로 렌더 */}
        <div className="mt-10 ">
          <NotionRenderer
            blockMap={notionData}
            hideHeader={true}
            darkMode={true}
          />
        </div>
        {/* 작성자 정보 */}
        <div className="flex flex-col w-full">
          <div className="relative flex justify-start items-center">
            <span className="text-xl">Writen</span>
            <FontAwesomeIcon
              className="absolute -right-9 bottom-0 text-4xl"
              icon={faPenClip}
            />
          </div>
          <hr className="mb-6"></hr>
          <div className="flex">
            {/* 프로필 사진 */}
            <div className="flex justify-center items-center rounded-full overflow-hidden w-60 h-60 ">
              <img
                alt=""
                className="w-full md:w-[120%] object-cover "
                src={`${process.env.PUBLIC_URL}/image/profile/profile2.png`}
              />
            </div>
            <div className="flex flex-col justify-center ml-4 space-y-4">
              <span className="text-3xl font-semibold">정지안</span>
              <span className="text-xl">
                풀스택 공부를 지향하는 백엔드 개발자
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadForm;
