package studyTime.bean;

import java.time.Duration;
import java.time.LocalDateTime;

import devlog.bean.Category;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

//스터디 시간에 관련된 테이블.  --[24.01.26 14:43 정지안]
@Entity
@Table(name = "studyTime")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class StudyTime {
	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;

	    @ManyToOne
	    @JoinColumn(name = "category_id", nullable = false)
	    private Category category;

	    @Column(nullable = false)
	    private LocalDateTime startTime;

	    @Column(nullable = false)
	    private LocalDateTime endTime;

	    @Column(nullable = false)
	    private Duration duration; // Long보다 효과적!

}
