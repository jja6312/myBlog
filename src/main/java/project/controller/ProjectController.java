package project.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import project.bean.Project;
import project.bean.ProjectSaveDTO;
import project.service.ProjectService;
import project.service.ProjectServiceImpl;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class ProjectController {
    private final ProjectService projectService;

    @PostMapping("/project/save")
    public ResponseEntity<?> projectSave(@RequestBody ProjectSaveDTO projectSaveDTO){
        projectService.projectSave(projectSaveDTO);

        return ResponseEntity.ok().build();
    }
    @GetMapping("/project/getProjectListAll")
    public ResponseEntity<List<Project>> getProjectListAll(){
        return ResponseEntity.ok(projectService.getProjectListALl());
    }

}
