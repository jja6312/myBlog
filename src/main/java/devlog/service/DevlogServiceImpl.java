package devlog.service;

import java.io.File;
import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import devlog.bean.Category;
import devlog.bean.DevlogWrite;
import devlog.bean.DevlogWriteDTO;
import devlog.bean.Tag;
import devlog.repository.CategoryRepository;
import devlog.repository.DevlogRepository;
import devlog.repository.TagRepository;
import jakarta.servlet.http.HttpSession;

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
    public void saveWrite(DevlogWriteDTO devlogWriteDTO, MultipartFile categoryThumbnail, HttpSession session) {
//    	DevlogWrite devlogWrite = convertToEntity(devlogWriteDTO);
//
//        devlogRepository.save(devlogWrite);
    	DevlogWrite devlogWrite = convertToEntity(devlogWriteDTO);
    	
    	// 실제폴더의 파일경로 확인
    	String filePath = session.getServletContext().getRealPath("/public/storage/categories");
    	System.out.println("실제폴더 = " + filePath);
    	
    	// 이미지를 set
		String originalFileName = categoryThumbnail.getOriginalFilename();
		devlogWrite.setCategoryThumbnail(originalFileName);
		
		// 파일 생성
		File file = new File(filePath, originalFileName);
		try {
			categoryThumbnail.transferTo(file);
		} catch (IOException e) {
			e.printStackTrace();
		}
	
        devlogRepository.save(devlogWrite);
    	 
    }
    
   
    
    //글 저장 로직
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



	@Override
	public List<Tag> getTagList() {
		
		return tagRepository.findAll();
	}



	@Override
	public List<DevlogWrite> getDevlogWriteList() {
		
		return devlogRepository.findAll();
	}



	
}
