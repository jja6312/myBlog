import React, { useEffect } from "react";
import axios from "axios";
import DevlogListElement from "../../devlog/DevlogListElement";
import { formatCreatedAt } from "../../formatCreatedAt";
import { Link } from "react-router-dom";
import { useStudyTimeStore } from "../../../store/StudyTimeStore";

// 특정 날짜의 개발일지 --[24.01.24 18:22 정지안]
const WriteDashboard = () => {
  const { clickedDate } = useStudyTimeStore();
  const { devlogListAtDate, setDevlogListAtDate } = useStudyTimeStore();

  //일자에 따른 개발일지 가져오기
  const getDevlogWriteListByDate = () => {
    axios
      .get("http://43.203.18.91:8080/myBlog/getDevlogWriteListByDate", {
        params: {
          clickedDate: clickedDate,
        },
      })
      .then((response) => {
        setDevlogListAtDate(response.data);
        console.log("devlogListAtDate", response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (clickedDate === "") return;
    getDevlogWriteListByDate(); // 선택된 날짜에 따른 개발일지 가져오기
  }, [clickedDate]);

  return (
    <div
      id="writeDashboard"
      className="text-lg font-semibold w-full bg-darkDeep flex flex-col  mt-8 mb-2"
    >
      <hr className="border-gray-800 mt-5 mb-5"></hr>
      <div
        className="
      block
      xl:flex xl:items-center"
      >
        <div
          className="text-lg flex font-semibold
        w-full
        justify-center
        xl:w-auto xl:justify-start
         "
        >
          일자별 개발일지
        </div>
        <div
          className="flex items-center justify-center
            w-full
            text-[14px]
            sm:text-[16px]
            lg:text-sm
            xl:ml-3 xl:w-auto xl:justify-start
        
        "
        >
          <span className="ml-2">선택 날짜 : </span>
          <span className=" ml-2 text-green-300">{clickedDate}</span>
          <span
            className={` ml-2 ${
              clickedDate === "" ? "text-yellow-400" : "text-green-400"
            }`}
          >
            {clickedDate === "" ? "날짜를 선택해주세요." : "선택됨"}
          </span>
        </div>
      </div>

      <div className="flex flex-col items-center w-full">
        {/* 메인화면 하단, 일자별 개발일지 */}
        {devlogListAtDate.length > 0 &&
          [...devlogListAtDate]
            .reverse()
            .map((devlog) => (
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
    </div>
  );
};

export default WriteDashboard;
