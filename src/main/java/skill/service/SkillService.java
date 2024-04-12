package skill.service;

import skill.bean.SkillWrite;
import skill.bean.SkillWriteDTO;
import skill.bean.SkillWriteFilterDTO;

import java.util.List;
import java.util.Map;

public interface SkillService {
    void saveWrite(SkillWriteDTO skillWriteDTO);

    List<SkillWriteFilterDTO> getSkillList(Map<String, String> allParams);
}
