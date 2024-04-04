package memo.service;

import jakarta.persistence.EntityNotFoundException;
import memo.bean.Memo;
import memo.bean.MemoEditDTO;
import memo.bean.MemoSaveDTO;

import memo.bean.Status;
import memo.repository.MemoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;

@Service
public class MemoServiceImpl implements MemoService {
    private final MemoRepository memoRepository;

    @Autowired
    public MemoServiceImpl(MemoRepository memoRepository) {
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

    @Override
    public Memo updateMemo(String idStr, String statusStr) {
        Long id = Long.parseLong(idStr);
        Optional<Memo> memoFindedId = memoRepository.findById(id);

        if (memoFindedId.isPresent()) {
            try {

                Memo memo = memoFindedId.get();
                Status status = Status.valueOf(statusStr);
                memo.setStatus(status);
                return memoRepository.save(memo); // 수정된 메모를 저장하고 반환
            } catch (IllegalArgumentException e) {
                throw new IllegalArgumentException("유효하지 않은 status 값입니다: " + statusStr);
            }
        } else {
            throw new EntityNotFoundException("해당 id의 메모를 찾을 수 없음. id: " + id);
        }


    }

    @Override
    public void deleteMemo(Long id) {
        memoRepository.deleteById(id);
    }

    @Override
    public void editMemo(Long id, MemoEditDTO memoEditDTO) {
        Optional<Memo> memoOptional = memoRepository.findById(id);
        if (memoOptional.isPresent()) {
            Memo memo = memoOptional.get();
            memo.setContent(memoEditDTO.getContent());
            memoRepository.save(memo);
        } else {
            throw new EntityNotFoundException("해당 메모 ID를 찾을 수 없음. ID:" + id);
        }

    }//editMemo
}
