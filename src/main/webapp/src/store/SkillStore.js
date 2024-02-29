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
  // 1.종류-set----------------------------------------------------
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
  // 2.모아보기-set-------------------------------------
  setSelectedView: (data) => set({ selectedView: data }),
  //---------------------------------------------------
}));
