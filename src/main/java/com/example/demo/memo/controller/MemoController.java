package com.example.demo.memo.controller;

import com.example.demo.memo.bean.Memo;
import com.example.demo.memo.bean.MemoEditDTO;
import com.example.demo.memo.bean.MemoSaveDTO;
import com.example.demo.memo.bean.MemoUpdateStatusDTO;
import com.example.demo.memo.service.MemoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/memo")
public class MemoController {
    private final MemoService memoService;

    @Autowired
    public MemoController(MemoService memoService) {
        this.memoService = memoService;
    }

    @PostMapping(path = "/saveMemo")
    public ResponseEntity<Memo> saveMemo(@RequestBody MemoSaveDTO memoSaveDTO) {
        return ResponseEntity.ok(memoService.saveMemo(memoSaveDTO));
    }

    @GetMapping(path = "/getMemo")
    public ResponseEntity<List<Memo>> getMemo(@RequestParam String clickedDate) {

        return ResponseEntity.ok(memoService.getMemo(clickedDate));
    }

    @PostMapping(path = "/updateStatus")
    public ResponseEntity<Memo> updateStatus(@RequestBody MemoUpdateStatusDTO memoUpdateStatusDTO) {
        String id= memoUpdateStatusDTO.getId();
        String status = memoUpdateStatusDTO.getStatus();

        System.out.println(id + "@@@");
        System.out.println(status + "@@@");
        return ResponseEntity.ok(memoService.updateMemo(id, status));
    }

    @DeleteMapping("/deleteMemo/{id}")
    public ResponseEntity<?> deleteMemo(@PathVariable Long id){
        System.out.println(id);
        memoService.deleteMemo(id);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/editMemo/{id}")
    public ResponseEntity<?> editMemo(@PathVariable Long id, @RequestBody MemoEditDTO memoEditDTO){
        memoService.editMemo(id, memoEditDTO);

        return ResponseEntity.ok().build();
    }
}
