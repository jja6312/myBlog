package devlog.bean;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

//데브로그 글쓰기에서 입력된 *태그 종류를 유니크하게 관리하는 Table. --[24.01.25 14:43 정지안]

@Entity
@Table(name = "tag")
@Data
public class Tag {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String name;

    // ------------다른 테이블과의 관계---------------
    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;

    public Tag(String name, Category category) {
        this.name = name;
        this.category = category;
    }
}

// *태그란?
// 특정 주제에서 세부 분류주제를 말한다. (예: 자바에서 collections를 주제로 글을 쓸 때, collections가 태그다.)