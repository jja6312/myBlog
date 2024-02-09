package studyTime.bean;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class StudyTimeGroupByCategoryDTO {
    private double studyMinutes;
    private String categoryName;

}
