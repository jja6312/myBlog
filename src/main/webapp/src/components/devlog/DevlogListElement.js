import React from "react";
import { Link } from "react-router-dom";

const DevlogListElement = () => {
  return (
    <>
      <div className="group cursor-pointer w-full flex flex-col ">
        <hr className="border-gray-500 my-5 "></hr>
        <Link to="/readForm">
          <div className="flex justify-between p-4 rounded transition-all duration-150 hover:bg-gray-800">
            <div className="w-[80%] md:w-[60%] lg:w-[70%] xl:w-[75%]  flex flex-col">
              {/* 글제목 */}
              <span className="text-xl group-hover:underline">2024년 회고</span>
              {/* 내용 */}
              <span className="text-sm mt-3 text-gray-400">
                쏼라쏼라 얄라리얄라령
              </span>
            </div>
            <div className="w-20 h-20 md:w-40 md:h-40">
              {/* 이미지 */}
              <img
                alt=""
                className="object-cover w-full h-full"
                src={process.env.PUBLIC_URL + "/image/test/spring.png"}
              ></img>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default DevlogListElement;
