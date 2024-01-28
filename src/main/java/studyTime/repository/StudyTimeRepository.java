package studyTime.repository;

import java.time.LocalDate;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import studyTime.bean.StudyTime;

//스터디 시간과 관련된 repository --[24.01.27 20:41 정지안]
public interface StudyTimeRepository extends JpaRepository<StudyTime, Long> { 
	@Query("SELECT SUM(st.durationInSeconds) FROM StudyTime st WHERE FUNCTION('DATE', st.startTime) = :date")
	Optional<Long> findTotalDurationByDate(@Param("date") LocalDate date);
}
