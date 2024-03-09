import React from "react";
import { Link } from "react-router-dom";
import { formatCreatedAt } from "../../../util/formatCreatedAt";
import DevlogCategories from "../../devlog/read/DevlogCategories";
import DevlogTag from "../../devlog/read/DevlogTag";

const CardContentDevlogListElement = ({
  categoryName,
  key,
  title,
  createdAt,
  topic,
  tagName,
  notionPageId,
  writeThumbnail,
}) => {
  return (
    <div id={key}>
      <div className="group cursor-pointer w-full flex flex-col">
        <hr className="border-gray-800 my-5 "></hr>
        <Link
          to={`/readForm?notionPageId=${notionPageId}&createdAt=${createdAt}&title=${title}&category=${categoryName}&tag=${tagName}&topic=${topic}`}
        >
          <div className="flex justify-between p-4 rounded transition-all duration-150 hover:bg-[#2A2A2E] ">
            <div className="w-[80%] md:w-[60%] lg:w-[70%] xl:w-[75%]  flex flex-col">
              <span className="text-sm text-gray-400">
                {formatCreatedAt(createdAt)}
              </span>
              <span className=" mt-1 group-hover:underline">{title}</span>
              <span className="text-sm mt-1 text-gray-400">{topic}</span>
              {/* 카테고리 및 태그 */}
              <div
                className=" mt-10 
                              block 
                              md:flex md:space-x-2"
              >
                <div className="w-[85vw] md:w-auto md:min-w-20 h-10 ">
                  <DevlogCategories
                    categoryName={categoryName}
                  ></DevlogCategories>
                </div>
                <div
                  className="w-[85vw] md:w-auto md:min-w-20 h-10
                mt-2
                md:mt-0"
                >
                  <DevlogTag tagName={tagName}></DevlogTag>
                </div>
              </div>
            </div>

            {/* 이미지 */}
            <div className="w-20 h-20 md:w-40 md:h-40">
              <img
                alt=""
                className="object-cover w-full h-full"
                src={writeThumbnail}
              ></img>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CardContentDevlogListElement;
