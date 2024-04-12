package devlog.bean;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class DevlogWriteSkillDTO {
    private Long id;
    private String title;
    private String topic;
    private String notionPageId;
    private String categoryThumbnail;
    private String writeThumbnail;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private String categoryName;
    private String tagName;
}
