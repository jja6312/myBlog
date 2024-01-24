import React from "react";

// 개발중인 페이지임을 알려주는 페이지 --[24.01.24 19:02 정지안]
const Developing = () => {
  return (
    <div className="w-full flex flex-col justify-start items-center mt-16">
      <img
        alt=""
        className="w-96 h-fit rounded-full shadow-whiteRounded"
        src={process.env.PUBLIC_URL + "/image/test/oops.png"}
        alt="oops"
      />
      <span className="text-5xl">developing ...</span>
    </div>
  );
};

export default Developing;
