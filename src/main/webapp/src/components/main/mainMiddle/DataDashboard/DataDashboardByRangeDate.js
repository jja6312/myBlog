import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import BtnRangeDate from "./BtnRangeDate";
import axios from "axios";
import { useStudyTimeStore } from "../../../../store/StudyTimeStore";
// import { useDevlogStore } from "../../../../store/DevlogStore";

// 차트 색상
const colors = [
  "#8884d8",
  "#82ca9d",
  "#ffc658",
  "#ff7300",
  "#413ea0",
  "#e51717",
  "#17e5e5",
  "#123456",
  "#abcdef",
  "#330033",
  "#ff00ff",
  "#808080",
  "#008000",
  "#00ffff",
  "#000080",
  "#800080",
  "#800000",
  "#008080",
  "#0000ff",
  "#00ff00",
];

//메인화면 중간의 기간별 학습 종류 중 우측 데이터 대시보드 --[24.02.11 정지안]
const DataDashboardByRangeDate = () => {
  const {
    clickedRange,
    studyTimeGroupByCategory,
    setStudyTimeGroupByCategory,
    sortedCategoryNames,
    setSortedCategoryNames,
  } = useStudyTimeStore();

  const [chartWidth, setChartWidth] = useState(500); // 차트 너비 상태 초기화

  const handleResize = () => {
    const width = window.innerWidth;
    if (width <= 640) {
      // sm 사이즈 이하인 경우 너비를 350으로 설정
      setChartWidth(350);
    } else {
      setChartWidth(500); // 그 외의 경우는 기본 너비 500으로 설정
    }
  };

  const accumulateData = (data) => {
    const accumulatedData = {};
    const sortedDates = [...new Set(data.map((item) => item.studyDate))].sort(
      (a, b) => a.localeCompare(b)
    );

    sortedDates.forEach((date) => {
      data.forEach((item) => {
        if (item.studyDate === date) {
          if (!accumulatedData[date]) {
            accumulatedData[date] = {};
          }
          accumulatedData[date][item.categoryName] =
            (accumulatedData[date][item.categoryName] || 0) + item.studyMinutes;
        }
      });
    });

    // 각 날짜에 대해 이전 날짜의 누적값을 더해줌
    const categoryNames = [...new Set(data.map((item) => item.categoryName))];
    let lastAccumulatedValues = categoryNames.reduce(
      (acc, categoryName) => ({ ...acc, [categoryName]: 0 }),
      {}
    );

    return sortedDates.map((date) => {
      const dailyData = accumulatedData[date];
      const result = { studyDate: date };

      categoryNames.forEach((categoryName) => {
        lastAccumulatedValues[categoryName] += dailyData[categoryName] || 0;
        result[categoryName] = lastAccumulatedValues[categoryName];
      });

      return result;
    });
  };

  const chartData = accumulateData(studyTimeGroupByCategory);

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      // 총 학습 시간 계산
      const totalMinutes = payload.reduce(
        (total, entry) => total + entry.value,
        0
      );
      const totalHours = Math.floor(totalMinutes / 60);
      const remainingMinutes = totalMinutes % 60;

      return (
        <div
          className="custom-tooltip bg-dark"
          style={{
            padding: "10px",
            border: "1px solid #cccccc",
          }}
        >
          <p className="label">{`날짜: ${label}`}</p>
          {payload.map((entry, index) => {
            // 분을 시간과 분으로 변환
            const hours = Math.floor(entry.value / 60);
            const minutes = Math.floor(entry.value % 60);

            return (
              <p key={`item-${index}`} style={{ color: entry.color }}>
                {`${entry.name}: ${hours}시간 ${minutes}분`}
              </p>
            );
          })}
          {/* 총 학습 시간 표시 */}
          <p className="total" style={{ fontWeight: "bold" }}>
            {`총 학습 시간: ${totalHours}시간 ${Math.floor(
              remainingMinutes
            )}분`}
          </p>
        </div>
      );
    }

    return null;
  };

  // 각 카테고리별 총 학습 시간 계산
  const calculateTotalStudyTimePerCategory = (data) => {
    const totalStudyTimePerCategory = {};

    data.forEach((item) => {
      if (totalStudyTimePerCategory[item.categoryName]) {
        totalStudyTimePerCategory[item.categoryName] += item.studyMinutes;
      } else {
        totalStudyTimePerCategory[item.categoryName] = item.studyMinutes;
      }
    });

    return totalStudyTimePerCategory;
  };

  const getStudyTimeGroupByCategory = () => {
    axios
      .get("http:// 43.203.18.91:8080/studyTime/getStudyTimeGroupByCategory")
      .then((res) => {
        console.log("getStudyTimeGroupByCategory:", res.data);
        setStudyTimeGroupByCategory(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getStudyTimeGroupByCategoryRecentOneMonth = () => {
    axios
      .get(
        "http:// 43.203.18.91:8080/studyTime/getStudyTimeGroupByCategoryRecentOneMonth"
      )
      .then((res) => {
        console.log("getStudyTimeGroupByCategoryRecentOneMonth:", res.data);
        setStudyTimeGroupByCategory(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getStudyTimeGroupByCategoryRecentOneYear = () => {
    axios

      .get(
        "http:// 43.203.18.91:8080/studyTime/getStudyTimeGroupByCategoryRecentOneYear"
      )
      .then((res) => {
        console.log("getStudyTimeGroupByCategoryRecentOneYear:", res.data);
        setStudyTimeGroupByCategory(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize); // 윈도우 리사이즈 이벤트 리스너 등록
    return () => window.removeEventListener("resize", handleResize); // 컴포넌트 언마운트 시 이벤트 리스너 제거
  }, []);

  useEffect(() => {
    if (clickedRange === "최근 1주일") {
      getStudyTimeGroupByCategory();
    } else if (clickedRange === "최근 1달") {
      getStudyTimeGroupByCategoryRecentOneMonth();
    } else if (clickedRange === "최근 1년") {
      getStudyTimeGroupByCategoryRecentOneYear();
    }
  }, [clickedRange]);

  useEffect(() => {
    // 카테고리별 총 학습 시간 계산
    const totalStudyTimePerCategory = calculateTotalStudyTimePerCategory(
      studyTimeGroupByCategory
    );

    // 총 학습 시간을 기준으로 카테고리 이름 정렬
    const sortedNames = Object.keys(totalStudyTimePerCategory).sort(
      (a, b) => totalStudyTimePerCategory[b] - totalStudyTimePerCategory[a]
    );

    // 정렬된 카테고리 이름을 상태에 저장
    setSortedCategoryNames(sortedNames);
    console.log("sortedCategoryNames", sortedNames);
  }, [studyTimeGroupByCategory]);

  return (
    <div
      className="bg-darkDeep border border-gray-800  -translate-x-1 flex flex-col items-center
    w-full mt-16 h-auto
    xl:w-7/12 xl:mt-0 xl:h-[340px]
    "
    >
      <div className="w-full block xl:flex justify-end">
        <div className="w-full xl:w-1/3 flex justify-center items-center">
          <span className="text-lg text-center font-semibold my-2">
            기간별 학습 추이
          </span>
        </div>
        <div className="flex">
          <BtnRangeDate text="최근 1주일"></BtnRangeDate>
          <BtnRangeDate text="최근 1달"></BtnRangeDate>
          <BtnRangeDate text="최근 1년"></BtnRangeDate>
        </div>
      </div>
      <div className="flex justify-center items-center h-[350px]">
        <LineChart
          width={chartWidth}
          height={250}
          data={chartData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="studyDate" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          {sortedCategoryNames.map((categoryName, index) => (
            <Line
              key={categoryName}
              type="monotone"
              dataKey={categoryName}
              stroke={colors[index % colors.length]}
              name={categoryName}
            />
          ))}
        </LineChart>
      </div>
    </div>
  );
};

export default DataDashboardByRangeDate;
