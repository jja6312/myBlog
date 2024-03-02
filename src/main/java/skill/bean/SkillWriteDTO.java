package skill.bean;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SkillWriteDTO {
    private String name;
    private String strength;
    private String weakness;
    private String writeThumbnail;

}
