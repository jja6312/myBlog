package studyTime.service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import devlog.bean.Category;
import devlog.repository.CategoryRepository;
import studyTime.bean.StudyTime;
import studyTime.bean.StudyTimeDTO;
import studyTime.bean.StudyTimeSummaryDTO;
import studyTime.repository.StudyTimeRepository;

//스터디 시간과 관련된 service --[24.01.27 20:41 정지안]
@Service
public class StudyTimeServiceImpl implements StudyTimeService {
	private final StudyTimeRepository studyTimeRepository;
    private final CategoryRepository categoryRepository;

    @Autowired
    public StudyTimeServiceImpl(StudyTimeRepository studyTimeRepository, CategoryRepository categoryRepository) {
        this.studyTimeRepository = studyTimeRepository;
        this.categoryRepository = categoryRepository;
    }

    //스톱워치 중지시, 카테고리별로 공부시간을 저장한다.
    @Override
    public void createStudyTime(StudyTimeDTO studyTimeDTO) {
        StudyTime studyTime = convertToEntity(studyTimeDTO);
        studyTimeRepository.save(studyTime);
    }
    
    //스톱워치 중지시, studyTimeDTO의 categoryName에 따른 Category정보를 적절하게 StudyTime에 매핑하기위한 함수.
    private StudyTime convertToEntity(StudyTimeDTO studyTimeDTO) {
        Category category = categoryRepository.findByName(studyTimeDTO.getCategoryName())
                                              .orElseThrow(() -> new RuntimeException("일치하는 카테고리 이름이 없습니다."));

        long durationInSeconds = java.time.Duration.between(studyTimeDTO.getStartTime(), studyTimeDTO.getEndTime()).getSeconds();
        return new StudyTime(
            null, // id는 자동생성되니까 null
            category,
            studyTimeDTO.getStartTime(),
            studyTimeDTO.getEndTime(),
            durationInSeconds
        );
    }
    
    //메인페이지 렌더시, 오늘의 총 공부 시간을 나타내기 위한 함수.
    public long getTodayStudyTime() {
        LocalDate today = LocalDate.now();
        return studyTimeRepository.findTotalDurationByDate(today)
                                  .orElse(0L);
    }
    //메인페이지 렌더시, 연간 공부 시간을 조회
//    public Map<LocalDate, Long> getYearlyStudyTime() {
//        LocalDate startDate = LocalDate.of(2024, 1, 1);
//        LocalDate endDate = LocalDate.of(2024, 12, 31);
//        return studyTimeRepository.findDurationByDateRange(startDate, endDate);
//        return null;
//    }
    
    public List<StudyTimeSummaryDTO> getYearlyStudyTime() {
    	LocalDateTime startDate = LocalDateTime.of(2024, 1, 1,0,0);
    	LocalDateTime endDate = LocalDateTime.of(2024, 12, 31,0,0);
        return studyTimeRepository.findDurationByDateRange(startDate, endDate);
    }

    
    
}
