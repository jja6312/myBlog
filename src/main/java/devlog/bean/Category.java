package devlog.bean;

import java.util.Set;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import studyTime.bean.StudyTime;

// 데브로그 글쓰기에서 입력된 *카테고리 종류를 유니크하게 관리하는 Table --[24.01.25 14:43 정지안]
@Entity
@Table(name = "category")
@Data
@NoArgsConstructor
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String name;

    @Column(name = "category_thumbnail", columnDefinition="MEDIUMTEXT", nullable = true)
    private String categoryThumbnail;

    // ------------다른 테이블과의 관계---------------
    @OneToMany(mappedBy = "category")
    @JsonBackReference
    private Set<DevlogWrite> devlogWrite;

    @OneToMany(mappedBy = "category")
    private Set<Tag> tag;

    public Category(String name, String categoryThumbnail) {
        this.name = name;
        this.categoryThumbnail = categoryThumbnail;
    }
    @OneToMany(mappedBy = "category", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<StudyTime> studyTimes;
}

// *카테고리란?
// 어떤 종류의 공부인지를 나타낸다. (예: Java에서 collections를 주제로 글을 쓸 때, Java가 카테고리다.)