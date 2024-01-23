import React from "react";
import Hexagon from "./Hexagon";

const DevlogLeft = ({ isSelected, setIsSelected }) => {
  return (
    <div className="relative w-[25vw] flex justify-center pb-10">
      <span className="absolute top-7 right-8 text-3xl italic">Categories</span>
      <div className="w-1/4 flex flex-col ">
        <Hexagon
          isSelected={isSelected}
          setIsSelected={setIsSelected}
          id="1"
          imgSrc="/image/test/all.png"
          writeAccount="341"
        />
        <Hexagon
          isSelected={isSelected}
          setIsSelected={setIsSelected}
          id="2"
          imgSrc="/image/test/spring.png"
          writeAccount="75"
        />
        <Hexagon
          isSelected={isSelected}
          setIsSelected={setIsSelected}
          id="3"
          imgSrc=""
          writeAccount="Fill me"
        />
        <Hexagon
          isSelected={isSelected}
          setIsSelected={setIsSelected}
          id="4"
          imgSrc=""
          writeAccount="Fill me"
        />
        <Hexagon
          isSelected={isSelected}
          setIsSelected={setIsSelected}
          id="5"
          imgSrc=""
          writeAccount="Fill me"
        />
        <Hexagon
          isSelected={isSelected}
          setIsSelected={setIsSelected}
          id="6"
          imgSrc=""
          writeAccount="Fill me"
        />
      </div>
      <div className="w-1/4 flex flex-col mt-[3.45vw] -translate-x-[0.5vw]">
        <Hexagon
          isSelected={isSelected}
          setIsSelected={setIsSelected}
          id="7"
          imgSrc=""
          writeAccount="Fill me"
        />
        <Hexagon
          isSelected={isSelected}
          setIsSelected={setIsSelected}
          id="8"
          imgSrc=""
          writeAccount="Fill me"
        />
        <Hexagon
          isSelected={isSelected}
          setIsSelected={setIsSelected}
          id="9"
          imgSrc=""
          writeAccount="Fill me"
        />
        <Hexagon
          isSelected={isSelected}
          setIsSelected={setIsSelected}
          id="10"
          imgSrc=""
          writeAccount="Fill me"
        />
        <Hexagon
          isSelected={isSelected}
          setIsSelected={setIsSelected}
          id="11"
          imgSrc=""
          writeAccount="Fill me"
        />
        <Hexagon
          isSelected={isSelected}
          setIsSelected={setIsSelected}
          id="12"
          imgSrc=""
          writeAccount="Fill me"
        />
      </div>
      <div className="w-1/4 flex flex-col mt-[6.9vw] -translate-x-[1vw]">
        <Hexagon
          isSelected={isSelected}
          setIsSelected={setIsSelected}
          id="13"
          imgSrc=""
          writeAccount="Fill me"
        />
        <Hexagon
          isSelected={isSelected}
          setIsSelected={setIsSelected}
          id="14"
          imgSrc=""
          writeAccount="Fill me"
        />
        <Hexagon
          isSelected={isSelected}
          setIsSelected={setIsSelected}
          id="15"
          imgSrc=""
          writeAccount="Fill me"
        />
        <Hexagon
          isSelected={isSelected}
          setIsSelected={setIsSelected}
          id="16"
          imgSrc=""
          writeAccount="Fill me"
        />
        <Hexagon
          isSelected={isSelected}
          setIsSelected={setIsSelected}
          id="17"
          imgSrc=""
          writeAccount="Fill me"
        />
        <Hexagon
          isSelected={isSelected}
          setIsSelected={setIsSelected}
          id="18"
          imgSrc=""
          writeAccount="Fill me"
        />
      </div>
      <div className="w-1/4 flex flex-col mt-[10.35vw] -translate-x-[1.5vw]">
        <Hexagon
          isSelected={isSelected}
          setIsSelected={setIsSelected}
          id="19"
          imgSrc=""
          writeAccount="Fill me"
        />
        <Hexagon
          isSelected={isSelected}
          setIsSelected={setIsSelected}
          id="20"
          imgSrc=""
          writeAccount="Fill me"
        />
        <Hexagon
          isSelected={isSelected}
          setIsSelected={setIsSelected}
          id="21"
          imgSrc=""
          writeAccount="Fill me"
        />
        <Hexagon
          isSelected={isSelected}
          setIsSelected={setIsSelected}
          id="22"
          imgSrc=""
          writeAccount="Fill me"
        />
        <Hexagon
          isSelected={isSelected}
          setIsSelected={setIsSelected}
          id="23"
          imgSrc=""
          writeAccount="Fill me"
        />
        <Hexagon
          isSelected={isSelected}
          setIsSelected={setIsSelected}
          id="24"
          imgSrc=""
          writeAccount="Fill me"
        />
      </div>
    </div>
  );
};

export default DevlogLeft;
