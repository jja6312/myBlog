package studyTime.bean;

import java.time.Duration;
import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import devlog.bean.Category;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.*;

//스터디 시간에 관련된 테이블.  --[24.01.26 14:43 정지안]
@Entity
@Table(name = "studyTime")
@NoArgsConstructor
@Getter
public class StudyTime {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(nullable = false)
	private LocalDateTime startTime;

	@Column(nullable = false)
	private LocalDateTime endTime;

	@Column(nullable = false)
	private long durationInSeconds; // 지속 시간을 초 단위로 저장

	//builder
	@Builder
	public StudyTime(Category category, LocalDateTime startTime, LocalDateTime endTime, long durationInSeconds) {
		this.category = category;
		this.startTime = startTime;
		this.endTime = endTime;
		this.durationInSeconds = durationInSeconds;
	}

	//------------다른 테이블과의 관계---------------
	@ManyToOne
	@JoinColumn(name = "category_id", nullable = false)
	@JsonManagedReference
	private Category category;
}
