package memo.service;

import memo.bean.Memo;
import memo.bean.MemoSaveDTO;

import memo.repository.MemoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

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

    @Override
    public List<Memo> getMemo(String clickedDate) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        LocalDate date = LocalDate.parse(clickedDate, formatter);

        LocalDateTime startOfDay = date.atStartOfDay(); // 선택된 날짜의 00시부터
        LocalDateTime endOfDay = date.plusDays(1).atStartOfDay(); // 24시까지!

        return memoRepository.findMemosByCreatedAtBetween(startOfDay, endOfDay);
    }
}
