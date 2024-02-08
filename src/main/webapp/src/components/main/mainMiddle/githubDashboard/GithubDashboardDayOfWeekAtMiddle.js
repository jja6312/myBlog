import React from "react";

{
  /* 깃허브 대시보드 중간의 왼쪽에 위치한, 월 수 금 텍스트. --[24.01.29 10:00 정지안] */
}
const GithubDashboardDayOfWeekAtMiddle = () => {
  return (
    <div className="flex flex-col justify-center items-start gap-[4px] md:gap-[11px]">
      <span
        className="
      text-[8px] w-[20px] 
      sm:text-[12px] sm:w-[30px]
      md:text-[12px] md:w-[30px] 
      xl:w-[40px] xl:text-[14px] 
      2xl:text-[16px]"
      >
        Mon
      </span>
      <span
        className="
      text-[8px] w-[20px] 
      sm:text-[12px] sm:w-[30px]
      md:text-[12px] md:w-[30px] 
      xl:w-[40px] xl:text-[14px] 
      2xl:text-[16px]"
      >
        Wed
      </span>
      <span
        className="
      text-[8px] w-[20px] 
      sm:text-[12px] sm:w-[30px]
      md:text-[12px] md:w-[30px] 
      xl:w-[40px] xl:text-[14px] 
      2xl:text-[16px]"
      >
        Fri
      </span>
    </div>
  );
};

export default GithubDashboardDayOfWeekAtMiddle;
