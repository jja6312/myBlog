import { create } from "zustand";

export const useDevlogStore = create((set) => ({
  isLoading: false,
  isSelected: "전체 글", //선택된 카테고리 이름
  selectedDevlogWriteList: {}, // 선택된 카테고리에 대해 filter된 devlogWriteList(개발일지)를 저장하는 state
  devlogWriteList: [], //개발일지 리스트
  groupedDevlogs: {}, // 카테고리별로 그룹화된 개발일지 리스트

  // ------------/Devlog/DevlogRight
  selectedFilter: { topic: "", tag: "" }, // 선택된 토픽과 태그를 저장하는 state

  setIsLoading: (data) => set({ isLoading: data }),
  setIsSelected: (data) => set({ isSelected: data }),
  setSelectedDevlogWriteList: (data) => set({ selectedDevlogWriteList: data }),
  setDevlogWriteList: (data) => set({ devlogWriteList: data }),
  setGroupedDevlogs: (data) => set({ groupedDevlogs: data }),
  setSelectedFilter: (data) => set({ selectedFilter: data }),
}));
