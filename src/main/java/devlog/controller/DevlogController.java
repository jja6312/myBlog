package devlog.controller;

import java.util.List;

import devlog.bean.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import devlog.service.DevlogService;
import jakarta.servlet.http.HttpSession;

//개발일지와 관련된 controller --[24.01.29 정지안]
@CrossOrigin
@RestController
public class DevlogController {
    @Autowired
    private DevlogService devlogService; // 개발일지 서비스

    // ----------------------글쓰기----------------------
    // 글 '저장'버튼을 누르면 devlogWrite에 글 정보를 담는다.
    @PostMapping(value = "/devlog/save")
    public void saveDevlog(@RequestBody DevlogWriteDTO devlogWriteDTO) {
        System.out.println("!!!devlogWriteDTO.get" + devlogWriteDTO.getCategoryThumbnail());
        devlogService.saveWrite(devlogWriteDTO);

    }

    // (글쓰기에서 카테고리 선택을 위한) 카테고리 리스트 가져오기
    @GetMapping(value = "/devlog/getCategoryList")
    public List<Category> getCategoryList() {
        return devlogService.getCategoryList();
    }

    // (글쓰기에서 태그 선택을 위한) 태그 리스트 가져오기
    @GetMapping(value = "/devlog/getTagList")
    public List<Tag> getTagList() {
        return devlogService.getTagList();
    }

    // ----------------------개발일지 메인----------------------

    @GetMapping(value = "/devlog/getDevlogWriteList")
    public List<DevlogWrite> getDevlogWriteList() {
        return devlogService.getDevlogWriteList();
    }

    // ---------------------myBlog 메인에서 요청---------------------
    @GetMapping(value = "/myBlog/getDevlogWriteListByDate")
    public List<DevlogWrite> getDevlogWriteListByDate(@RequestParam("clickedDate") String clickedDate) {
        return devlogService.getDevlogWriteListByDate(clickedDate);
    }

    //---------기술스택에서 선택된 카드의 카테고리 name으로 개발일지 불러오기

    @GetMapping(value = "/devlog/getDevlogWriteListByCategoryName")
    public ResponseEntity<List<DevlogWriteSkillDTO>> getDevlogWriteListByCategoryName(@RequestParam("name") String name) {
        return ResponseEntity.ok(devlogService.getDevlogWriteListByCategoryName(name));
    }

}
