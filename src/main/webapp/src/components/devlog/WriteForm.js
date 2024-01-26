import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// 글쓰기 페이지. --[24.01.24 17:36 정지안]

// 위 페이지는 아래 세 가지 데이터를 다룬다.
// 1. 카테고리
//    ex)Spring, Java, 운영체제
// 2. 태그
//    ex)AOP, DI, IoC, MVC, REST API
// 3. 노션 페이지 아이디
//    (노션에서 작성한 개발일지를 fetch로 불러서 화면에 뿌린다.)

const WriteForm = () => {
  const [selectedCategory, setSelectedCategory] = useState("카테고리"); // 선택된 카테고리 이름
  const [selectedTag, setSelectedTag] = useState("태그"); // 선택된 태그 이름

  const [categoryList, setCategoryList] = useState([]); // DB에서 불러온 카테고리 리스트
  const [tagList, setTagList] = useState([]); // DB에서 불러온 태그 리스트
  const navigate = useNavigate();

  // 제목,카테고리,태그,노션 페이지 아이디를 저장하는 객체
  const [writeDTO, setWriteDTO] = useState({
    title: "",
    categoryName: "",
    tagName: "",
    notionPageId: "",
    topic: "",
  });

  // 변경되는 input을 DTO에 저장
  const onChangeInput = (e) => {
    const { id, value } = e.target;
    setWriteDTO({
      ...writeDTO,
      [id]: value,
    });
  };

  const onHandlingCategory = (e) => {
    const { value } = e.target;
    // "새 카테고리 입력" 텍스트 탐지를 위한 state 변경 (직접입력 div의 스위치역할)
    setSelectedCategory(value);

    // 카테고리 선택 시 DTO에 저장
    if (value !== "새 카테고리 입력" && value !== "카테고리 선택") {
      setWriteDTO({
        ...writeDTO,
        categoryName: value,
      });
    } else if (value === "새 카테고리 입력" || value === "카테고리 선택") {
      setWriteDTO({
        ...writeDTO,
        categoryName: "",
      });
    }
  };

  // 저장 버튼 클릭 시 서버에 writeDTO 객체를 전달
  const onSaveWrite = () => {
    console.log(writeDTO);

    //유효성검사
    if (writeDTO.title === "") {
      alert("제목을 입력하세요.");
      return;
    }
    if (writeDTO.topic === "") {
      alert("주제를 선택하세요.");
      return;
    }
    if (writeDTO.categoryName === "") {
      alert("카테고리를 선택하세요.");
      return;
    }
    if (writeDTO.tagName === "") {
      alert("태그를 선택하세요.");
      return;
    }
    if (writeDTO.notionPageId === "") {
      alert("노션 페이지 아이디를 입력하세요.");
      return;
    }

    axios
      .post("http://localhost:8080/devlog/save", writeDTO)
      .then((res) => {
        alert("저장에 성공했습니다.");
        console.log(res);
        navigate("/devlog");
      })
      .catch((err) => {
        alert("저장에 실패했습니다.");
        console.log(err);
      });
  };

  useEffect(() => {
    // 카테고리 리스트 불러오기
    axios.post("http://localhost:8080/devlog/getCategoryList").then((res) => {
      setCategoryList(res.data);
    });
    // 태그 리스트 불러오기
    axios.post("http://localhost:8080/devlog/getTagList").then((res) => {
      setTagList(res.data);
    });
  }, []);

  useEffect(() => {
    console.log("categoryList");
    console.log(categoryList);

    console.log("tagList");
    console.log(tagList);
  }, [categoryList, tagList]);

  useEffect(() => {
    console.log("writeDTO");
    console.log(writeDTO);
  }, [writeDTO]);

  return (
    <div className="flex w-full min-h-screen bg-dark">
      <div className="flex flex-col w-min-h-screen w-2/12"></div>
      <div className="flex flex-col w-min-h-screen bg-darkDeep w-8/12 p-5">
        {/* 제목 입력 */}
        <input
          id="title"
          onChange={(e) => onChangeInput(e)}
          className="w-full h-20 bg-darkDeep text-white pl-3 mt-10 text-5xl"
          placeholder="제목을 입력하세요."
        ></input>
        <div className="flex w-full items-center mt-10">
          <span className="text-red-500 text-3xl mr-2">*</span>
          <div className="flex flex-col w-full">
            <select
              id="topic"
              className=" h-12 bg-dark text-white pl-3 text-2xl"
              onChange={(e) => onChangeInput(e)}
            >
              <option>어떤 종류의 글인가요?</option>
              <option>프로젝트 / 트러블슈팅</option>
              <option>학습 도서 관련 글</option>
              <option>학습 강의 관련 글</option>
              <option>개념 정리</option>
            </select>
          </div>
        </div>
        <div className="flex w-full space-x-6 mt-10">
          {/* 카테고리 선택 */}
          <div className="flex w-1/2 items-center">
            <span className="text-red-500 text-3xl mr-2">*</span>
            <div className="flex flex-col w-full">
              <select
                className=" h-12 bg-dark text-white pl-3  text-2xl"
                onChange={(e) => onHandlingCategory(e)}
              >
                <option>카테고리 선택</option>
                {/* 카테고리리스트를 옵션으로 보여준다. */}
                {categoryList.map((category) => (
                  <option className="text-yellow-500">{category.name}</option>
                ))}
                <option>새 카테고리 입력</option>
              </select>
              {selectedCategory === "새 카테고리 입력" && (
                <input
                  id="categoryName"
                  className=" h-12 bg-dark text-white pl-3 mt-2 text-2xl"
                  placeholder="카테고리 직접 입력"
                  onChange={(e) => onChangeInput(e)}
                ></input>
              )}
            </div>
          </div>

          {/* 태그 선택 */}
          <div className="flex w-1/2 items-center">
            <span className="text-red-500 text-3xl mr-2">*</span>
            <div className="flex flex-col w-full">
              <select
                className=" h-12 bg-dark text-white pl-3 text-2xl"
                onChange={(e) => setSelectedTag(e.target.value)}
              >
                <option>태그 선택</option>
                {/* taglist를 filter(taglist[i].category.name===selectedCategory) */}

                {tagList
                  .filter((tag) => tag.category.name === selectedCategory)
                  .map((tag) => (
                    <option className="text-yellow-500">{tag.name}</option>
                  ))}

                <option>새 태그 입력</option>
              </select>
              {selectedTag === "새 태그 입력" && (
                <input
                  id="tagName"
                  className="h-12 bg-dark text-white pl-3 mt-2 text-2xl"
                  placeholder="태그 직접 입력"
                  onChange={(e) => onChangeInput(e)}
                ></input>
              )}
            </div>
          </div>
        </div>

        {/* 노션 페이지 아이디 입력 */}
        <div className="flex items-center mt-10 ">
          <span className="text-red-500 text-3xl mr-2">*</span>
          <input
            id="notionPageId"
            className="w-full h-20 bg-dark text-white pl-3 text-2xl"
            placeholder="노션 페이지 아이디를 입력하세요."
            onChange={(e) => onChangeInput(e)}
          ></input>
        </div>
        {/* 저장 버튼 */}
        <div
          onClick={() => onSaveWrite()}
          className="fixed z-50  border-4 border-white flex justify-center items-center cursor-pointer font-semibold transition-all duration-200
          bg-gray-700 text-white
          hover:bg-amber-500 hover:text-black
      
      w-20 h-10 rounded-[20px] text-sm bottom-5 right-5
      lg:w-40 lg:h-16 lg:rounded-[30px] lg:text-2xl lg:bottom-10 lg:right-10
      
      2xl:w-60 2xl:h-20 2xl:rounded-[40px] 2xl:text-3xl 2xl:bottom-15 2xl:right-15
      "
        >
          <span>저장</span>
        </div>
      </div>
      <div className="flex flex-col w-min-h-screen w-2/12"></div>
    </div>
  );
};

export default WriteForm;
