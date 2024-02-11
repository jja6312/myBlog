import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import { useStudyTimeStore } from "../../../../store/StudyTimeStore";

const DataDashboardByDate = () => {
  const { clickedDate } = useStudyTimeStore();
  const data = [
    {
      name: "Group A",
      value: 400,
    },
    {
      name: "Group B",
      value: 300,
    },
    {
      name: "Group C",
      value: 500,
    },
    {
      name: "Group D",
      value: 200,
    },
    {
      name: "Group E",
      value: 278,
    },
    {
      name: "Group F",
      value: 189,
    },
  ];
  const colors = [
    "#0DCAF0", // 밝은 스카이 블루
    "#007BFF", // 비비드 블루
    "#0056B3", // 미디엄 블루
    "#003F88", // 딥 블루
    "#002855", // 네이비 블루
    "#001D3D", // 다크 네이비
  ];

  return (
    <div
      className="bg-darkDeep border border-gray-800  h-72 flex flex-col items-center justify-center
    w-full
    xl:w-5/12
    "
    >
      <span className="text-lg text-center xl:text-left font-semibold mt-8 mb-2">
        일자별 학습 종류
      </span>
      <div
        className="flex
        text-[14px]
        sm:text-[16px]
        lg:text-sm
        
        "
      >
        <span className="ml-2">선택 날짜 : </span>
        <span className=" ml-2 text-green-300">{clickedDate}</span>
        <span
          className={` ml-2 ${
            clickedDate === "" ? "text-yellow-400" : "text-green-400"
          }`}
        >
          {clickedDate === "" ? "날짜를 선택해주세요." : "선택됨"}
        </span>
      </div>
      <div className="mt-3">
        <PieChart width={400} height={250}>
          <Pie data={data} cx="50%" cy="50%" outerRadius={80} label>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index]} />
            ))}
          </Pie>
        </PieChart>
      </div>
    </div>
  );
};

export default DataDashboardByDate;
