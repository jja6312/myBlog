package studyTime.bean;

import java.time.LocalDateTime;

// Lombok 어노테이션
import lombok.Data;
import lombok.NoArgsConstructor;

//스톱워치 저장시 컨트롤러에서 받는 데이터들. --[24.02.03 정지안]
@Data
@NoArgsConstructor
public class StudyTimeDTO {
    private String categoryName; // 공부한 카테고리의 이름
    private LocalDateTime startTime; // 공부 시작 시간
    private LocalDateTime endTime; // 공부 종료 시간
    private long duration; // 공부한 시간의 길이(초 단위로 설정함.)

    // UTC시간대 +9시간을 해준다 --[24.02.03 정지안]
    public void adjustTimeForKST() {
        this.startTime = this.startTime.plusHours(9);
        this.endTime = this.endTime.plusHours(9);
    }

}
