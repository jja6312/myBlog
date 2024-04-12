package studyTime.bean;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class StudyTimeAverageDTO {
    private double averageStudyTimePerDay; // 평균 일일 학습시간
    private double averageStudyTimePerWeekend; // 주말 평균 학습시간
    private double averageStudyTimeAll; // 평균 총 학습시간
}
