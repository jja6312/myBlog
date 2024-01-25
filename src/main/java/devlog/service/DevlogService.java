package devlog.service;

import java.util.List;

import devlog.bean.Category;
import devlog.bean.DevlogWrite;
import devlog.bean.DevlogWriteDTO;

public interface DevlogService {

	void saveWrite(DevlogWriteDTO devlogWriteDTO);

	List<Category> getCategoryList();

}
