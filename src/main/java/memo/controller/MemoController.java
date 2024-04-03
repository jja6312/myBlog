package memo.controller;

import memo.bean.Memo;
import memo.bean.MemoSaveDTO;
import memo.service.MemoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

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
        System.out.println(memoSaveDTO.getContent()+"!!!!!!!!!!!!!!");

        return ResponseEntity.ok(memoService.saveMemo(memoSaveDTO));
    }
}
