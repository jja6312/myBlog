import React from "react";
import Hexagon from "./Hexagon";

// 개발일지의 카테고리 선택 페이지 [24.01.24 15:50 정지안]

const DevlogLeft = ({
  hexagonArrays, // 화면상 왼쪽으로부터 구성된 4개의 Hexagon 배열.
}) => {
  // 각 배열을 6개의 육각형요소 구성하는 함수
  const ensureSixHexagons = (array, columnIndex) => {
    // 배열을 카테고리 이름을 writeItems로 사용하는 객체로 변환
    const filledArray = array.map((items) => ({
      writeItems: items,
      notYetFilledCategory: false, // 카테고리 데이터를 할당받지 않은 육각형
      length: "(" + items.writeListByCategory.length + ")",
    }));

    // 부족한 육각형 항목을 고유한 writeItems로 채움
    while (filledArray.length < 6) {
      filledArray.push({
        writeItems: {
          categoryName: `notYetFilledCategory-${columnIndex}-${filledArray.length}`,
        },
        notYetFilledCategory: true,
        length: "",
      });
    }
    console.log("filledArray", filledArray);

    return filledArray;
  };

  return (
    <div className="relative w-[25vw] hidden md:flex  justify-center pb-10">
      <span
        className="absolute top-7   italic
      text-[10px]
      md:text-[13px] md:right-[10px]
      xl:text-3xl xl:right-8
      "
      >
        Categories
      </span>

      {/* 첫 번째 육각형 줄 */}
      <div className="w-1/4 flex flex-col mt-[0vw] -translate-x-[0vw]">
        {hexagonArrays[0] &&
          ensureSixHexagons(hexagonArrays[0], 0).map((hexagon, index) => (
            <Hexagon
              key={`hexagon-0-${index}`}
              writeItems={hexagon.writeItems}
              imgSrc={
                hexagon.notYetFilledCategory
                  ? "/image/categories/darkDeep.png"
                  : hexagon.writeItems.categoryName === "전체 글"
                  ? "/image/categories/all.png"
                  : hexagon.writeItems.writeListByCategory[0].category
                      .categoryThumbnail
              }
              writeAccount={hexagon.length}
              loadingIndex="0"
            />
          ))}
      </div>

      {/* 두 번째 육각형 줄 */}
      <div className="w-1/4 flex flex-col mt-[3.45vw] -translate-x-[0.5vw]">
        {hexagonArrays[1] &&
          ensureSixHexagons(hexagonArrays[1], 1).map((hexagon, index) => (
            <Hexagon
              key={`hexagon-1-${index}`}
              writeItems={hexagon.writeItems}
              imgSrc={
                hexagon.notYetFilledCategory
                  ? "/image/categories/darkDeep.png"
                  : hexagon.writeItems.categoryName === "전체 글"
                  ? "/image/categories/all.png"
                  : hexagon.writeItems.writeListByCategory[0].category
                      .categoryThumbnail
              }
              writeAccount={hexagon.length}
              loadingIndex="1"
            />
          ))}
      </div>

      {/* 세 번째 육각형 줄 */}
      <div className="w-1/4 flex flex-col mt-[6.9vw] -translate-x-[1vw]">
        {hexagonArrays[2] &&
          ensureSixHexagons(hexagonArrays[2], 2).map((hexagon, index) => (
            <Hexagon
              key={`hexagon-2-${index}`}
              writeItems={hexagon.writeItems}
              imgSrc={
                hexagon.notYetFilledCategory
                  ? "/image/categories/darkDeep.png"
                  : hexagon.writeItems.categoryName === "전체 글"
                  ? "/image/categories/all.png"
                  : hexagon.writeItems.writeListByCategory[0].category
                      .categoryThumbnail
              }
              writeAccount={hexagon.length}
              loadingIndex="2"
            />
          ))}
      </div>

      {/* 네 번째 육각형 줄 */}
      <div className="w-1/4 flex flex-col mt-[10.35vw] -translate-x-[1.5vw]">
        {hexagonArrays[3] &&
          ensureSixHexagons(hexagonArrays[3], 3).map((hexagon, index) => (
            <Hexagon
              key={`hexagon-3-${index}`}
              writeItems={hexagon.writeItems}
              imgSrc={
                hexagon.notYetFilledCategory
                  ? "/image/categories/darkDeep.png"
                  : hexagon.writeItems.categoryName === "전체 글"
                  ? "/image/categories/all.png"
                  : hexagon.writeItems.writeListByCategory[0].category
                      .categoryThumbnail
              }
              writeAccount={hexagon.length}
              loadingIndex="3"
            />
          ))}
      </div>
    </div>
  );
};

export default DevlogLeft;
