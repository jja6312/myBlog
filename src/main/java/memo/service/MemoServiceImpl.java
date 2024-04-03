package memo.service;

import memo.bean.Memo;
import memo.bean.MemoSaveDTO;

import memo.repository.MemoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MemoServiceImpl implements MemoService{
    private final MemoRepository memoRepository;
    @Autowired
    public MemoServiceImpl(MemoRepository memoRepository){
        this.memoRepository = memoRepository;
    }


    @Override
    public Memo saveMemo(MemoSaveDTO memoSaveDTO) {
        Memo memo = new Memo();
        memo.setContent(memoSaveDTO.getContent());
        memo.setStatus(memoSaveDTO.getStatus());

        return memoRepository.save(memo);
    }
}
