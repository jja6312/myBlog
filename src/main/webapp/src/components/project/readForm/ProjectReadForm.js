import React, { useEffect, useState } from "react";
import axios from "axios";

import { NotionRenderer } from "react-notion";
import loading from "../../devlog/loading/loading.module.css";

const ProjectReadForm = () => {
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태 관리
  const [notionData, setNotionData] = useState({}); // Notion API로 받아온 데이터 저장
  useEffect(() => {
    setIsLoading(true); // 요청 시작 시 로딩 상태를 true로 설정

    const param = new URLSearchParams(location.search);
    const NOTION_PAGE_ID = param.get("notionPageId"); // Notion 페이지 ID

    // Notion API로 데이터 받아오기
    axios
      .get(`https://notion-api.splitbee.io/v1/page/${NOTION_PAGE_ID}`)
      .then(({ data }) => {
        setNotionData(data);

        console.log(notionData);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setIsLoading(false); // 요청 완료 시 로딩 상태를 false로 설정
      });
  }, []);
  return (
    <div className="bg-dark text-white w-full min-h-screen flex justify-center">
      <div className="w-8/12 p-10 flex flex-col mt-32">
        {/* 로딩 */}
        <div className={isLoading ? "" : "mt-14"}>
          {isLoading && (
            <div className="flex justify-center items-center mt-32">
              <div className={`${loading.loadingSpiner}`}></div>
            </div>
          )}

          {/* 내용 */}
          <NotionRenderer
            blockMap={notionData}
            hideHeader={true}
            darkMode={true}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectReadForm;
