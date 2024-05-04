package memo.controller;

import com.amazonaws.Response;
import lombok.RequiredArgsConstructor;
import memo.bean.Memo;
import memo.bean.MemoEditDTO;
import memo.bean.MemoSaveDTO;
import memo.bean.MemoUpdateStatusDTO;
import memo.service.MemoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class MemoController {
    private final MemoService memoService;

    @PostMapping(path = "/memo/saveMemo")
    public ResponseEntity<Memo> saveMemo(@RequestBody MemoSaveDTO memoSaveDTO) {
        return ResponseEntity.ok(memoService.saveMemo(memoSaveDTO));
    }

    @GetMapping(path = "/memo/getMemo")
    public ResponseEntity<List<Memo>> getMemo(@RequestParam String clickedDate) {

        return ResponseEntity.ok(memoService.getMemo(clickedDate));
    }

    @PostMapping(path = "/memo/updateStatus")
    public ResponseEntity<Memo> updateStatus(@RequestBody MemoUpdateStatusDTO memoUpdateStatusDTO) {
        String id= memoUpdateStatusDTO.getId();
        String status = memoUpdateStatusDTO.getStatus();

        System.out.println(id + "@@@");
        System.out.println(status + "@@@");
        return ResponseEntity.ok(memoService.updateMemo(id, status));
    }

    @DeleteMapping("/memo/deleteMemo/{id}")
    public ResponseEntity<?> deleteMemo(@PathVariable Long id){
        System.out.println(id);
        memoService.deleteMemo(id);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/memo/editMemo/{id}")
    public ResponseEntity<?> editMemo(@PathVariable Long id, @RequestBody MemoEditDTO memoEditDTO){
        memoService.editMemo(id, memoEditDTO);

        return ResponseEntity.ok().build();
    }
}
