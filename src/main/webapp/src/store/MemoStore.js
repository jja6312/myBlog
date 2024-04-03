import { create } from "zustand";

export const useMemoStore = create((set) => ({
  allMemoList: [],

  // 메모가 업데이트될때마다 토글
  memoUpdated: false,

  setAllMemoList: (data) => set({ allMemoList: data }),
  setMemoUpdated: (boolean) => set({ memoUpdated: boolean }),
}));
