import React from "react";
import Fillbox from "./Fillbox";

// 깃허브 대시보드를 모방한 연간 공부 시간 시각화 대시보드 --[24.01.24 18:20 정지안]
const GithubDashboard = () => {
  const numberOfWeeks = 52; //52주(가로 52개)
  const elements = Array.from({ length: numberOfWeeks }, (_, i) => i + 1); //52개의 요소를 가진 배열 생성

  // 7개의 박스로 채워진 배열을 반환(세로 7개)
  const fillBox7EA = () => {
    const boxes = [];
    for (let i = 0; i < 7; i++) {
      boxes.push(<Fillbox brightness="bg-gray-900"></Fillbox>);
    }
    return boxes;
  };

  return (
    <div className="flex flex-col w-full bg-darkDeep pt-10">
      <div className="flex">
        <span className="text-xl font-semibold">3213.3</span>
        <span className="text-xl text-gray-400 ml-3">hours in 2024</span>
      </div>
      <div className="flex justify-center rounded-lg border border-gray-800 px-2 py-10 mt-2">
        <div className="w-fit">
          {/* 가로, 1~12월 텍스트 */}
          <div className="w-full flex justify-start items-center">
            <span className="ml-5 text-[8px] w-[20px] md:ml-0 md:w-[53px] md:text-[12px] xl:w-[61px] xl:text-[14px] 2xl:w-[70px] 2xl:text-[16px] text-end">
              Jan
            </span>
            <span className="text-[8px] w-[20px] md:w-[53px] md:text-[12px] xl:w-[61px] xl:text-[14px] 2xl:w-[70px] 2xl:text-[16px] text-end">
              Feb
            </span>
            <span className="text-[8px] w-[20px] md:w-[53px] md:text-[12px] xl:w-[61px] xl:text-[14px] 2xl:w-[70px] 2xl:text-[16px] text-end">
              Mar
            </span>
            <span className="text-[8px] w-[20px] md:w-[53px] md:text-[12px] xl:w-[61px] xl:text-[14px] 2xl:w-[70px] 2xl:text-[16px] text-end">
              Apr
            </span>
            <span className="text-[8px] w-[20px] md:w-[53px] md:text-[12px] xl:w-[61px] xl:text-[14px] 2xl:w-[70px] 2xl:text-[16px] text-end">
              May
            </span>
            <span className="text-[8px] w-[20px] md:w-[53px] md:text-[12px] xl:w-[61px] xl:text-[14px] 2xl:w-[70px] 2xl:text-[16px] text-end">
              Jun
            </span>
            <span className="text-[8px] w-[20px] md:w-[53px] md:text-[12px] xl:w-[61px] xl:text-[14px] 2xl:w-[70px] 2xl:text-[16px] text-end">
              Jul
            </span>
            <span className="text-[8px] w-[20px] md:w-[53px] md:text-[12px] xl:w-[61px] xl:text-[14px] 2xl:w-[70px] 2xl:text-[16px] text-end">
              Aug
            </span>
            <span className="text-[8px] w-[20px] md:w-[53px] md:text-[12px] xl:w-[61px] xl:text-[14px] 2xl:w-[70px] 2xl:text-[16px] text-end">
              Sep
            </span>
            <span className="text-[8px] w-[20px] md:w-[53px] md:text-[12px] xl:w-[61px] xl:text-[14px] 2xl:w-[70px] 2xl:text-[16px] text-end">
              Oct
            </span>
            <span className="text-[8px] w-[20px] md:w-[53px] md:text-[12px] xl:w-[61px] xl:text-[14px] 2xl:w-[70px] 2xl:text-[16px] text-end">
              Nov
            </span>
            <span className="text-[8px] w-[20px] md:w-[53px] md:text-[12px] xl:w-[61px] xl:text-[14px] 2xl:w-[70px] 2xl:text-[16px] text-end">
              Dec
            </span>
          </div>

          <div className="w-full flex mt-4 ">
            {/* 세로, 월 수 금 텍스트 */}
            <div className="flex flex-col justify-center items-start gap-[4px] md:gap-[11px]">
              <span className="text-[8px] w-[20px] md:text-[12px] md:w-[30px] xl:w-[40px] xl:text-[14px] 2xl:text-[16px]">
                Mon
              </span>
              <span className="text-[8px] w-[20px] md:text-[12px] md:w-[30px] xl:w-[40px] xl:text-[14px] 2xl:text-[16px]">
                Wed
              </span>
              <span className="text-[8px] w-[20px] md:text-[12px] md:w-[30px] xl:w-[40px] xl:text-[14px] 2xl:text-[16px]">
                Fri
              </span>
            </div>
            {/* 박스들 구현 */}
            <div className="flex ml-2 gap-[0.5px] md:gap-[4px] lg:gap-1">
              {elements.map((box, index) => {
                return (
                  <div
                    id={index}
                    className="flex flex-col justify-center items-center gap-[1px] md:gap-[4px] lg:gap-1"
                  >
                    {fillBox7EA()}
                  </div>
                );
              })}
              <div className="flex flex-col justify-center items-center gap-[1px] md:gap-[4px] lg:gap-1">
                <Fillbox brightness="bg-blue-900"></Fillbox>
                <Fillbox brightness="bg-blue-500"></Fillbox>
                <Fillbox brightness="bg-darkDeep"></Fillbox>
                <Fillbox brightness="bg-darkDeep"></Fillbox>
                <Fillbox brightness="bg-darkDeep"></Fillbox>
                <Fillbox brightness="bg-darkDeep"></Fillbox>
                <Fillbox brightness="bg-darkDeep"></Fillbox>
              </div>
            </div>
          </div>
          {/* 하단의 부연설명 */}
          <div className="bottomContainer text-gray-400 flex justify-between items-center mr-11 mt-3">
            <span className="text-[5px] md:text-lg">
              Find Out What Jian Learned
            </span>
            <div className="flex gap-2 items-center">
              <span>Less</span>
              <Fillbox brightness="bg-blue-900"></Fillbox>
              <Fillbox brightness="bg-blue-700"></Fillbox>
              <Fillbox brightness="bg-blue-500"></Fillbox>
              <Fillbox brightness="bg-blue-300"></Fillbox>
              <span>More</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GithubDashboard;