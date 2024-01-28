package studyTime.service;

import java.time.Duration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import devlog.bean.Category;
import devlog.repository.CategoryRepository;
import studyTime.bean.StudyTime;
import studyTime.bean.StudyTimeDTO;
import studyTime.repository.StudyTimeRepository;

//스터디 시간과 관련된 service --[24.01.27 20:41 정지안]
@Service
public class StudyTimeServiceImpl implements StudyTimeService {
    @Autowired
    private StudyTimeRepository studyTimeRepository;
    
    @Autowired
    private CategoryRepository categoryRepository;

    @Override
    public void createStudyTime(StudyTimeDTO studyTimeDTO) {
        StudyTime studyTime = convertToEntity(studyTimeDTO);
        studyTimeRepository.save(studyTime);
    }

    private StudyTime convertToEntity(StudyTimeDTO studyTimeDTO) {
        Category category = categoryRepository.findByName(studyTimeDTO.getCategoryName())
                                              .orElseThrow(() -> new RuntimeException("일치하는 카테고리 이름이 없습니다."));

        return new StudyTime(
            null, // id는 자동생성되니까 null
            category,
            studyTimeDTO.getStartTime(),
            studyTimeDTO.getEndTime(),
            Duration.between(studyTimeDTO.getStartTime(), studyTimeDTO.getEndTime())
        );
    }
}
