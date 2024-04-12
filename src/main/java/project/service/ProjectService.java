package project.service;

import project.bean.Project;
import project.bean.ProjectSaveDTO;

import java.util.List;

public interface ProjectService {
    void projectSave(ProjectSaveDTO projectSaveDTO);

    List<Project> getProjectListALl();
}
