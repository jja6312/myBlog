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

    List<StudyTimeGroupByCategoryDTO> getStudyTimeGroupByCategory();

	List<StudyTimeByDayGroupByCategoryDTO> getStudyTimeByDayGroupByCategory(String clickedDate);
}
