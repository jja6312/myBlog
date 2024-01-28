package studyTime.service;

import studyTime.bean.StudyTime;
import studyTime.bean.StudyTimeDTO;

//스터디 시간과 관련된 service --[24.01.27 20:41 정지안]
public interface StudyTimeService {

	void createStudyTime(StudyTimeDTO studyTimeDTO);
	
	long getTodayStudyTime();

}
