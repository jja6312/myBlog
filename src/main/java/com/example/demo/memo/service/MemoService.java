package com.example.demo.memo.service;

import com.example.demo.memo.bean.Memo;
import com.example.demo.memo.bean.MemoEditDTO;
import com.example.demo.memo.bean.MemoSaveDTO;

import java.util.List;

public interface MemoService {

    Memo saveMemo(MemoSaveDTO memoSaveDTO);

    List<Memo> getMemo(String clickedDate);

    Memo updateMemo(String id, String status);

    void deleteMemo(Long id);

    void editMemo(Long id, MemoEditDTO memoEditDTO);
}
