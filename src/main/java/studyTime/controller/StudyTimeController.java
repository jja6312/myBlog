package studyTime.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import studyTime.bean.*;
import studyTime.service.StudyTimeService;

import java.util.List;

//스터디 시간과 관련된 controller --[24.01.27 20:41 정지안]
@CrossOrigin
@RestController
public class StudyTimeController {
	@Autowired
	private StudyTimeService studyTimeService; // 스터디시간 서비스

	// 공부시간 저장
	@PostMapping("/studyTime/saveTime")
	public ResponseEntity<?> createStudySession(@RequestBody StudyTimeDTO studyTimeDTO) {
		// UTC시간대 +9시간을 해준다 --[24.02.03 정지안]
		studyTimeDTO.adjustTimeForKST();

		studyTimeService.createStudyTime(studyTimeDTO);
		return ResponseEntity.ok().build();
	}

	// 오늘 공부한 시간 가져오기
	@GetMapping("/studyTime/getTodayStudyTime")
	public ResponseEntity<Long> getTodayStudyTime() {
		long todayStudyTime = studyTimeService.getTodayStudyTime();
		return ResponseEntity.ok(todayStudyTime);
	}

	// 연간 공부 시간 가져오기
	@GetMapping("/studyTime/getYearlyStudyTime")
	public ResponseEntity<List<StudyTimeSummaryDTO>> getYearlyStudyTime() {
		List<StudyTimeSummaryDTO> yearlyStudyTime = studyTimeService.getYearlyStudyTime();
		return ResponseEntity.ok(yearlyStudyTime);
	}

	@GetMapping("/studyTime/averageStudyTime")
	public ResponseEntity<StudyTimeAverageDTO> getAverageStudyTime(){
		StudyTimeAverageDTO studyTimeAverageDTO = studyTimeService.getAverageStudyTime();
		return ResponseEntity.ok(studyTimeAverageDTO);
	}

	//(메인화면 중간 오른쪽)최근 1주일, 카테고리별 공부 시간
	@GetMapping("/studyTime/getStudyTimeGroupByCategory")
	public ResponseEntity<List<StudyTimeGroupByCategoryDTO>> getStudyTimeGroupByCategory(){
		List<StudyTimeGroupByCategoryDTO> studyTimeGroupByCategoryDTO = studyTimeService.getStudyTimeGroupByCategory("최근 1주일");
		return ResponseEntity.ok(studyTimeGroupByCategoryDTO);
	}

	//(메인화면 중간 오른쪽)최근 1달, 카테고리별 공부 시간(메인화면 중간 오른쪽)

	@GetMapping("/studyTime/getStudyTimeGroupByCategoryRecentOneMonth")
	public ResponseEntity<List<StudyTimeGroupByCategoryDTO>> getStudyTimeGroupByCategoryRecentOneMonth(){
		List<StudyTimeGroupByCategoryDTO> studyTimeGroupByCategoryDTO = studyTimeService.getStudyTimeGroupByCategory("최근 1달");
		return ResponseEntity.ok(studyTimeGroupByCategoryDTO);
	}
	//(메인화면 중간 오른쪽)최근 1년, 카테고리별 공부 시간
	@GetMapping("/studyTime/getStudyTimeGroupByCategoryRecentOneYear")
	public ResponseEntity<List<StudyTimeGroupByCategoryDTO>> getStudyTimeGroupByCategoryRecentOneYear(){
		List<StudyTimeGroupByCategoryDTO> studyTimeGroupByCategoryDTO = studyTimeService.getStudyTimeGroupByCategory("최근 1년");
		return ResponseEntity.ok(studyTimeGroupByCategoryDTO);
	}

	//(메인화면 중간 왼쪽)일별, 카테고리별 공부량
	@GetMapping("/studyTime/getStudyTimeByDayGroupByCategory")
	public ResponseEntity<List<StudyTimeByDayGroupByCategoryDTO>> getStudyTimeByDayGroupByCategory(@RequestParam("clickedDate")String clickedDate){
		List<StudyTimeByDayGroupByCategoryDTO> studyTimeByDayGroupByCategoryDTO = studyTimeService.getStudyTimeByDayGroupByCategory(clickedDate);
		return ResponseEntity.ok(studyTimeByDayGroupByCategoryDTO);
	}

	//(메인화면 왼쪽)경험치바를 표현하기 위한 전체 공부 시간 계산
	@GetMapping("/studyTime/getStudyTimeHourSum")
	public ResponseEntity<String> getStudyTimeHourSum(){
		String studyTimeHourSum = studyTimeService.getStudyTimeHourSum();
		return ResponseEntity.ok(studyTimeHourSum);
	}



}
