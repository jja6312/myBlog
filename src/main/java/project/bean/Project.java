package project.bean;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name="project")
@Getter
@NoArgsConstructor
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 30, nullable = false)
    private String title;

    @Column(nullable = false)
    private String detail;

    @Column(nullable = false)
    private String type;

    @Column(name = "start_date", nullable = false)
    private LocalDate startDate;

    @Column(name="end_date")
    private LocalDate endDate;

    @Column(name = "notion_page_id", nullable = false)
    private String notionPageId;

    @Column(name = "github_address")
    private String githubAddress;

    @Column(name = "deploy_address")
    private String deployAddress;

    @Column(name = "img", columnDefinition="MEDIUMTEXT")
    private String img;

    @Column(name = "created_at", nullable = false)
    private LocalDateTime createdAt; // 생성일

    @Column(name = "updated_at")
    private LocalDateTime updatedAt; // 수정일

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
    }// 생성일 업데이트 함수

    @PreUpdate
    protected void onUpdate() {
        updatedAt = LocalDateTime.now();
    }// 수정일 업데이트 함수

    @Builder
    public Project(String title, String detail, String type, LocalDate startDate, LocalDate endDate, String notionPageId, String githubAddress, String deployAddress, String img) {
        this.title = title;
        this.detail = detail;
        this.type = type;
        this.startDate = startDate;
        this.endDate = endDate;
        this.notionPageId = notionPageId;
        this.githubAddress = githubAddress;
        this.deployAddress = deployAddress;
        this.img = img;
    }


}
