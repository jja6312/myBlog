package studyTime.service;

import java.util.List;

import studyTime.bean.StudyTimeDTO;
import studyTime.bean.StudyTimeSummaryDTO;

//스터디 시간과 관련된 service --[24.01.27 20:41 정지안]
public interface StudyTimeService {

	void createStudyTime(StudyTimeDTO studyTimeDTO);
	
	long getTodayStudyTime();

//	Map<LocalDate, Long> getYearlyStudyTime();
	
	List<StudyTimeSummaryDTO> getYearlyStudyTime();

}
