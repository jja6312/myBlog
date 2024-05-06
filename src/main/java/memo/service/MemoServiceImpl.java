package memo.service;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
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
@RequiredArgsConstructor
public class MemoServiceImpl implements MemoService {
    private final MemoRepository memoRepository;


    @Override
    public Memo saveMemo(MemoSaveDTO memoSaveDTO) {
        Memo memo = Memo.builder()
                .content(memoSaveDTO.getContent())
                .status(memoSaveDTO.getStatus())
                .build();
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
    public Memo updateMemo(String idStr, String statusStr) {//메모의 status수정
        Long id = Long.parseLong(idStr);
        Status status;
        try {//status 값이 유효한지 확인
            status = Status.valueOf(statusStr);
        } catch (IllegalArgumentException e) {
            throw new IllegalArgumentException("유효하지 않은 status 값: " + statusStr);
        }

        // id로 메모를 찾아옴
        Memo memo = memoRepository.findById(id)
                                  .orElseThrow(() -> new EntityNotFoundException("해당 메모 ID를 찾을 수 없음. ID:" + id));
        memo.setStatus(status); // 메모의 상태를 수정


        return memoRepository.save(memo); // 수정된 메모를 저장하고 반환

    }

    @Override
    public void deleteMemo(Long id) {
        memoRepository.deleteById(id);
    }

    @Override
    public void editMemo(Long id, MemoEditDTO memoEditDTO) {//메모의 content 수정
        Memo memo = memoRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("해당 메모 ID를 찾을 수 없음. ID:" + id));
        memo.setContent(memoEditDTO.getContent());

        memoRepository.save(memo);

    }//editMemo
}
