import React, { useEffect, useState } from "react";
import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import { NotionRenderer } from "react-notion";
import axios from "axios";
import "./notion.css";

// 개발일지 읽기 페이지 [24.01.24 15:46 정지안]
const ReadForm = () => {
  const [response, setResponse] = useState({}); // Notion API로 받아온 데이터 저장

  useEffect(() => {
    const NOTION_PAGE_ID = "69332cb77a92421a823b9bfeee2b76af"; // Notion 페이지 ID
    // Notion API로 데이터 받아오기
    axios
      .get(`https://notion-api.splitbee.io/v1/page/${NOTION_PAGE_ID}`)
      .then(({ data }) => {
        setResponse(data);
        console.log(data);
      });
  }, []);
  return (
    // Notion API로 받아온 데이터를 NotionRenderer로 렌더링
    <div className="bg-dark w-full min-h-screen">
      <NotionRenderer
        className="notionText"
        blockMap={response}
        hideHeader={true}
        darkMode={true}
      />
    </div>
  );
};

export default ReadForm;
