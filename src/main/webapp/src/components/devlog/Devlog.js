import React, { useEffect, useState } from "react";
import DevlogLeft from "./DevlogLeft";
import DevlogMain from "./DevlogMain";
import DevlogRight from "./DevlogRight";
import axios from "axios";

//개발일지 페이지 --[24.01.26 15:48 정지안]
const Devlog = () => {
  const [isSelected, setIsSelected] = useState("전체 글"); // 선택된 육각형 구분을 위해 선택된 Hexagon.js의 id를 저장하는 state
  const [selectedDevlogWriteList, setSelectedDevlogWriteList] = useState({}); // 선택된 카테고리에 대해 filter된 devlogWriteList(개발일지)를 저장하는 state

  const [categoryList, setCategoryList] = useState([]); // DB에서 불러온 카테고리 리스트
  const [devlogWriteList, setDevlogWriteList] = useState([]); // DB에서 불러온 개발일지 리스트
  const [groupedDevlogs, setGroupedDevlogs] = useState({}); // 카테고리별로 그룹화된 개발일지 리스트

  const [hexagonArrays, setHexagonArrays] = useState([[], [], [], []]); // Hexagon 배열을 관리하는 state

  // 카테고리별로 devlogWriteList를 그룹화하는 함수
  const groupDevlogsByCategory = (devlogList, categories) => {
    const grouped = {};
    categories.forEach((category) => {
      grouped[category.name] = devlogList.filter(
        (devlog) => devlog.category.name === category.name
      );
    });
    return grouped;
  };

  useEffect(() => {
    // 카테고리와 개발일지 리스트를 모두 불러오고, 그룹화된 데이터를 생성함
    const fetchCategoryAndDevlogLists = async () => {
      try {
        const categoryRes = await axios.post(
          "http://localhost:8080/devlog/getCategoryList"
        );
        const devlogRes = await axios.post(
          "http://localhost:8080/devlog/getDevlogWriteList"
        );

        setCategoryList(categoryRes.data);
        setDevlogWriteList(devlogRes.data);
        console.log("devlogWriteList", devlogRes.data);

        // 그룹화된 데이터 생성
        const groupedData = groupDevlogsByCategory(
          devlogRes.data,
          categoryRes.data
        );
        console.log("groupedDevlogs", groupedData);
        setGroupedDevlogs(groupedData);
      } catch (err) {
        console.log(err);
      }
    };

    fetchCategoryAndDevlogLists();
  }, []);

  // 개발일지 좌측의 Hexagon 배열을 업데이트하는 함수
  useEffect(() => {
    if (Object.keys(groupedDevlogs).length > 0 && devlogWriteList.length > 0) {
      // 객체를 배열로 변환하고 내림차순 정렬
      const groupedDevlogsArray = Object.entries(groupedDevlogs)
        .map(([categoryName, writeListByCategory]) => ({
          categoryName,
          writeListByCategory: writeListByCategory,
        }))
        .sort((a, b) => b.length - a.length);

      // 전체 글을 나타내는 항목을 첫 번째 요소로 추가
      groupedDevlogsArray.unshift({
        categoryName: "전체 글",
        writeListByCategory: devlogWriteList, //모든 글
      });

      // hexagonArrays 업데이트
      const HexagonArraysAlign = [[], [], [], []];
      const positions = [
        [1, 2, 4, 7, 11, 15], // 왼쪽에서 세로로 긴 첫 번째 배열은 1, 2, 4, 7, 11, 15번째로 글의 수가 많은 카테고리를 배치한다.
        [3, 5, 8, 12, 16, 19], // 이하 동일로직.
        [6, 9, 13, 17, 20, 22],
        [10, 14, 18, 21, 23, 24],
      ];

      positions.forEach((position, index) => {
        position.forEach((pos) => {
          //배열의 범위를 벗어나는 경우를 방지
          if (groupedDevlogsArray[pos - 1]) {
            HexagonArraysAlign[index].push(groupedDevlogsArray[pos - 1]); // 배열의 위치에 맞게 카테고리 데이터를 넣음.
          }
        });
      });
      console.log("HexagonArraysAlign", HexagonArraysAlign);

      setHexagonArrays(HexagonArraysAlign);
    }
  }, [groupedDevlogs, devlogWriteList]);

  useEffect(() => {
    if (isSelected === "전체 글") {
      setSelectedDevlogWriteList(devlogWriteList);
    } else if (isSelected !== "전체 글") {
      setSelectedDevlogWriteList(
        devlogWriteList.filter((devlog) => devlog.category.name === isSelected)
      );
    }
  }, [isSelected]);

  useEffect(() => {
    console.log("selectedDevlogWriteList", selectedDevlogWriteList);
  }, [selectedDevlogWriteList]);

  return (
    <div className="flex justify-between text-white">
      {/* 카테고리 */}
      <DevlogLeft
        isSelected={isSelected}
        setIsSelected={setIsSelected}
        hexagonArrays={hexagonArrays}
      />

      {/* 콘텐츠(개발일지 목록) 표시 */}
      <DevlogMain
        isSelected={isSelected}
        selectedDevlogWriteList={selectedDevlogWriteList}
        devlogWriteList={devlogWriteList}
      />

      {/* 선택된 카테고리 내 세부 분류. 필터 기능 제공함.*/}
      <DevlogRight isSelected={isSelected} setIsSelected={setIsSelected} />
    </div>
  );
};

export default Devlog;
