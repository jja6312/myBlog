import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenClip } from "@fortawesome/free-solid-svg-icons";

const WritenProfile = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="relative flex justify-start items-center">
        <span className="text-xl">Writen</span>
        <FontAwesomeIcon
          className="absolute -right-9 bottom-0 text-4xl"
          icon={faPenClip}
        />
      </div>
      <hr className="mb-16"></hr>
      <div className="flex">
        {/* 프로필 사진 */}
        <div className="flex justify-center items-center rounded-full overflow-hidden w-60 h-60 ">
          <img
            alt=""
            className="w-full md:w-[120%] object-cover "
            src={`${process.env.PUBLIC_URL}/image/profile/profile2.png`}
          />
        </div>
        <div className="flex flex-col justify-center ml-4 space-y-4">
          <span className="text-3xl font-semibold">정지안</span>
          <span className="text-xl">풀스택 공부를 지향하는 백엔드 개발자</span>
        </div>
      </div>
    </div>
  );
};

export default WritenProfile;
