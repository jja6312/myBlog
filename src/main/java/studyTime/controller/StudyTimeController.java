package studyTime.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import studyTime.bean.StudyTimeDTO;
import studyTime.service.StudyTimeService;

//스터디 시간과 관련된 controller --[24.01.27 20:41 정지안]
@CrossOrigin
@RestController
public class StudyTimeController {
	@Autowired
	private StudyTimeService studyTimeService; // 스터디시간 서비스
	
	//공부시간 저장
	@PostMapping("/studyTime/saveTime")
    public ResponseEntity<?> createStudySession(@RequestBody StudyTimeDTO studyTimeDTO) {
		
        studyTimeService.createStudyTime(studyTimeDTO);
        return ResponseEntity.ok().build();
    }
	

}
