package studyTime.bean;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

//스톱워치가 정지됐을 때 받아들이는 DTO 정보. --[24.01.28 14:06 정지안]
@Data
@AllArgsConstructor
@NoArgsConstructor
public class StudyTimeDTO {
    private String categoryName; // 공부한 카테고리의 이름
    private LocalDateTime startTime; // 공부 시작 시간
    private LocalDateTime endTime; // 공부 종료 시간
    private long duration; // 공부한 시간의 길이(초 단위로 설정함.)
}