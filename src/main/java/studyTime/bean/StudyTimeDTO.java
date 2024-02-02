package studyTime.bean;

import java.time.LocalDateTime;

// Lombok 어노테이션
import lombok.Data;
import lombok.NoArgsConstructor;

@Data // Getter, Setter, ToString, EqualsAndHashCode, RequiredArgsConstructor를 자동으로 생성
@NoArgsConstructor
public class StudyTimeDTO {
    private String categoryName; // 공부한 카테고리의 이름
    private LocalDateTime startTime; // 공부 시작 시간
    private LocalDateTime endTime; // 공부 종료 시간
    private long duration; // 공부한 시간의 길이(초 단위로 설정함.)

    //UTC시간대 +9시간을 해준다 --[24.02.03 정지안]
    public StudyTimeDTO(String categoryName, LocalDateTime startTime, LocalDateTime endTime, long duration) {
        this.categoryName = categoryName;
        this.startTime = startTime.plusHours(9); // startTime에 9시간 추가
        this.endTime = endTime.plusHours(9); // endTime에 9시간 추가
        this.duration = duration;
    }

    // 필요한 경우, 다른 메소드 추가 가능
}
