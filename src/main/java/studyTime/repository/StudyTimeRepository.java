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

	@Query(value = "SELECT (SUM(duration_in_seconds) / COUNT(DISTINCT DATE(start_time))) / 60 AS avgDayStudyTimeAsMinute "
			+
			"FROM study_time " +
			"WHERE DAYOFWEEK(start_time) BETWEEN 2 AND 6 " +
			"AND start_time >= '2024-02-03' " +
			"AND start_time < CURDATE()", nativeQuery = true)
	Double findAverageWeekdayStudyTimeInMinutes();

	@Query(value = "SELECT (SUM(duration_in_seconds) / COUNT(DISTINCT DATE(start_time))) / 60 AS weekendStudyTimeAsMinute "
			+
			"FROM study_time " +
			"WHERE DAYOFWEEK(start_time) IN (1, 7) " +
			"AND start_time >= '2024-02-03' " +
			"AND start_time < CURDATE()", nativeQuery = true)
	Double findAverageWeekendStudyTimeInMinutes();

	@Query(value = "SELECT (SUM(duration_in_seconds) / COUNT(DISTINCT DATE(start_time))) / 60 AS avgDayStudyTimeAsMinute "
			+
			"FROM study_time " +
			"WHERE DAYOFWEEK(start_time) BETWEEN 1 AND 7 " +
			"AND start_time >= '2024-02-03' " +
			"AND start_time < CURDATE()", nativeQuery = true)
	Double findAverageAllStudyTimeInMinutes();

	// // 시작 시간과 종료 시간 사이에 있는 StudyTime 엔티티 조회
	// List<StudyTime> findByStartTimeBetween(LocalDateTime startDateTime,
	// LocalDateTime endDateTime);
	//
	// // 주말에 해당하는 StudyTime 데이터만 조회
	// @Query("SELECT st FROM StudyTime st WHERE st.startTime >= :startDateTime AND
	// st.endTime <= :endDateTime AND FUNCTION('DAYOFWEEK', st.startTime) IN (1,
	// 7)")
	// List<StudyTime> findWeekendsBetweenDates(@Param("startDateTime")
	// LocalDateTime startDateTime, @Param("endDateTime") LocalDateTime
	// endDateTime);

}
