package memo.service;

import memo.bean.Memo;
import memo.bean.MemoSaveDTO;

public interface MemoService {

    Memo saveMemo(MemoSaveDTO memoSaveDTO);
}
