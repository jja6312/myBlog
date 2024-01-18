import React, { useState, useEffect, useRef } from "react";

const Fillbox = ({ brightness: brightness }) => {
  return (
    <div
      // style={{ width: size, height: `${size}px` }}
      className={`rounded-sm w-[4px] h-[4px] md:w-2 md:h-2 xl:w-[10px] xl:h-[10px] 2xl:w-3 2xl:h-3 ${brightness} ${
        brightness === "bg-blue-300" ? "border border-white" : ""
      }`}
    ></div>
  );
};

export default Fillbox;
