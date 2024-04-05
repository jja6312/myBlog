package project.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import project.bean.Project;
import project.bean.ProjectSaveDTO;
import project.service.ProjectService;
import project.service.ProjectServiceImpl;

@RestController
@CrossOrigin
public class ProjectController {
    private final ProjectService projectService;

    public ProjectController(ProjectService projectService){
        this.projectService = projectService;
    }

    @PostMapping("/project/save")
    public ResponseEntity<?> projectSave(@RequestBody ProjectSaveDTO projectSaveDTO){
        projectService.projectSave(projectSaveDTO);

        return ResponseEntity.ok().build();
    }

}
