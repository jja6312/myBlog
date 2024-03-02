package skill.bean;

import devlog.bean.Category;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Entity
@Table(name="skillWrite")
@Data
public class SkillWrite {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="name",nullable = false)
    private String name;
    @Column(name="strength", length = 1000,nullable = false)
    private String strength;
    @Column(name="weakness", length = 1000,nullable = false)
    private String weakness;
    @Column(name="writeThumbnail", columnDefinition="MEDIUMTEXT" , nullable = false)
    private String writeThumbnail;

    @Column(name = "created_at", nullable = false)
    private LocalDateTime createdAt; // 생성일

    @Column(name = "updated_at")
    private LocalDateTime updatedAt; // 수정일

    @PrePersist
    protected void onCreated(){ createdAt = LocalDateTime.now(); }

    @PreUpdate
    protected void onUpdated(){ updatedAt = LocalDateTime.now(); }

    //-------------------------------------------------------------------
    @ManyToOne(optional = true)
    @JoinColumn(name = "category_name", referencedColumnName = "name")
    private Category category;
}
