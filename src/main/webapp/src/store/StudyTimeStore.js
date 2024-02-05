import { create } from "zustand";

//주로 메인 화면, 공부 시간 관련 데이터를 저장하는 store
export const useStudyTimeStore = create((set) => ({
  yearlyStudyTime: [], // 연간, 날짜별 공부량
  clickedDate: "", //선택된 날짜
  devlogListAtDate: [], //선택된 일자별 개발일지 목록

  averageStudyTimePerDay: 0, //평균 주중 공부시간(분단위)
  averageStudyTimePerWeekend: 0, //평균 주말 공부시간(분단위)
  averageStudyTimePerSum: 0, //평균 일별 공부시간(분단위)

  setYearlyStudyTime: (data) => set({ yearlyStudyTime: data }),
  setClickedDate: (date) => set({ clickedDate: date }),
  setDevlogListAtDate: (data) => set({ devlogListAtDate: data }),
  setAverageStudyTimePerDay: (data) => set({ averageStudyTimePerDay: data }),
  setAverageStudyTimePerWeekend: (data) =>
    set({ averageStudyTimePerWeekend: data }),
  setAverageStudyTimePerSum: (data) => set({ averageStudyTimePerSum: data }),
}));
