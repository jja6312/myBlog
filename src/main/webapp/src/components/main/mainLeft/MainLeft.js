import React from "react";

import Stopwatch from "./Stopwatch";

// 메인의 왼쪽. 프로필사진, 스탑워치 표시--[24.01.24 18:00 정지안]
const MainLeft = () => {
  return (
    <div
      id="mainLeft"
      className="w-full gap-6 pl-5 flex items-center xl:w-[300px] xl:pl-0 xl:flex-col xl:gap-0 xl:pr-5"
    >
      <div className="md:flex items-center flex-col xl:mr-0">
        {/* 프로필사진 */}
        <div className="flex justify-center items-center rounded-full overflow-hidden w-[30vw] h-[30vw] md:w-[15vw] md:h-[15vw] lg:mt-4 transition-colors duration-500 ease-in-out border-2 border-dark hover:border-gray-200">
          <img
            alt=""
            className="w-full md:w-[120%] mt-9 object-cover transition-transform duration-500 ease-in-out transform hover:scale-125"
            src={`${process.env.PUBLIC_URL}/image/profile/profile2.png`}
          />
        </div>

        <div className="levelContainer w-full flex flex-col justify-center items-center">
          <span className="text-2xl">Lv.1</span>
          <div className="w-full flex justify-end">
            <span className="text-sm font-semibold">100 hours</span>
          </div>
          <div className="w-full h-4 md:h-6 xl:h-9 rounded-md bg-white"></div>
        </div>
      </div>
      {/* 스탑워치 */}
      <Stopwatch />
    </div>
  );
};

export default MainLeft;
