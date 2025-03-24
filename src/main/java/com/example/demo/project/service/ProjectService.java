package com.example.demo.project.service;

import com.example.demo.project.bean.Project;
import com.example.demo.project.bean.ProjectSaveDTO;

import java.util.List;

public interface ProjectService {
    void projectSave(ProjectSaveDTO projectSaveDTO);

    List<Project> getProjectListALl();
}
