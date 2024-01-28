export const formatCreatedAt = (createdAt) => {
  const createdAtDate = new Date(createdAt);
  const now = new Date();

  const diffTime = Math.abs(now - createdAtDate);
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays < 1) {
    const diffHours = Math.floor(diffTime / (1000 * 60 * 60));

    if (diffHours < 1) {
      const diffMinutes = Math.floor(diffTime / (1000 * 60));
      return diffMinutes > 0 ? `${diffMinutes}분 전` : `방금 전`;
    } else {
      return `${diffHours}시간 전`;
    }
  } else {
    return createdAtDate.toISOString().split("T")[0];
  }
};
