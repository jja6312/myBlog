import React from "react";
import styles from "../hexagon.module.css";

const LoadingDevlogListElement = () => {
  return (
    <div className="text-[8px] flex flex-col md:text-sm w-full">
      <div className="flex flex-col w-full">
        <div className="group cursor-pointer w-full flex flex-col ">
          <hr className="border-gray-500 mt-6 "></hr>

          <div
            className={`flex justify-between p-4 rounded transition-all duration-150 bg-gray-800 h-48 mt-6 ${styles.opacityAnimationDevlogList}`}
          ></div>
          <hr className="border-gray-500 mt-6 "></hr>
          <div
            className={`flex justify-between p-4 rounded transition-all duration-150 bg-gray-800 h-48 mt-6 ${styles.opacityAnimationDevlogList}`}
          ></div>
          <hr className="border-gray-500 mt-6 "></hr>
          <div
            className={`flex justify-between p-4 rounded transition-all duration-150 bg-gray-800 h-48 mt-6 ${styles.opacityAnimationDevlogList}`}
          ></div>
          <hr className="border-gray-500 mt-6 "></hr>
          <div
            className={`flex justify-between p-4 rounded transition-all duration-150 bg-gray-800 h-48 mt-6 ${styles.opacityAnimationDevlogList}`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingDevlogListElement;
