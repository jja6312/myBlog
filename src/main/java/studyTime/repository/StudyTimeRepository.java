package studyTime.repository;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import studyTime.bean.StudyTime;
import studyTime.bean.StudyTimeSummaryDTO;

//스터디 시간과 관련된 repository --[24.01.27 20:41 정지안]
public interface StudyTimeRepository extends JpaRepository<StudyTime, Long> { 
	@Query("SELECT SUM(st.durationInSeconds) FROM StudyTime st WHERE FUNCTION('DATE', st.startTime) = :date")
	Optional<Long> findTotalDurationByDate(@Param("date") LocalDate date);

	
//	@Query("SELECT FUNCTION('DATE', st.startTime) as date, SUM(st.durationInSeconds) " +
//	           "FROM StudyTime st WHERE st.startTime BETWEEN :startDate AND :endDate " +
//	           "GROUP BY FUNCTION('DATE', st.startTime)")
//	    Map<LocalDate, Long> findDurationByDateRange(@Param("startDate") LocalDate startDate, 
//	                                                 @Param("endDate") LocalDate endDate);
	@Query("SELECT new studyTime.bean.StudyTimeSummaryDTO(FUNCTION('DATE', st.startTime) as date, SUM(st.durationInSeconds)) " +
		       "FROM StudyTime st WHERE st.startTime BETWEEN :startDate AND :endDate " +
		       "GROUP BY FUNCTION('DATE', st.startTime)")
		List<StudyTimeSummaryDTO> findDurationByDateRange(@Param("startDate") LocalDateTime startDate, 
		                                                  @Param("endDate") LocalDateTime endDate);



}
