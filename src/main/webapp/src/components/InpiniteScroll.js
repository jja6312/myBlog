import React, { useEffect } from "react";

// 무한스크롤 --[24.01.27 17:47 정지안]

// ********************컴포넌트 사용법********************
//  1. 아래 코드를 복사해서 사용할 컴포넌트에 붙여넣기
// const [visibleCount, setVisibleCount] = useState(6); // 초기에 표시할 게시글의 수
// const [isLoading, setIsLoadingInfinite] = useState(false); // 로딩 상태
// const totalLength = 게시글의 적절한 길이
//
// // 스크롤 이벤트 핸들러
// const handleScroll = () => {
//     if (
//       window.innerHeight + document.documentElement.scrollTop <
//       document.documentElement.scrollHeight - 100
//     )
//       return;
//     // 전체 길이와 visibleCount를 비교
//     if (visibleCount < totalLength) {
//       setIsLoadingInfinite(true);
//       setTimeout(() => {
//         setVisibleCount((prevCount) => Math.min(prevCount + 10, totalLength)); // 최대 길이를 초과하지 않도록 설정
//         setIsLoadingInfinite(false);
//       }, 1700);
//     }
//   };

//2. 정의된 게시글 목록 뒤에 .slice(0, visibleCount) 붙여넣기.

//3. 게시글 앞 뒤를 아래 코드로 감싸기
// <InfiniteScroll
//   visibleCount={visibleCount}
//   setVisibleCount={setVisibleCount}
//   isLoading={isLoading}
//   setIsLoadingInfinite={setIsLoadingInfinite}
//   totalLength={totalLength}
// > </InfiniteScroll>
// ********************************************************

const InfiniteScroll = ({
  visibleCount,
  isLoadingInfinite,
  setVisibleCount,
  setIsLoadingInfinite,
  totalLength,
  children,
}) => {
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop <
      document.documentElement.scrollHeight - 100
    ) {
      return;
    }

    if (visibleCount < totalLength) {
      setIsLoadingInfinite(true);
      setTimeout(() => {
        setVisibleCount((prevCount) => Math.min(prevCount + 10, totalLength));
        setIsLoadingInfinite(false);
      }, 1700);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div>
      {children}
      {isLoadingInfinite && (
        <div className="w-full flex justify-center">
          <img
            src={process.env.PUBLIC_URL + "/image/loading/loading2.gif"}
            alt="Loading..."
            className="w-96 rounded-full"
          />
        </div>
      )}
    </div>
  );
};

export default InfiniteScroll;
