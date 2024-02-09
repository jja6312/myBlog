package studyTime.bean;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class StudyTimeByDayGroupByCategoryDTO {
    private Long studyMinutesDay;
    private String categoryName;

    public StudyTimeByDayGroupByCategoryDTO(Long studyMinutesDay, String categoryName){
        this.studyMinutesDay = studyMinutesDay;
        this.categoryName = categoryName;
    }

}
