package com.example.demo.project.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.demo.project.bean.Project;
import com.example.demo.project.bean.ProjectSaveDTO;
import com.example.demo.project.service.ProjectService;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/project")
public class ProjectController {
    private final ProjectService projectService;

    public ProjectController(ProjectService projectService){
        this.projectService = projectService;
    }

    @PostMapping("/save")
    public ResponseEntity<?> projectSave(@RequestBody ProjectSaveDTO projectSaveDTO){
        projectService.projectSave(projectSaveDTO);

        return ResponseEntity.ok().build();
    }
    @GetMapping("/getProjectListAll")
    public ResponseEntity<List<Project>> getProjectListAll(){
        return ResponseEntity.ok(projectService.getProjectListALl());
    }

}
