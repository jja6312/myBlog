package devlog.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import devlog.bean.Category;
import devlog.bean.DevlogWrite;
import devlog.bean.DevlogWriteDTO;
import devlog.bean.Tag;
import devlog.repository.CategoryRepository;
import devlog.repository.DevlogRepository;
import devlog.repository.TagRepository;

@Service
public class DevlogServiceImpl implements DevlogService {

    @Autowired
    private DevlogRepository devlogRepository;
    @Autowired
    private CategoryRepository categoryRepository;
    @Autowired
    private TagRepository tagRepository;

    //글 저장
    @Override
    public void saveWrite(DevlogWriteDTO devlogWriteDTO) {
    	DevlogWrite devlogWrite = convertToEntity(devlogWriteDTO);
    	
//        Category category = categoryRepository.findByName(devlogWrite.getCategory().getName())
//                .orElseGet(() -> categoryRepository.save(new Category(devlogWrite.getCategory().getName())));
//
//        devlogWrite.setCategory(category);
//
//        Tag tag = tagRepository.findByName(devlogWrite.getTag().getName())
//                .orElseGet(() -> tagRepository.save(new Tag(devlogWrite.getTag().getName(), category)));
//
//        devlogWrite.setTag(tag);

        devlogRepository.save(devlogWrite);
    }
    
    
    
    private DevlogWrite convertToEntity(DevlogWriteDTO devlogWriteDTO) {
        DevlogWrite devlogWrite = new DevlogWrite();
        devlogWrite.setTitle(devlogWriteDTO.getTitle());
        devlogWrite.setTopic(devlogWriteDTO.getTopic());
        devlogWrite.setNotionPageId(devlogWriteDTO.getNotionPageId());

        Category category = categoryRepository.findByName(devlogWriteDTO.getCategoryName())
        						.orElseGet(()->categoryRepository.save(new Category(devlogWriteDTO.getCategoryName())));
        Tag tag = tagRepository.findByName(devlogWriteDTO.getTagName())
        						.orElseGet(()->tagRepository.save(new Tag(devlogWriteDTO.getTagName(), category)));

        devlogWrite.setCategory(category);
        devlogWrite.setTag(tag);

        return devlogWrite;
    }

    //카테고리 리스트 가져오기
	@Override
	public List<Category> getCategoryList() {
		return categoryRepository.findAll();
	}
}
