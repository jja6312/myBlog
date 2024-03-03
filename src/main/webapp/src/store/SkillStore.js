import { create } from "zustand";

export const useSkillStore = create((set) => ({
  // 1.종류----------------------------------------------------
  selectedCard: null,
  checkBoxes: {
    All: true,
    FrontEnd: true,
    BackEnd: true,
    DevOps: true,
    Certificate: true,
  },
  //-------------------------------------------------------------
  // 2.모아보기-----------------------------------------------------
  selectedView: "3개씩 보기",
  //-------------------------------------------------------------
  // 3.정렬------------------------------------------------------
  selectedAlignBox: "공부시간순",
  //-------------------------------------------------------------
  // 4.정렬 오름차순/내림차순-------------------------------------
  selectedOrderBy: "내림차순",
  //-------------------------------------------------------------
  // 5.데이터 저장-----------------------------------------------------
  skillList: [],
  //-------------------------------------------------------------

  // 1.종류.set----------------------------------------------------
  setSelectedCard: (id) => set({ selectedCard: id }),
  setCheckBoxes: (category) =>
    set((state) => ({
      checkBoxes: {
        ...state.checkBoxes,
        [category]: !state.checkBoxes[category],
      },
    })),
  setCheckBoxNameAll: (bool) =>
    set((state) => ({
      checkBoxes: {
        ...state.checkBoxes,
        All: bool,
      },
    })),
  // 모든 카테고리 true설정
  setCheckBoxesTrue: () =>
    set((state) => ({
      checkBoxes: {
        ...state.checkBoxes,
        All: true,
        FrontEnd: true,
        BackEnd: true,
        DevOps: true,
        Certificate: true,
      },
    })),
  // 모든 카테고리 false설정
  setCheckBoxesFalse: () =>
    set((state) => ({
      checkBoxes: {
        ...state.checkBoxes,
        All: false,
        FrontEnd: false,
        BackEnd: false,
        DevOps: false,
        Certificate: false,
      },
    })),
  //---------------------------------------------------
  // 2.모아보기.set-------------------------------------
  setSelectedView: (data) => set({ selectedView: data }),
  //---------------------------------------------------
  // 3.정렬.set------------------------------------------------------
  setSelectedAlignBox: (data) => set({ selectedAlignBox: data }),
  //-------------------------------------------------------------
  // 4.정렬 오름차순/내림차순.set-------------------------------------
  setSelectedOrderBy: (data) => set({ selectedOrderBy: data }),
  //-------------------------------------------------------------
  // 5.데이터 저장-----------------------------------------------------
  setSkillList: (data) => set({ skillList: data }),
}));
