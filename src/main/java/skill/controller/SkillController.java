package skill.controller;

import devlog.bean.DevlogWriteDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import skill.bean.SkillWriteDTO;
import skill.service.SkillService;

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


}
