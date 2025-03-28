package com.example.demo.project.service;

import org.springframework.stereotype.Service;
import com.example.demo.project.bean.Project;
import com.example.demo.project.bean.ProjectSaveDTO;
import com.example.demo.project.repository.ProjectRepository;

import java.util.List;

@Service
public class ProjectServiceImpl implements ProjectService {
    private final ProjectRepository projectRepository;


    public ProjectServiceImpl(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    @Override
    public void projectSave(ProjectSaveDTO projectSaveDTO) {
        Project project = new Project();
        project.setTitle(projectSaveDTO.getTitle());
        project.setDetail(projectSaveDTO.getDetail());
        project.setType(projectSaveDTO.getType());
        project.setStartDate(projectSaveDTO.getStartDate());
        project.setEndDate(projectSaveDTO.getEndDate());
        project.setImg(projectSaveDTO.getImg());
        project.setNotionPageId(projectSaveDTO.getNotionPageId());
        project.setGithubAddress(projectSaveDTO.getGithubAddress());
        project.setDeployAddress(projectSaveDTO.getDeployAddress());

        projectRepository.save(project);
    }

    @Override
    public List<Project> getProjectListALl() {
        return projectRepository.findAll();
    }
}
