package devlog.bean;

import lombok.Data;

@Data
public class DevlogWriteDTO {
	private String title;
    private String topic;
    private String notionPageId;
    private String categoryName;
    private String tagName;
}
