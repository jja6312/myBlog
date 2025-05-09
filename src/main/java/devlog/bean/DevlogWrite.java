package devlog.bean;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

//개발일지(데브로그)의 글에 관련된 테이블.  --[24.01.26 14:43 정지안]
@Entity
@Table(name = "devlogWrite")
@NoArgsConstructor
@Getter
public class DevlogWrite {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title; // 제목

    @Column(nullable = false)
    private String topic; // 주제 => 어떤 종류의 글인지? (예: 개념정리 혹은 트러블슈팅)

    @Column(name = "notion_page_id", nullable = false)
    private String notionPageId; // 노션페이지아이디 => 글은 노션에서 작성한 글을 바로 불러올 수 있게 만들었다.

    @Column(name = "category_thumbnail", nullable = true)
    private String categoryThumbnail;//카테고리 썸네일 

    @Column(name = "write_thumbnail", columnDefinition = "MEDIUMTEXT", nullable = true)
    private String writeThumbnail; //게시글 썸네일

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
    public DevlogWrite(String title, String topic, String notionPageId, String categoryThumbnail, String writeThumbnail,Category category, Tag tag){
        this.title = title;
        this.topic = topic;
        this.notionPageId = notionPageId;
        this.categoryThumbnail = categoryThumbnail;
        this.writeThumbnail = writeThumbnail;
        this.category = category;
        this.tag = tag;

    }


    // ------------다른 테이블과의 관계---------------
    @ManyToOne
    @JoinColumn(name = "category_id")
    @JsonManagedReference
    private Category category; // 카테고리 => 어떤 것에 대한 글인지? (예: Java)

    @ManyToOne
    @JoinColumn(name = "tag_id")
    private Tag tag; // 태그 => 어떤 키워드가 중요한지? (예: Collections)

}
