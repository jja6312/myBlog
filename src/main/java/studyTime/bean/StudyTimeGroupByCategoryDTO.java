package studyTime.bean;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;
import java.time.LocalDate;

@Data
@NoArgsConstructor
public class StudyTimeGroupByCategoryDTO {
    private String studyDate;
    private String categoryName;
    private Double studyMinutes;

    public StudyTimeGroupByCategoryDTO(String studyDate, String categoryName, Double studyMinutes){
        this.studyDate = studyDate;
        this.categoryName = categoryName;
        this.studyMinutes = studyMinutes;
    }
}
