package memo.service;

import memo.bean.Memo;
import memo.bean.MemoEditDTO;
import memo.bean.MemoSaveDTO;

import java.util.List;

public interface MemoService {

    Memo saveMemo(MemoSaveDTO memoSaveDTO);

    List<Memo> getMemo(String clickedDate);

    Memo updateMemo(String id, String status);

    void deleteMemo(Long id);

    void editMemo(Long id, MemoEditDTO memoEditDTO);
}
