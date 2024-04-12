import React, { useEffect, useRef, useState } from "react";
import SaveBtn from "../common/button/SaveBtn";
import axios from "axios";

const ProjectWriteForm = () => {
  const imgRef = useRef(null);
  const [checkStatus, setCheckStatus] = useState(false);
  const [imagePreview, setImagePreview] = useState(
    "/image/nullImage/nullImage1.png"
  ); // 이미지 미리보기
  const [projectDTO, setProjectDTO] = useState({
    title: "",
    detail: "",
    type: "개인 프로젝트",
    startDate: "",
    endDate: "",
    img: "",
    notionPageId: "",
    githubAddress: "",
    deployAddress: "",
  });

  // 진행중 체크박스 상태 변경 함수
  const handleCheckContinous = (e) => {
    setCheckStatus(e.target.checked);
    if (e.target.checked) {
      setProjectDTO({
        ...projectDTO,
        endDate: "",
      });
    }
  };

  // 파일을 Base64 문자열로 변환하는 함수
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  // projectDTO 상태값 변경 함수
  const handleProjectDTO = async (e) => {
    const { id, value, files } = e.target;
    if (files) {
      const base64 = await convertToBase64(files[0]);
      setProjectDTO({
        ...projectDTO,
        [id]: base64,
      });
      setImagePreview(base64); // 이미지 미리보기 설정
    } else {
      setProjectDTO({
        ...projectDTO,
        [id]: value,
      });
    }
  };

  // 프로젝트 저장 함수
  const saveProject = () => {
    if (
      prompt("정지안이 아니면 저장하지 마세요. 추적이 가능합니다.") !== "정지안"
    ) {
      alert("좋은 선택입니다.");
      return;
    }
    if (projectDTO.title === "") {
      alert("제목을 입력해주세요.");
      return;
    }
    if (projectDTO.startDate === "") {
      alert("시작 날짜를 입력해주세요.");
      return;
    }
    if (projectDTO.endDate === "" && checkStatus === false) {
      alert("종료 날짜를 입력해주세요.");
      return;
    }
    if (projectDTO.img === "") {
      alert("이미지를 추가해주세요.");
      return;
    }
    if (projectDTO.notionPageId === "") {
      alert("노션 페이지 아이디를 입력해주세요.");
      return;
    }

    axios
      .post("http://43.203.18.91:8080/project/save", projectDTO)
      .then((response) => {
        console.log(response.data);
        alert("프로젝트가 저장되었습니다.");
        window.location.href = "/project";
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    console.log(projectDTO);
  }, [projectDTO]);

  return (
    <div className="flex w-full min-h-screen bg-dark">
      <div className="flex flex-col w-min-h-screen w-2/12"></div>
      <div className="flex flex-col w-min-h-screen bg-darkDeep w-8/12 p-5">
        <span className="text-white text-6xl ml-6">프로젝트 추가</span>
        {/* 제목 입력 */}
        <div className="flex items-center mt-10">
          <span className="text-red-500 text-3xl mr-2">*</span>
          <input
            id="title"
            onChange={handleProjectDTO}
            className="w-full h-20 bg-darkDeep text-white p-3 text-4xl border border-gray-700"
            placeholder="프로젝트 이름을 입력하세요."
          ></input>
        </div>
        {/* 내용 */}
        <div className="flex items-center mt-10">
          <span className="text-red-500 text-3xl mr-2">*</span>
          <textarea
            id="detail"
            onChange={handleProjectDTO}
            className="w-full h-20 bg-darkDeep text-white p-3 text-lg border border-gray-700"
            placeholder="간단한 설명을 입력하세요."
          ></textarea>
        </div>
        <div className="flex items-center mt-10">
          <span className="text-red-500 text-3xl mr-2">*</span>
          <select
            id="type"
            onChange={handleProjectDTO}
            className="w-full h-10 bg-darkDeep text-white pl-2 text-2xl border border-gray-700"
          >
            <option value="개인 프로젝트">개인 프로젝트</option>
            <option value="팀 프로젝트">팀 프로젝트</option>
          </select>
        </div>
        {/* 개발 시작날짜 */}
        <div className="flex items-center mt-10">
          <span className="text-red-500 text-3xl mr-2">*</span>
          <span className="text-3xl mr-2">개발 시작 날짜 : </span>
          <input
            id="startDate"
            type="date"
            value={projectDTO.startDate}
            onChange={handleProjectDTO}
            className="border-2 border-gray-300 p-2 rounded-md"
          />
        </div>
        {/* 개발 종료날짜 */}
        <div className="flex items-center mt-10">
          <span className="text-darkDeep text-3xl mr-2">*</span>
          <span className="text-3xl mr-2">개발 종료 날짜 : </span>
          <input
            id="endDate"
            type="date"
            value={projectDTO.endDate}
            onChange={handleProjectDTO}
            className="border-2 border-gray-300 p-2 rounded-md"
          />
          <span className="text-3xl ml-5">진행중</span>
          <input
            type="checkbox"
            className="ml-5 w-10 h-10"
            onChange={handleCheckContinous}
            value={checkStatus}
          />
        </div>

        <div className="flex w-full space-x-6 mt-2">
          <div className="flex flex-col w-full  items-center mt-2 ">
            <div className="flex w-full items-center">
              <span className="text-red-500 text-3xl mr-2">*</span>
              {/* 썸네일 input */}
              <input
                id="img"
                ref={imgRef}
                type="file"
                hidden
                onChange={handleProjectDTO}
              />

              <div
                className="flex items-center w-full p-6 object-cover cursor-pointer bg-dark hover:opacity-50"
                onClick={() => imgRef.current.click()}
              >
                {/* 게시글 썸네일 미리보기 */}
                <div className="w-32 h-32">
                  <img
                    alt=""
                    className="object-cover w-full h-full"
                    src={imagePreview}
                  ></img>
                </div>
                <span className="text-gray-400 text-2xl ml-12">
                  프로젝트 썸네일 추가
                </span>
              </div>
            </div>
            {/* 노션 페이지 아이디 입력 */}
            <div className="flex w-full items-center mt-2">
              <span className="text-red-500 text-3xl mr-2">*</span>
              <input
                id="notionPageId"
                className="w-full h-20 bg-dark text-white pl-3 text-2xl"
                placeholder="노션 페이지 아이디 입력"
                onChange={handleProjectDTO}
              ></input>
            </div>
            {/* 깃허브 주소 입력 */}
            <div className="flex w-full items-center mt-2">
              <span className="text-darkDeep text-3xl mr-2">*</span>
              <input
                id="githubAddress"
                className="w-full h-20 bg-dark text-white pl-3 text-2xl"
                placeholder="깃허브주소 입력"
                onChange={handleProjectDTO}
              ></input>
            </div>
            {/* 배포 주소 입력 */}
            <div className="flex w-full items-center mt-2">
              <span className="text-darkDeep text-3xl mr-2">*</span>
              <input
                id="deployAddress"
                className="w-full h-20 bg-dark text-white pl-3 text-2xl"
                placeholder="배포 주소 입력"
                onChange={handleProjectDTO}
              ></input>
            </div>
          </div>
          {/* 저장 버튼 */}
          <div onClick={saveProject}>
            <SaveBtn></SaveBtn>
          </div>
        </div>
        <div className="flex flex-col w-min-h-screen w-2/12"></div>
      </div>
    </div>
  );
};

export default ProjectWriteForm;
