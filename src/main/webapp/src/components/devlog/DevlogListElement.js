import React from "react";
import { Link } from "react-router-dom";
import DevlogTag from "./read/DevlogTag";
import DevlogCategories from "./read/DevlogCategories";

// 개발일지 목록에 보이는 게시글 --[24.01.26 16:32 정지안]
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
              <div className="flex space-x-2 mt-10">
                <div className="min-w-20 h-10 ">
                  <DevlogCategories categoryName={category}></DevlogCategories>
                </div>{" "}
                <div className="min-w-20 h-10">
                  <DevlogTag tagName={tag}></DevlogTag>
                </div>
              </div>
            </div>
            <div className="w-20 h-20 md:w-40 md:h-40">
              {/* 이미지 */}
              <img
                alt=""
                className="object-cover w-full h-full"
                src={process.env.PUBLIC_URL + imgSrcWriteThumbnail}
              ></img>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default DevlogListElement;
