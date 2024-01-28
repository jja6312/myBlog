// 시간을 HH:MM:SS 형식으로 포맷. 스톱워치와 같은 곳에서 사용.
export const formatTime = (timer) => {
  const getTwoDigits = (num) => String(num).padStart(2, "0");
  let seconds = timer % 60;
  let minutes = Math.floor(timer / 60) % 60;
  let hours = Math.floor(timer / 3600);
  return `${getTwoDigits(hours)}:${getTwoDigits(minutes)}:${getTwoDigits(
    seconds
  )}`;
};
