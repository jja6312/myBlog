package devlog.service;

import java.util.List;

import devlog.bean.*;
import org.springframework.web.multipart.MultipartFile;

import jakarta.servlet.http.HttpSession;

public interface DevlogService {



	List<Category> getCategoryList();

	List<Tag> getTagList();

	List<DevlogWrite> getDevlogWriteList();

	List<DevlogWrite> getDevlogWriteListByDate(String clickedDate);

    void saveWrite(DevlogWriteDTO devlogWriteDTO);

    List<DevlogWriteSkillDTO> getDevlogWriteListByCategoryName(String name);
}
