import React, { useEffect, useState } from "react";
import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import { NotionRenderer } from "react-notion";
import axios from "axios";
import "./notion.css";

import staticResponse from "./notionWriteData/test.json";

const ReadForm = () => {
  const [response, setResponse] = useState({});

  useEffect(() => {
    const NOTION_PAGE_ID = "69332cb77a92421a823b9bfeee2b76af";
    axios
      .get(`https://notion-api.splitbee.io/v1/page/${NOTION_PAGE_ID}`)
      .then(({ data }) => {
        setResponse(data);
        console.log(data);
      });
  }, []);
  return (
    <div className="bg-dark w-full min-h-screen">
      <NotionRenderer
        className="notionText"
        blockMap={response}
        // fullPage={true}
        hideHeader={true}
        darkMode={true}
        // 글자를 white로
      />
    </div>
  );
};

export default ReadForm;
