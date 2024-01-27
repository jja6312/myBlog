import React, { useEffect, useState } from "react";
import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import { NotionRenderer } from "react-notion";
import axios from "axios";
import "./notionAPICustom.css";
import DevlogTag from "./DevlogTag";
import DevlogCategories from "./DevlogCategories";
import { useLocation } from "react-router-dom";

import WritenProfile from "../WritenProfile";

// 개발일지 읽기 페이지 [24.01.26 15:46 정지안]
const ReadForm = () => {
  const [notionData, setNotionData] = useState({}); // Notion API로 받아온 데이터 저장
  const location = useLocation();

  // url의 params로부터 글 정보를 state에 저장
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [tag, setTag] = useState("");
  const [topic, setTopic] = useState("");
  const [createdAt, setCreatedAt] = useState("");

  useEffect(() => {
    const param = new URLSearchParams(location.search);
    const NOTION_PAGE_ID = param.get("notionPageId"); // Notion 페이지 ID
    setTitle(param.get("title")); // 제목
    setCategory(param.get("category")); // 카테고리
    setTag(param.get("tag")); // 태그
    setTopic(param.get("topic")); // 토픽
    setCreatedAt(param.get("createdAt")); // 작성일
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
        <span className="text-6xl font-semibold">{title}</span>
        {/* 토픽 */}
        <span className="text-2xl text-gray-400 mt-6">{topic}</span>

        <div className="flex w-full mt-6 space-x-4">
          {/* 카테고리 */}
          <div className="min-w-20 h-10">
            <DevlogCategories categoryName={category} />
          </div>
          {/* 태그 */}
          <div className="min-w-20 h-10">
            <DevlogTag tagName={tag} />
          </div>
        </div>
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
        {/* Notion API로 노션페이지에서 받아온 개발일지를 NotionRenderer로 렌더 */}
        <div className="mt-14 ">
          <NotionRenderer
            blockMap={notionData}
            hideHeader={true}
            darkMode={true}
          />
        </div>
        {/* 작성자 정보 */}
        <div className="my-10 ">
          <WritenProfile></WritenProfile>
        </div>
      </div>
    </div>
  );
};

export default ReadForm;
