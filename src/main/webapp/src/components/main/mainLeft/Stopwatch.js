import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { formatTime } from "../../formatTime";

// 메인의 왼쪽. 스탑워치 표시--[24.01.27 21:36 정지안]
const Stopwatch = () => {
  const [timer, setTimer] = useState(0); // 타이머 시간
  const [isActive, setIsActive] = useState(false); // 타이머 시작 및 중지

  const [categoryList, setCategoryList] = useState([]); // 카테고리 목록
  const [startTime, setStartTime] = useState("");
  const [studySession, setStudySession] = useState({
    categoryName: "",
    startTime: startTime,
    endTime: new Date().toISOString(), // ISOString으로 저장함으로써 DB에서 Date로 변환 가능
    duration: timer, // 초 단위로 저장
  }); // DB로 보낼 스톱워치 정보
  const [todayStudyTime, setTodayStudyTime] = useState(0);

  // 카테고리 이름을 통해 카테고리 아이디 설정
  const settingCategory = (e) => {
    const categoryName = e.target.value;
    if (e.target.value !== "카테고리 선택") {
      setStudySession({ ...studySession, categoryName: categoryName });
    } else if (e.target.value === "카테고리 선택") {
      setStudySession({ ...studySession, categoryName: "" });
    }
  };

  const toggleTimer = () => {
    if (!isActive) {
      const tmpInput = prompt(
        "당신은 정지안입니까? 그렇지 않으면 시작할 수 없습니다."
      );
      if (tmpInput !== "정지안") {
        alert("정지안이 아닙니다. 시작할 수 없습니다.");
        return;
      }
    }

    if (studySession.categoryName === "") {
      alert("카테고리를 선택해주세요");
      return;
    }
    setIsActive(!isActive);
    if (!isActive) {
      setStartTime(new Date());
    } else {
      const endTime = new Date();
      const duration = Math.round((endTime - startTime) / 1000);
      const newSession = {
        categoryName: studySession.categoryName,
        startTime: startTime.toISOString(),
        endTime: endTime.toISOString(),
        duration: duration,
      };
      handleSave(newSession);
    }
  };

  const getTodayStudyTime = () => {
    // 오늘 총 공부량 불러오기
    axios
      .get("http://43.203.18.91:8080/studyTime/getTodayStudyTime")
      .then((res) => {
        console.log("todayStudyTime", res.data);
        setTodayStudyTime(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSave = async (studyTimeDTO) => {
    console.log("studyTimeDTO", studyTimeDTO);
    // 스톱워치 저장
    try {
      await axios.post(
        "http://43.203.18.91:8080/studyTime/saveTime",
        studyTimeDTO
      );
      getTodayStudyTime();
    } catch (e) {
      alert("저장 실패");
      console.log(e);
    }

    setTimer(0);
    setIsActive(false);
  };

  useEffect(() => {
    getTodayStudyTime();
    // 카테고리 목록 불러오기
    axios
      .get("http://43.203.18.91:8080/devlog/getCategoryList")
      .then((res) => {
        console.log("categoryList", res.data);
        setCategoryList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // 타이머 기능
  useEffect(() => {
    let interval = "";
    if (isActive) {
      interval = setInterval(() => {
        setTimer((timer) => timer + 1);
      }, 1000);
    } else if (!isActive && timer !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, timer]);

  //로깅
  useEffect(() => {
    console.log(categoryList);
  }, [categoryList]);

  return (
    <div className="stopwatch flex flex-col justify-between w-full h-[250px] md:h-[50vh] xl:h-[180px] bg-black xl:mt-11 ">
      <div className="flex justify-between p-3">
        <span className="text-[10px] md:text-sm text-blue-200">자동 저장</span>
        <span className="text-[10px] md:text-sm text-gray-400">
          오늘 총 공부량, {formatTime(todayStudyTime)}
        </span>
      </div>
      <div className="flex justify-center items-center mb-4 px-2 ">
        {/* 시작 및 중지버튼 */}
        <div
          onClick={toggleTimer}
          className="w-[60px] h-[60px] border-2 border-white rounded-full flex justify-center items-center cursor-pointer hover:opacity-75"
        >
          <FontAwesomeIcon icon={isActive ? faPause : faPlay} />{" "}
        </div>
        {/* 스톱워치 시간 표시 */}
        <span
          className={`text-[20px] md:text-5xl ml-4 -translate-y-1
        ${isActive ? "text-green-300" : "text-white"}
        `}
        >
          {formatTime(timer)}
        </span>
      </div>

      <div className="w-full h-7  flex justify-center items-end ">
        <select
          className={`w-full bg-gray-800 h-10  hover:opacity-75 cursor-pointer border-2 border-slate-600 ${
            studySession.categoryName === ""
              ? "text-white opacity-100"
              : "text-green-400 font-semibold"
          }`}
          value={studySession.categoryName}
          onChange={settingCategory}
        >
          <option className="text-gray-400">카테고리 선택</option>
          {categoryList.map((category) => (
            <option className="text-green-400 font-semibold" key={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Stopwatch;
