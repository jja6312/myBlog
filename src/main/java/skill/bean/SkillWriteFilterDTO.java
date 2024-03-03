package skill.bean;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SkillWriteFilterDTO {
    private Long id;
    private String name;
    private String type;
    private String strength;
    private String weakness;
    private String write_thumbnail;
    private LocalDateTime created_at;
    private LocalDateTime updated_at;

    private Long total_duration;

}
