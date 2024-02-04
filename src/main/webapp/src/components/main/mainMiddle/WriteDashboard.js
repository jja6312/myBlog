import React, { useEffect, useState } from "react";
import axios from "axios";
import DevlogListElement from "../../devlog/DevlogListElement";
import { formatCreatedAt } from "../../formatCreatedAt";
import { Link } from "react-router-dom";

// 특정 날짜의 개발일지 --[24.01.24 18:22 정지안]
const WriteDashboard = ({ clickedDate }) => {
  const [devlogList, setDevlogList] = useState([]);

  // clickedDate가 바뀔 때마다 개발일지 목록을 불러옴.
  // clickedDate의 기본 형식은 "2024-01-08" 과 같은 텍스트타입.

  useEffect(() => {
    if (clickedDate === "") return;
    axios
      .get("http://43.203.18.91:8080/myBlog/getDevlogWriteListByDate", {
        params: {
          clickedDate: clickedDate,
        },
      })
      .then((response) => {
        setDevlogList(response.data);
        console.log("devlogList", response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [clickedDate]);

  return (
    <div
      id="writeDashboard"
      className="text-lg font-semibold w-full bg-darkDeep flex flex-col my-6"
    >
      <div className="flex">
        <span
          className="ml-2 
                          text-[12px]
                          md:text-md "
        >
          기간별 등록 게시물 :{" "}
        </span>
        <span className=" ml-2 text-green-300">{clickedDate}</span>
        <span
          className={` ml-2 ${
            clickedDate === "" ? "text-yellow-400" : "text-green-400"
          }`}
        >
          {clickedDate === "" ? "날짜를 선택해주세요." : "선택됨"}
        </span>
      </div>
      <hr className="border-gray-800 mt-5 mb-5"></hr>
      <div className="flex flex-col items-center w-full">
        {devlogList.length > 0 &&
          devlogList.map((devlog) => (
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
        {/* 개발일지 바로가기 버튼 */}
        <Link to="/devlog">
          <div
            className=" mt-10 bg-gray-700 border-2 border-white flex justify-center items-center cursor-pointer font-semibold transition-all duration-200
                        hover:bg-amber-500 hover:text-black
                        
                        w-40 h-10 rounded-[20px] text-sm bottom-5 right-5
                        lg:w-60 lg:h-16 lg:rounded-[30px] lg:text-2xl lg:bottom-10 lg:right-10
                        
                        2xl:w-96 2xl:h-20 2xl:rounded-[40px] 2xl:text-3xl 2xl:bottom-15 2xl:right-15
                        "
          >
            <span>개발일지 바로가기</span>
          </div>
        </Link>
      </div>
      {/* <WriteElement
        title="지안"
        createdDate="2024.01.15"
        content="안녕?"
      ></WriteElement>
      <WriteElement
        title="지안"
        createdDate="2024.01.15"
        content="안녕?"
      ></WriteElement> */}
    </div>
  );
};

export default WriteDashboard;
