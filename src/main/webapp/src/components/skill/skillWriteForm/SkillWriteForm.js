import React, { useEffect, useRef, useState } from "react";
import SaveBtn from "../../common/button/SaveBtn";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SkillWriteForm = () => {
  const navigate = useNavigate();
  const imgRefWrite = useRef();

  const [imgListWrite, setImgListWrite] = useState(
    `${process.env.PUBLIC_URL}/image/nullImage/nullImage1.png`
  );

  // 제목,카테고리,태그,노션 페이지 아이디를 저장하는 객체
  const [writeDTO, setWriteDTO] = useState({
    name: "",
    type: "",
    strength: "",
    weakness: "",
    writeThumbnail: "",
  });

  // 파일을 Base64 문자열로 변환하는 함수
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const onChangeInput = (e) => {
    const { id, value } = e.target;
    setWriteDTO({
      ...writeDTO,
      [id]: value,
    });
  };

  const onImgInput = async (e) => {
    const { name, files } = e.target;
    //미리보기설정 setImgListCategory
    if (name === "writeThumbnail") {
      setImgListWrite(URL.createObjectURL(files[0]));
    }
    //base64로 변환하여 DTO에 저장

    if (files.length > 0) {
      const base64 = await convertToBase64(files[0]);

      setWriteDTO((prev) => ({ ...prev, [name]: base64 }));
    }
  };

  // 저장 로직
  const onSaveWrite = () => {
    console.log(writeDTO);
    // 간단한 본인 확인
    const tmpInput = prompt("정지안이 아니면 저장하지 마세요.");
    if (tmpInput !== "정지안") {
      alert("You are not 정지안. 저장하지 않습니다");
      return;
    }

    //유효성검사
    if (writeDTO.name === "") {
      alert("제목을 입력하세요.");
      return;
    }
    if (writeDTO.type === "") {
      alert("카테고리를 선택하세요.");
      return;
    }
    if (writeDTO.strength === "") {
      alert("활용가능한 범위를 입력하세요.");
      return;
    }
    if (writeDTO.weakness === "") {
      alert("부족한 점을 입력하세요.");
      return;
    }

    if (writeDTO.writeThumbnail === "") {
      alert("이미지를 등록하세요.");
      return;
    }

    axios
      .post("http://43.203.18.91:8080/skill/save", writeDTO, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        alert("저장에 성공했습니다.");
        console.log(res);
        navigate("/skill");
      })
      .catch((err) => {
        alert("저장에 실패했습니다.");
        console.log(err);
      });
  };

  useEffect(() => {
    console.log("writeDTO", writeDTO);
  }, [writeDTO]);

  return (
    <div className="flex w-full min-h-screen bg-dark">
      <div className="flex flex-col w-min-h-screen w-2/12"></div>
      <div className="flex flex-col w-min-h-screen bg-darkDeep w-8/12 p-5">
        <span className="text-white text-6xl ml-6">기술스택 추가</span>
        {/* 제목 입력 */}
        <div className="flex items-center mt-10">
          <span className="text-red-500 text-3xl mr-2">*</span>
          <input
            id="name"
            onChange={(e) => onChangeInput(e)}
            className="w-full h-20 bg-darkDeep text-white p-3 text-4xl border border-gray-700"
            placeholder="기술스택 이름을 입력해주세요."
          ></input>
        </div>
        <div className="flex items-center mt-10">
          <span className="text-red-500 text-3xl mr-2">*</span>
          <select
            id="type"
            onChange={(e) => onChangeInput(e)}
            className="w-full h-14 bg-dark text-white p-3 text-xl "
          >
            <option value="">선택</option>
            <option value="FrontEnd">FrontEnd</option>
            <option value="BackEnd">BackEnd</option>
            <option value="DevOps">DevOps</option>
            <option value="Certificate">Certificate</option>
          </select>
        </div>
        <div className="flex w-full space-x-6 mt-2"></div>
        <div className="flex flex-col w-full  items-center mt-2 ">
          <div className="flex w-full items-center">
            <span className="text-red-500 text-3xl mr-2">*</span>
            {/* 썸네일 input */}
            <input
              id="imgWriteInput"
              name="writeThumbnail"
              ref={imgRefWrite}
              type="file"
              onChange={onImgInput}
              hidden
            />
            {/* 게시글 썸네일 미리보기 */}

            <div
              className="flex items-center w-full p-6 object-cover cursor-pointer bg-dark hover:opacity-50"
              onClick={() => imgRefWrite.current.click()}
            >
              <div className="w-32 h-32">
                <img
                  alt=""
                  className="object-cover w-full h-full"
                  src={imgListWrite}
                ></img>
              </div>
              <span className="text-gray-400 text-2xl ml-12">
                기술스택 로고 추가
              </span>
            </div>
          </div>
          {/* 기술스택 견해 입력 */}
          <div className="flex w-full items-center mt-2">
            <span className="text-red-500 text-3xl mr-2">*</span>
            <textarea
              id="strength"
              className="w-full h-28 bg-dark text-white pl-3 text-2xl"
              placeholder="어디까지 활용할 수 있나요?"
              onChange={(e) => onChangeInput(e)}
            ></textarea>
          </div>
          <div className="flex w-full items-center mt-2">
            <span className="text-red-500 text-3xl mr-2">*</span>
            <textarea
              id="weakness"
              className="w-full h-28 bg-dark text-white pl-3 text-2xl"
              placeholder="어떤점이 부족하다고 생각하나요?"
              onChange={(e) => onChangeInput(e)}
            ></textarea>
          </div>
        </div>
        {/* 저장 버튼 */}
        <div onClick={() => onSaveWrite()}>
          <SaveBtn></SaveBtn>
        </div>
      </div>
      <div className="flex flex-col w-min-h-screen w-2/12"></div>
    </div>
  );
};

export default SkillWriteForm;
