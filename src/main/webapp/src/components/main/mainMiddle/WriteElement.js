import React from "react";

const WriteElement = ({ title, content, createdDate }) => {
  return (
    <div className="flex ">
      <div className="w-10 h-full flex justify-center items-center mr-5 relative">
        <div className="w-[1px] h-full bg-gray-700"></div>
        <svg
          className="fill-white w-6 absolute top-5 left-1/2 -translate-x-1/2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
        >
          <path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM216 408c0 13.3-10.7 24-24 24s-24-10.7-24-24V305.9l-31 31c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l72-72c9.4-9.4 24.6-9.4 33.9 0l72 72c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-31-31V408z" />
        </svg>
      </div>
      <div className="mt-5 flex">
        <div className="w-44 h-44">
          <img
            src={process.env.PUBLIC_URL + "/image/test/spring.png"}
            className="object-cover w-full h-full rounded-md"
          />
        </div>
        <div className="flex flex-col ml-10">
          <div className="flex">
            <span id="writeTitle" className="text-2xl font-semibold">
              {title}
            </span>
            <span id="writeCreatedDate" className="text-xl text-gray-500 ml-6">
              {createdDate}
            </span>
          </div>
          <span id="writeContent" className="text-xl mt-5">
            {content}
          </span>
        </div>
      </div>
    </div>
  );
};

export default WriteElement;
