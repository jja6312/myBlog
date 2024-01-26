package devlog.service;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import devlog.bean.Category;
import devlog.bean.DevlogWrite;
import devlog.bean.DevlogWriteDTO;
import devlog.bean.Tag;
import jakarta.servlet.http.HttpSession;

public interface DevlogService {

	void saveWrite(DevlogWriteDTO devlogWriteDTO, MultipartFile categoryThumnail, HttpSession session);

	List<Category> getCategoryList();

	List<Tag> getTagList();

	List<DevlogWrite> getDevlogWriteList();

}
