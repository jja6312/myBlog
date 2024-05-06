package project.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import project.bean.Project;
import project.bean.ProjectSaveDTO;
import project.repository.ProjectRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProjectServiceImpl implements ProjectService {
    private final ProjectRepository projectRepository;

    @Override
    public void projectSave(ProjectSaveDTO projectSaveDTO) {
        Project project = Project.builder()
                .title(projectSaveDTO.getTitle())
                .detail(projectSaveDTO.getDetail())
                .type(projectSaveDTO.getType())
                .startDate(projectSaveDTO.getStartDate())
                .endDate(projectSaveDTO.getEndDate())
                .img(projectSaveDTO.getImg())
                .notionPageId(projectSaveDTO.getNotionPageId())
                .githubAddress(projectSaveDTO.getGithubAddress())
                .deployAddress(projectSaveDTO.getDeployAddress())
                .build();

        projectRepository.save(project);
    }

    @Override
    public List<Project> getProjectListALl() {
        return projectRepository.findAll();
    }
}
