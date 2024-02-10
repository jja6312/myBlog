import { create } from "zustand";

//주로 메인 화면, 공부 시간 관련 데이터를 저장하는 store
export const useStudyTimeStore = create((set) => ({
  // 메인 중간-상단 깃허브 대시보드
  yearlyStudyTime: [], // 연간, 날짜별 공부량
  clickedDate: "", //선택된 날짜
  devlogListAtDate: [], //선택된 일자별 개발일지 목록

  // 메인 중간-중단, 기간별학습종류
  clickedRange: "최근 1주일", //선택된 기간
  studyTimeByDayGroupByCategory: [], //일별 학습 종류 및 시간
  studyTimeGroupByCategory: [], //기간별 학습 종류 및 시간

  // 메인 오른쪽, 기간별 학습시간
  averageStudyTimePerDay: 0, //평균 주중 공부시간(분단위)
  averageStudyTimePerWeekend: 0, //평균 주말 공부시간(분단위)
  averageStudyTimeAll: 0, //평균 일별 공부시간(분단위)

  setYearlyStudyTime: (data) => set({ yearlyStudyTime: data }),
  setClickedDate: (date) => set({ clickedDate: date }),
  setDevlogListAtDate: (data) => set({ devlogListAtDate: data }),
  setAverageStudyTimePerDay: (data) => set({ averageStudyTimePerDay: data }),
  setAverageStudyTimePerWeekend: (data) =>
    set({ averageStudyTimePerWeekend: data }),
  setAverageStudyTimeAll: (data) => set({ averageStudyTimeAll: data }),
  setClickedRange: (data) => set({ clickedRange: data }),
  setStudyTimeByDayGroupByCategory: (data) =>
    set({ studyTimeByDayGroupByCategory: data }),
  setStudyTimeGroupByCategory: (data) =>
    set({ studyTimeGroupByCategory: data }),
}));
