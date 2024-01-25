package devlog.bean;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

// 데브로그 글쓰기에서 입력된 *카테고리 종류를 유니크하게 관리하는 Table --[24.01.25 14:43 정지안]
@Entity
@Table(name = "category")
@Data
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String name;

}

//*카테고리란?
//어떤 종류의 공부인지를 나타낸다. (예: Java에서 collections를 주제로 글을 쓸 때, Java가 카테고리다.)