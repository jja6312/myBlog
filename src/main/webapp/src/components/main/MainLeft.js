import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause } from "@fortawesome/free-solid-svg-icons";

const MainLeft = () => {
  return (
    <div className="w-full gap-6 pl-5 flex items-center xl:w-[300px] xl:pl-0 xl:flex-col xl:gap-0 xl:pr-5">
      <div className="md:flex items-center flex-col xl:mr-0">
        <div className="flex justify-center items-center rounded-full overflow-hidden w-[30vw] h-[30vw] md:w-[15vw] md:h-[15vw] lg:mt-4 transition-colors duration-500 ease-in-out border-2 border-dark hover:border-gray-200">
          <img
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
      <div className="stopwatch flex flex-col justify-evenly w-full h-[250px] md:h-[50vh] xl:h-[180px] bg-black xl:mt-11 ">
        <div className="flex justify-between p-3">
          <span className="text-sm text-blue-200">자동 저장</span>
          <span className="text-sm text-gray-400">
            오늘 총 공부량, 07:45:22
          </span>
        </div>
        <div className="flex justify-center items-center mt-2 px-2">
          <div className="w-[60px] h-[60px] text-3xl rounded-full border border-white flex justify-center items-center">
            <FontAwesomeIcon icon={faPause} />
          </div>
          <span className="text-[20px] md:text-5xl ml-4 -translate-y-1">
            01:05:45
          </span>
        </div>
        <div className="flex justify-center items-center mt-5">
          <div className="w-[65px] h-7 rounded-xl bg-yellow-300  flex justify-center items-center">
            <span className=" text-black font-semibold text-xl">Java</span>
          </div>
          <div className="w-[65px] h-7 rounded-xl bg-blue-300  flex justify-center items-center ml-3">
            <span className=" text-black font-semibold text-xl">활용</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLeft;
