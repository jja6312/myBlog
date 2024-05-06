package skill.bean;

import devlog.bean.Category;
import jakarta.persistence.*;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Table(name="skillWrite")
@Getter
@NoArgsConstructor
public class SkillWrite {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="name",nullable = false)
    private String name;
    @Column(name="type", nullable = false)
    private String type;
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

    @Builder
    public SkillWrite(String name, String type, String strength, String weakness, String writeThumbnail, Category category) {
        this.name = name;
        this.type = type;
        this.strength = strength;
        this.weakness = weakness;
        this.writeThumbnail = writeThumbnail;
        this.category = category;
    }
}
