package studyTime.repository;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import studyTime.bean.StudyTime;
import studyTime.bean.StudyTimeByDayGroupByCategoryDTO;
import studyTime.bean.StudyTimeGroupByCategoryDTO;
import studyTime.bean.StudyTimeSummaryDTO;

//스터디 시간과 관련된 repository --[24.01.27 20:41 정지안]
public interface StudyTimeRepository extends JpaRepository<StudyTime, Long> {
	@Query("SELECT SUM(st.durationInSeconds) FROM StudyTime st WHERE FUNCTION('DATE', st.startTime) = :date")
	Optional<Long> findTotalDurationByDate(@Param("date") LocalDate date);

	// @Query("SELECT FUNCTION('DATE', st.startTime) as date,
	// SUM(st.durationInSeconds) " +
	// "FROM StudyTime st WHERE st.startTime BETWEEN :startDate AND :endDate " +
	// "GROUP BY FUNCTION('DATE', st.startTime)")
	// Map<LocalDate, Long> findDurationByDateRange(@Param("startDate") LocalDate
	// startDate,
	// @Param("endDate") LocalDate endDate);
	@Query("SELECT new studyTime.bean.StudyTimeSummaryDTO(FUNCTION('DATE', st.startTime) as date, SUM(st.durationInSeconds)) "
			+
			"FROM StudyTime st WHERE st.startTime BETWEEN :startDate AND :endDate " +
			"GROUP BY FUNCTION('DATE', st.startTime)")
	List<StudyTimeSummaryDTO> findDurationByDateRange(@Param("startDate") LocalDateTime startDate,
			@Param("endDate") LocalDateTime endDate);

	//평균 학습시간(평일 평균)
	@Query(value = "SELECT (SUM(duration_in_seconds) / COUNT(DISTINCT DATE(start_time))) / 60 AS avgDayStudyTimeAsMinute "
			+
			"FROM study_time " +
			"WHERE DAYOFWEEK(start_time) BETWEEN 2 AND 6 " +
			"AND start_time >= '2024-02-03' " +
			"AND start_time < CURDATE()", nativeQuery = true)
	Double findAverageWeekdayStudyTimeInMinutes();

	//평균 학습시간(주말평균)
	@Query(value = "SELECT (SUM(duration_in_seconds) / COUNT(DISTINCT DATE(start_time))) / 60 AS weekendStudyTimeAsMinute "
			+
			"FROM study_time " +
			"WHERE DAYOFWEEK(start_time) IN (1, 7) " +
			"AND start_time >= '2024-02-03' " +
			"AND start_time < CURDATE()", nativeQuery = true)
	Double findAverageWeekendStudyTimeInMinutes();

	//평균 학습시간(평일+주말평균)
	@Query(value = "SELECT (SUM(duration_in_seconds) / COUNT(DISTINCT DATE(start_time))) / 60 AS avgDayStudyTimeAsMinute "
			+
			"FROM study_time " +
			"WHERE DAYOFWEEK(start_time) BETWEEN 1 AND 7 " +
			"AND start_time >= '2024-02-03' " +
			"AND start_time < CURDATE()", nativeQuery = true)
	Double findAverageAllStudyTimeInMinutes();


	//클릭된 날짜에 대한 공부종류
	@Query("SELECT new studyTime.bean.StudyTimeByDayGroupByCategoryDTO(SUM(st.durationInSeconds) / 60, c.name) " +
			"FROM StudyTime st " +
			"JOIN st.category c " +
			"WHERE st.startTime >= :startOfDay AND st.startTime < :startOfNextDay " +
			"GROUP BY c.name " +
			"ORDER BY SUM(st.durationInSeconds) DESC")
	List<StudyTimeByDayGroupByCategoryDTO> findStudyTimeByDayGroupByCategory(@Param("startOfDay") LocalDateTime startOfDay, @Param("startOfNextDay") LocalDateTime startOfNextDay);


}
