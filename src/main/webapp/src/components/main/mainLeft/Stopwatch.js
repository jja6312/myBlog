import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

// 메인의 왼쪽. 스탑워치 표시--[24.01.27 21:36 정지안]
const Stopwatch = () => {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categoryList, setCategoryList] = useState([]);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  // 스톱워치 시작 및 중지 토글
  const toggleTimer = () => {
    setIsActive(!isActive);
    if (!isActive) {
      setStartTime(new Date().toISOString());
    } else {
      setEndTime(new Date().toISOString());
      handleSave();
    }
  };

  // 스톱워치 저장
  const handleSave = () => {
    const studySession = {
      categoryId: selectedCategory,
      startTime: startTime,
      endTime: new Date().toISOString(),
      duration: timer,
    };

    axios
      .post("http://localhost:8080/studyTime/saveTime", studySession)
      .then((response) => {
        alert("저장 성공");
      })
      .catch((error) => {
        alert("저장 실패");
      });

    // 타이머 초기화
    setTimer(0);
    setIsActive(false);
  };

  // 타이머 시간을 HH:MM:SS 형식으로 포맷
  const formatTime = () => {
    const getTwoDigits = (num) => String(num).padStart(2, "0");
    let seconds = timer % 60;
    let minutes = Math.floor(timer / 60) % 60;
    let hours = Math.floor(timer / 3600);
    return `${getTwoDigits(hours)}:${getTwoDigits(minutes)}:${getTwoDigits(
      seconds
    )}`;
  };

  // 카테고리 목록 불러오기
  useEffect(() => {
    axios
      .post("http://localhost:8080/devlog/getCategoryList")
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
    let interval = null;
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
    <div className="stopwatch flex flex-col justify-evenly w-full h-[250px] md:h-[50vh] xl:h-[180px] bg-black xl:mt-11 ">
      <div className="flex justify-between p-3">
        <span className="text-sm text-blue-200">자동 저장</span>
        <span className="text-sm text-gray-400">오늘 총 공부량, 07:45:22</span>
      </div>
      <div className="flex justify-center items-center mt-2 px-2 ">
        {/* 시작 및 중지버튼 */}
        <div
          onClick={toggleTimer}
          className="w-[60px] h-[60px] border-2 border-white rounded-full flex justify-center items-center"
        >
          <FontAwesomeIcon icon={isActive ? faPause : faPlay} />{" "}
        </div>
        <span className="text-[20px] md:text-5xl ml-4 -translate-y-1">
          {formatTime()}
        </span>
      </div>
      <div className="flex justify-center items-center mt-5">
        <div className="w-[65px] h-7  flex justify-center items-center text-black">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categoryList.map((category) => (
              <option key={category.id}>{category.name}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;
