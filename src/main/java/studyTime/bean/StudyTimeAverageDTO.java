package studyTime.bean;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class StudyTimeAverageDTO {
    private double averageStudyTimePerWeekend; // 주말 평균 공부시간
    private double averageStudyTimePerDay; // 평균 일일 공부시간
    private double averageStudyTimePerSum; // 평균 총 공부시간
}
