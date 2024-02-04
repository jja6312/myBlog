import React from "react";
import { Link } from "react-router-dom";
import DevlogTag from "./read/DevlogTag";
import DevlogCategories from "./read/DevlogCategories";

// 홈하단 및 개발일지 중간에 보이는 게시글 덩어리. --[24.01.26 16:32 정지안]
const DevlogListElement = ({
  title,
  createdAt,
  category,
  topic,
  tag,
  notionPageId,
  imgSrcWriteThumbnail,
}) => {
  return (
    <>
      <div className="group cursor-pointer w-full flex flex-col ">
        <hr className="border-gray-500 my-5 "></hr>
        <Link
          to={`/readForm?notionPageId=${notionPageId}&createdAt=${createdAt}&title=${title}&category=${category}&tag=${tag}&topic=${topic}`}
        >
          <div className="flex justify-between p-4 rounded transition-all duration-150 hover:bg-gray-800">
            <div className="w-[80%] md:w-[60%] lg:w-[70%] xl:w-[75%]  flex flex-col">
              {/* 작성일 */}
              <span className="text-sm text-gray-400">{createdAt}</span>
              {/* 글제목 */}
              <span className="text-xl mt-1 group-hover:underline">
                {title}
              </span>
              {/* 내용 */}
              <span className="text-sm mt-1 text-gray-400">{topic}</span>
              {/* 카테고리 및 태그 */}
              <div
                className=" mt-10 
                              block 
                              md:flex md:space-x-2"
              >
                <div className="w-[85vw] md:w-auto md:min-w-20 h-10 ">
                  <DevlogCategories categoryName={category}></DevlogCategories>
                </div>
                <div
                  className="w-[85vw] md:w-auto md:min-w-20 h-10
                mt-2
                md:mt-0"
                >
                  <DevlogTag tagName={tag}></DevlogTag>
                </div>
              </div>
            </div>
            <div className="w-20 h-20 md:w-40 md:h-40">
              {/* 이미지 */}
              <img
                alt=""
                className="object-cover w-full h-full"
                src={imgSrcWriteThumbnail}
              ></img>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default DevlogListElement;
