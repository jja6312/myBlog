package studyTime.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import studyTime.bean.StudyTime;
import studyTime.repository.StudyTimeRepository;

//스터디 시간과 관련된 service --[24.01.27 20:41 정지안]
@Service
public class StudyTimeServiceImpl implements StudyTimeService {
	@Autowired
	private StudyTimeRepository studyTimeRepository;

	@Override
	public void createStudySession(StudyTime studyTimeSession) {
		studyTimeRepository.save(studyTimeSession);
		
	}
	

}
