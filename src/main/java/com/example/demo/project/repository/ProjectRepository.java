package com.example.demo.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.project.bean.Project;

public interface ProjectRepository extends JpaRepository<Project, Long> {
}
