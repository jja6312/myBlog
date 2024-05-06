package studyTime.service;

import devlog.bean.Category;
import devlog.repository.CategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import studyTime.bean.*;
import studyTime.mapper.StudyTimeMapper;
import studyTime.repository.StudyTimeRepository;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

//스터디 시간과 관련된 service --[24.01.27 20:41 정지안]
@Service
@RequiredArgsConstructor
public class StudyTimeServiceImpl implements StudyTimeService {
    private final StudyTimeRepository studyTimeRepository;
    private final CategoryRepository categoryRepository;
    private final StudyTimeMapper studyTimeMapper;

    // 스톱워치 중지시, 카테고리별로 학습시간을 저장한다.
    @Override
    public void createStudyTime(StudyTimeDTO studyTimeDTO) {
        //카테고리 이름이 존재하는지 확인
        Category category = categoryRepository.findByName(studyTimeDTO.getCategoryName())
                .orElseThrow(() -> new RuntimeException("일치하는 카테고리 이름이 없습니다."));

        //끝시간 - 시작시간 계산
        long durationInSeconds = java.time.Duration.between(studyTimeDTO.getStartTime(), studyTimeDTO.getEndTime())
                .getSeconds();

        //builder
        StudyTime studyTime = StudyTime.builder()
                .category(category)
                .startTime(studyTimeDTO.getStartTime())
                .endTime(studyTimeDTO.getEndTime())
                .durationInSeconds(durationInSeconds)
                .build();

        studyTimeRepository.save(studyTime);
    }



    // 메인페이지 렌더시, 오늘의 총 공부 시간을 나타내기 위한 함수.
    public long getTodayStudyTime() {
        LocalDate today = LocalDate.now();
        return studyTimeRepository.findTotalDurationByDate(today)
                .orElse(0L);
    }

    public List<StudyTimeSummaryDTO> getYearlyStudyTime() {
        LocalDateTime startDate = LocalDateTime.of(2024, 1, 1, 0, 0);
        LocalDateTime endDate = LocalDateTime.of(2024, 12, 31, 0, 0);
        return studyTimeRepository.findDurationByDateRange(startDate, endDate);
    }

    @Override
    public StudyTimeAverageDTO getAverageStudyTime() {// 평균 공부 시간들을 반환. null 값이 나오면 0으로 처리

        // 평일 평균 공부 시간
        Double averageStudyTimePerDay = handleNullValue(studyTimeRepository.findAverageWeekdayStudyTimeInMinutes());
        // 주말 평균 공부 시간
        Double averageStudyTimePerWeekend = handleNullValue(studyTimeRepository.findAverageWeekendStudyTimeInMinutes());
        // 전체 평균 공부 시간
        Double averageStudyTimeAll = handleNullValue(studyTimeRepository.findAverageAllStudyTimeInMinutes());

        return new StudyTimeAverageDTO(averageStudyTimePerDay, averageStudyTimePerWeekend, averageStudyTimeAll);
    }

    private Double handleNullValue(Double value) {
        return value != null ? value : 0.0;
    }


    // (메인화면 중간 왼쪽)일별, 카테고리별 공부량
    @Override
    public List<StudyTimeByDayGroupByCategoryDTO> getStudyTimeByDayGroupByCategory(String clickedDate) {
        LocalDate date = LocalDate.parse(clickedDate);
        LocalDateTime startOfDay = date.atStartOfDay(); // 해당 날짜의 시작 시간
        LocalDateTime startOfNextDay = date.plusDays(1).atStartOfDay(); // 다음 날짜의 시작 시간

        return studyTimeRepository.findStudyTimeByDayGroupByCategory(startOfDay, startOfNextDay);
    }

    // (메인화면 중간 오른쪽)최근 1주일,최근 1달,최근 1년 카테고리별 공부 시간
    @Override
    public List<StudyTimeGroupByCategoryDTO> getStudyTimeGroupByCategory(String range) {
        LocalDate startDate = LocalDate.now(); // 기본값 설정

        if ("최근 1주일".equals(range)) {
            startDate = startDate.minusWeeks(1);
        } else if ("최근 1달".equals(range)) {
            startDate = startDate.minusMonths(1);
        } else if ("최근 1년".equals(range)) {
            startDate = startDate.minusYears(1);
        } else {
            throw new IllegalArgumentException("지원하지 않는 범위: " + range);
        }

        LocalDateTime startDateTime = startDate.atStartOfDay();
        return studyTimeMapper.findStudyTimeGroupByCategory(startDateTime);
    }

    @Override
    public String getStudyTimeHourSum() {
        return studyTimeMapper.getStudyTimeHourSum();
    }

}
