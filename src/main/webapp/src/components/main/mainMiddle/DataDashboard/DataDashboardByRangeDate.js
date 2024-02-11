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

//메인화면 중간의 기간별 학습 종류 중 우측 데이터 대시보드
const DataDashboardByRangeDate = () => {
  const { clickedRange, setStudyTimeGroupByCategory } = useStudyTimeStore();
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
  const getStudyTimeGroupByCategory = () => {
    axios
      .get("http://localhost:8080/studyTime/getStudyTimeGroupByCategory")
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
        "http://localhost:8080/studyTime/getStudyTimeGroupByCategoryRecentOneMonth"
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
        "http://localhost:8080/studyTime/getStudyTimeGroupByCategoryRecentOneYear"
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

  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <div
      className="bg-darkDeep border border-gray-800  -translate-x-1 flex flex-col items-center
    w-full mt-16 h-auto
    xl:w-7/12 xl:mt-0 xl:h-72
    "
    >
      <div className="w-full flex justify-end">
        <BtnRangeDate text="최근 1주일"></BtnRangeDate>
        <BtnRangeDate text="최근 1달"></BtnRangeDate>
        <BtnRangeDate text="최근 1년"></BtnRangeDate>
      </div>
      <div className="flex justify-center items-center h-[350px]">
        <LineChart
          width={chartWidth}
          height={250}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend verticalAlign="top" height={36} />
          <Line
            name="pv of pages"
            type="monotone"
            dataKey="pv"
            stroke="#8884d8"
          />
          <Line
            name="uv of pages"
            type="monotone"
            dataKey="uv"
            stroke="#82ca9d"
          />
        </LineChart>
      </div>
    </div>
  );
};

export default DataDashboardByRangeDate;
