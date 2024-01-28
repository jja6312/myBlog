// 게시글 작성 시간 포맷팅 함수
export const formatCreatedAt = (createdAt) => {
  const createdAtDate = new Date(createdAt);
  const now = new Date();

  const diffTime = Math.abs(now - createdAtDate);
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays < 1) {
    const diffHours = Math.floor(diffTime / (1000 * 60 * 60));

    if (diffHours < 1) {
      // 1시간 이내라면 분 단위로 표시
      const diffMinutes = Math.floor(diffTime / (1000 * 60));
      return diffMinutes > 0 ? `${diffMinutes}분 전` : `방금 전`; // 1분 이내라면 방금 전
    } else {
      return `${diffHours}시간 전`; // 1시간 이상 24시간 이내라면 시간 단위로 표시
    }
  } else {
    return createdAtDate.toISOString().split("T")[0]; // 24시간 이상이라면 년-월-일 형식으로 표시
  }
};
