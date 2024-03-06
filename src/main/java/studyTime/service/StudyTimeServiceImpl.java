package studyTime.service;

import devlog.bean.Category;
import devlog.repository.CategoryRepository;
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
public class StudyTimeServiceImpl implements StudyTimeService {
    private final StudyTimeRepository studyTimeRepository;
    private final CategoryRepository categoryRepository;
    private final StudyTimeMapper studyTimeMapper;

    @Autowired
    public StudyTimeServiceImpl(StudyTimeRepository studyTimeRepository, CategoryRepository categoryRepository,
            StudyTimeMapper studyTimeMapper) {
        this.studyTimeRepository = studyTimeRepository;
        this.categoryRepository = categoryRepository;
        this.studyTimeMapper = studyTimeMapper;
    }

    // 스톱워치 중지시, 카테고리별로 학습시간을 저장한다.
    @Override
    public void createStudyTime(StudyTimeDTO studyTimeDTO) {
        StudyTime studyTime = convertToEntity(studyTimeDTO);
        System.out.println("serviceImpl시간저장 엔티티 변환후!!!:" + studyTime.getDurationInSeconds());
        studyTimeRepository.save(studyTime);
    }

    // 스톱워치 중지시, studyTimeDTO의 categoryName에 따른 Category정보를 적절하게 StudyTime에 매핑하기위한
    // 함수.
    private StudyTime convertToEntity(StudyTimeDTO studyTimeDTO) {
        Category category = categoryRepository.findByName(studyTimeDTO.getCategoryName())
                .orElseThrow(() -> new RuntimeException("일치하는 카테고리 이름이 없습니다."));

        long durationInSeconds = java.time.Duration.between(studyTimeDTO.getStartTime(), studyTimeDTO.getEndTime())
                .getSeconds();
        return new StudyTime(
                null, // id는 자동생성되니까 null
                category,
                studyTimeDTO.getStartTime(),
                studyTimeDTO.getEndTime(),
                durationInSeconds);
    }

    // 메인페이지 렌더시, 오늘의 총 공부 시간을 나타내기 위한 함수.
    public long getTodayStudyTime() {
        LocalDate today = LocalDate.now();
        return studyTimeRepository.findTotalDurationByDate(today)
                .orElse(0L);
    }
    // 메인페이지 렌더시, 연간 공부 시간을 조회
    // public Map<LocalDate, Long> getYearlyStudyTime() {
    // LocalDate startDate = LocalDate.of(2024, 1, 1);
    // LocalDate endDate = LocalDate.of(2024, 12, 31);
    // return studyTimeRepository.findDurationByDateRange(startDate, endDate);
    // return null;
    // }

    public List<StudyTimeSummaryDTO> getYearlyStudyTime() {
        LocalDateTime startDate = LocalDateTime.of(2024, 1, 1, 0, 0);
        LocalDateTime endDate = LocalDateTime.of(2024, 12, 31, 0, 0);
        return studyTimeRepository.findDurationByDateRange(startDate, endDate);
    }

    @Override
    public StudyTimeAverageDTO getAverageStudyTime() {

        // 평일 평균 학습시간
        Double averageStudyTimePerDay = studyTimeRepository.findAverageWeekdayStudyTimeInMinutes();
        if (averageStudyTimePerDay == null)
            averageStudyTimePerDay = (double) 0;// null 예외처리

        // 주말 평균 학습시간
        Double averageStudyTimePerWeekend = studyTimeRepository.findAverageWeekendStudyTimeInMinutes();
        if (averageStudyTimePerWeekend == null)
            averageStudyTimePerWeekend = (double) 0;// null 예외처리

        // 합계 평균 학습시간
        Double averageStudyTimeAll = studyTimeRepository.findAverageAllStudyTimeInMinutes();
        if (averageStudyTimeAll == null)
            averageStudyTimeAll = (double) 0;

        StudyTimeAverageDTO studyTimeAverageDTO = new StudyTimeAverageDTO(averageStudyTimePerDay,
                averageStudyTimePerWeekend, averageStudyTimeAll);

        return studyTimeAverageDTO;

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
