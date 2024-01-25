package devlog.service;

import java.util.List;

import devlog.bean.Category;
import devlog.bean.DevlogWriteDTO;
import devlog.bean.Tag;

public interface DevlogService {

	void saveWrite(DevlogWriteDTO devlogWriteDTO);

	List<Category> getCategoryList();

	List<Tag> getTagList();

}
