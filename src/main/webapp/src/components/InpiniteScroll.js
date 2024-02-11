import React, { useEffect } from "react";

// 무한스크롤 --[24.01.27 17:47 정지안]

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
