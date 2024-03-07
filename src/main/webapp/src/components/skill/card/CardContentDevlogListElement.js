import React from "react";
import { Link } from "react-router-dom";
import { formatCreatedAt } from "../../../util/formatCreatedAt";

const CardContentDevlogListElement = ({
  key,
  title,
  createdAt,
  category,
  topic,
  tag,
  notionPageId,
  writeThumbnail,
}) => {
  return (
    <div id={key}>
      <div className="group cursor-pointer w-full flex flex-col ">
        <hr className="border-gray-500 my-5 "></hr>
        <Link
          to={`/readForm?notionPageId=${notionPageId}&createdAt=${createdAt}&title=${title}&category=${category}&tag=${tag}&topic=${topic}`}
        >
          <div className="flex justify-between p-4 rounded transition-all duration-150 hover:bg-[#0E2B20]">
            <div className="w-[80%] md:w-[60%] lg:w-[70%] xl:w-[75%]  flex flex-col">
              <span className="text-sm text-gray-400">
                {formatCreatedAt(createdAt)}
              </span>
              <span className=" mt-1 group-hover:underline">{title}</span>
              <span className="text-sm mt-1 text-gray-400">{topic}</span>
            </div>
            <div className="w-20 h-20 md:w-40 md:h-40">
              <img
                alt=""
                className="object-cover w-28 h-28"
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
