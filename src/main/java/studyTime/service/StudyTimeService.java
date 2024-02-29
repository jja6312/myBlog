package studyTime.service;

import studyTime.bean.*;

import java.util.List;

//스터디 시간과 관련된 service --[24.01.27 20:41 정지안]
public interface StudyTimeService {

	void createStudyTime(StudyTimeDTO studyTimeDTO);

	long getTodayStudyTime();

	// Map<LocalDate, Long> getYearlyStudyTime();

	List<StudyTimeSummaryDTO> getYearlyStudyTime();

	StudyTimeAverageDTO getAverageStudyTime();

	//(메인화면 중간 왼쪽)일별, 카테고리별 공부량
	List<StudyTimeByDayGroupByCategoryDTO> getStudyTimeByDayGroupByCategory(String clickedDate);

	//(메인화면 중간 오른쪽)최근 1주일,최근 1달,최근 1년 카테고리별 공부 시간
    List<StudyTimeGroupByCategoryDTO> getStudyTimeGroupByCategory(String range);


	String getStudyTimeHourSum();
}
