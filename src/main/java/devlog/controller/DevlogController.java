package devlog.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import devlog.bean.DevlogWrite;
import devlog.service.DevlogService;

//개발일지와 관련된 controller --[24.01.25 14:43 정지안]
@CrossOrigin
@RestController
public class DevlogController {
    @Autowired
    private DevlogService devlogService; // 개발일지 서비스

    // 글 '저장'버튼을 누르면 devlogWrite에 글 정보를 담는다.
    @PostMapping(value = "/devlog/save")
    public void saveDevlog(@RequestBody DevlogWrite devlogWrite) {
    	System.out.println("!!컨트롤러");
        devlogService.saveWrite(devlogWrite);
    }
}
