package com.example.demo.skill.service;

import com.example.demo.skill.bean.SkillWriteDTO;
import com.example.demo.skill.bean.SkillWriteFilterDTO;

import java.util.List;
import java.util.Map;

public interface SkillService {
    void saveWrite(SkillWriteDTO skillWriteDTO);

    List<SkillWriteFilterDTO> getSkillList(Map<String, String> allParams);
}
