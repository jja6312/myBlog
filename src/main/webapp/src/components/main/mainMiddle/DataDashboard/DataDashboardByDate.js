import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell } from "recharts";
import { useStudyTimeStore } from "../../../../store/StudyTimeStore";

const DataDashboardByDate = () => {
  const { studyTimeByDayGroupByCategory, clickedDate } = useStudyTimeStore();
  const [data, setData] = useState([]); // 상태로 관리되는 data 배열

  const colors = [
    "#35f2ff", // 밝은 스카이 블루
    "#28a3ff", // 비비드 블루
    "#287edb", // 미디엄 블루
    "#2867b0", // 딥 블루
    "#28507d", // 네이비 블루
    "#284565", // 다크 네이비
  ];

  useEffect(() => {
    if (studyTimeByDayGroupByCategory.length === 0) return;
    const newData = studyTimeByDayGroupByCategory.map((element) => ({
      name: element.categoryName,
      value: element.studyMinutesDay,
    }));
    setData(newData);
    console.log("data", newData);
  }, [studyTimeByDayGroupByCategory]);

  return (
    <div
      className="bg-darkDeep border border-gray-800  h-[340px] flex flex-col items-center justify-center
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
      <div className="mt-3 z-30 h-[550px] text-[10px] xl:text-[14px]">
        <PieChart width={400} height={250}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            label={(entry) => `${entry.name}: ${entry.value}분`}
            labelLine={false} // 라벨과 섹션 사이의 선을 숨기려면 이를 false로 설정
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </div>
    </div>
  );
};

export default DataDashboardByDate;
