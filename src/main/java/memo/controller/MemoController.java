package memo.controller;

import memo.bean.Memo;
import memo.bean.MemoSaveDTO;
import memo.service.MemoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class MemoController {
    private final MemoService memoService;
    @Autowired
    public MemoController(MemoService memoService){
        this.memoService = memoService;
    }

    @PostMapping(path="/memo/saveMemo")
    public ResponseEntity<Memo> saveMemo(@RequestBody MemoSaveDTO memoSaveDTO){
        return ResponseEntity.ok(memoService.saveMemo(memoSaveDTO));
    }

    @GetMapping(path="/memo/getMemo")
    public ResponseEntity<List<Memo>> getMemo(@RequestParam String clickedDate){

        return ResponseEntity.ok(memoService.getMemo(clickedDate));
    }
}
