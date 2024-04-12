package skill.controller;

import devlog.bean.DevlogWriteDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import skill.bean.SkillWrite;
import skill.bean.SkillWriteDTO;
import skill.bean.SkillWriteFilterDTO;
import skill.service.SkillService;

import java.util.List;
import java.util.Map;

@CrossOrigin
@RestController
public class SkillController {
    @Autowired
    private SkillService skillService;

    // 글 '저장'버튼을 누르면 devlogWrite에 글 정보를 담는다.
    @PostMapping(value = "/skill/save")
    public void saveSkill(@RequestBody SkillWriteDTO skillWriteDTO) {
        System.out.println("hi");
        skillService.saveWrite(skillWriteDTO);
    }

    @GetMapping(value="/skill/getSkillList")
    public ResponseEntity<List<SkillWriteFilterDTO>> getSkillList(@RequestParam Map<String, String> allParams){
        return ResponseEntity.ok(skillService.getSkillList(allParams));

    }


}
