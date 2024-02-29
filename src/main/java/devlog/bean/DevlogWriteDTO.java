package devlog.bean;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DevlogWriteDTO {
    private String title;
    private String topic;
    private String notionPageId;
    private String categoryName;
    private String tagName;
    private String categoryThumbnail;
    private String writeThumbnail;
}