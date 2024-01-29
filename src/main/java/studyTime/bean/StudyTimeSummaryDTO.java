package studyTime.bean;

import java.sql.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class StudyTimeSummaryDTO {
    private Date date;
    private Long durationInSeconds;
}

