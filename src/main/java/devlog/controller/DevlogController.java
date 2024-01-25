package devlog.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import devlog.bean.Category;
import devlog.bean.DevlogWriteDTO;
import devlog.bean.Tag;
import devlog.service.DevlogService;

//개발일지와 관련된 controller --[24.01.25 정지안]
@CrossOrigin
@RestController
public class DevlogController {
    @Autowired
    private DevlogService devlogService; // 개발일지 서비스

    // 글 '저장'버튼을 누르면 devlogWrite에 글 정보를 담는다.
    @PostMapping(value = "/devlog/save")
    public void saveDevlog(@RequestBody DevlogWriteDTO devlogWriteDTO) {
    	System.out.println(devlogWriteDTO.getCategoryName()+"!!!");
        devlogService.saveWrite(devlogWriteDTO);
    }
    
    
    
    // (글쓰기에서 카테고리 선택을 위한) 카테고리 리스트 가져오기
    @PostMapping(value = "/devlog/getCategoryList")
    public List<Category> getCategoryList() {
        return devlogService.getCategoryList();
    }
    // (글쓰기에서 태그 선택을 위한) 태그 리스트 가져오기
    @PostMapping(value = "/devlog/getTagList")
    public List<Tag> getTagList() {
    	return devlogService.getTagList();
    }
}
