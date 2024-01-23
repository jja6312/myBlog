import React from "react";
import hexagon from "./hexagon.module.css";

const Hexagon = ({ isSelected, setIsSelected, imgSrc, writeAccount, id }) => {
  return (
    <>
      <button
        className={`relative w-[7.3vw] h-[6.35vw] mt-[0.5vw] ${hexagon.hexagon}
        ${imgSrc ? "text-black" : "text-white"} 
        ${isSelected === id ? "opacity-100" : "opacity-50"}
        hover:opacity-100 hover:shadow-white transition-all ease-in-out duration-300 `}
        onClick={() => setIsSelected(id)}
      >
        <img
          alt=""
          className="object-cover w-full h-full"
          src={
            imgSrc
              ? process.env.PUBLIC_URL + imgSrc
              : process.env.PUBLIC_URL + "/image/test/oops.png"
          }
        ></img>
        <span
          className="absolute top-2/3 left-1/2 -translate-x-1/2
        text-[1.2vw]
        "
        >
          ({writeAccount})
        </span>
      </button>
    </>
  );
};

export default Hexagon;
