package project.bean;

import jakarta.persistence.Column;
import lombok.Data;

import java.time.LocalDate;

@Data
public class ProjectSaveDTO {
    private String title;
    private String detail;
    private String type;
    private LocalDate startDate;
    private LocalDate endDate;
    private String img;
    private String notionPageId;
    private String githubAddress;
    private String deployAddress;
}

