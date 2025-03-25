package com.example.demo.skill.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.demo.skill.bean.SkillWriteDTO;
import com.example.demo.skill.bean.SkillWriteFilterDTO;
import com.example.demo.skill.service.SkillService;

import java.util.List;
import java.util.Map;

@CrossOrigin
@RestController
@RequestMapping("/api/skill")
public class SkillController {
    @Autowired
    private SkillService skillService;

    // 글 '저장'버튼을 누르면 devlogWrite에 글 정보를 담는다.
    @PostMapping(value = "/save")
    public void saveSkill(@RequestBody SkillWriteDTO skillWriteDTO) {
        System.out.println("hi");
        skillService.saveWrite(skillWriteDTO);
    }

    @GetMapping(value="/getSkillList")
    public ResponseEntity<List<SkillWriteFilterDTO>> getSkillList(@RequestParam Map<String, String> allParams){
        return ResponseEntity.ok(skillService.getSkillList(allParams));

    }


}
