package com.example.demo.skill.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.skill.bean.SkillWrite;

public interface SkillRepository extends JpaRepository<SkillWrite, Long> {

}
