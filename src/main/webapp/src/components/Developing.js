import React from "react";

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
