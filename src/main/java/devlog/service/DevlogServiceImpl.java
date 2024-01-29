package devlog.service;

import java.io.File;
import java.io.IOException;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
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

	// 글 저장
	@Override
	public void saveWrite(DevlogWriteDTO devlogWriteDTO, MultipartFile categoryThumbnail, MultipartFile writeThumbnail,
			HttpSession session) {

		 DevlogWrite devlogWrite = convertToEntity(devlogWriteDTO);

		    // 실제 폴더의 파일 경로 확인
		    String filePathCategory = session.getServletContext().getRealPath("/public/storage/categories");
		    String filePathWrite = session.getServletContext().getRealPath("/public/storage/write");
		    System.out.println("실제 폴더 = " + filePathCategory);

		    String originalFileNameCategory = null;
		    //카테고리 썸네일 사진이 있을 때만 카테고리 썸네일을 처리.
		    if (categoryThumbnail != null && !categoryThumbnail.isEmpty()) {
		        originalFileNameCategory = categoryThumbnail.getOriginalFilename();
		        // 카테고리 썸네일 처리
		        Category category = devlogWrite.getCategory();
		        category.setCategoryThumbnail(originalFileNameCategory);
		        File fileCategory = new File(filePathCategory, originalFileNameCategory);
		        try {
		            categoryThumbnail.transferTo(fileCategory);
		        } catch (IllegalStateException | IOException e) {
		            e.printStackTrace();
		        }
		        categoryRepository.save(category);
		    }

		    String originalFileNameWrite = writeThumbnail.getOriginalFilename();
		    devlogWrite.setWriteThumbnail(originalFileNameWrite);

		    // 게시글 썸네일 저장
		    File fileWrite = new File(filePathWrite, originalFileNameWrite);
		    try {
		        writeThumbnail.transferTo(fileWrite);
		    } catch (IOException e) {
		        e.printStackTrace();
		    }

		    devlogRepository.save(devlogWrite);

	}

	// 글 저장 로직
	private DevlogWrite convertToEntity(DevlogWriteDTO devlogWriteDTO) {
		DevlogWrite devlogWrite = new DevlogWrite();
		devlogWrite.setTitle(devlogWriteDTO.getTitle());
		devlogWrite.setTopic(devlogWriteDTO.getTopic());
		devlogWrite.setNotionPageId(devlogWriteDTO.getNotionPageId());

		// 새로운 카테고리나 태그가 없는 경우 기존의 것을 사용하며, 존재하지 않는 경우에만 새로운 객체를 생성
		Category category = categoryRepository.findByName(devlogWriteDTO.getCategoryName())
				.orElseGet(() -> categoryRepository.save(new Category(devlogWriteDTO.getCategoryName())));
		Tag tag = tagRepository.findByName(devlogWriteDTO.getTagName())
				.orElseGet(() -> tagRepository.save(new Tag(devlogWriteDTO.getTagName(), category)));

		devlogWrite.setCategory(category);
		devlogWrite.setTag(tag);

		return devlogWrite;
	}

	// 카테고리 리스트 가져오기
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

	@Override
	public List<DevlogWrite> getDevlogWriteListByDate(String clickedDate) {
	    DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
	    LocalDate date = LocalDate.parse(clickedDate, formatter);
	    LocalDateTime startOfDay = date.atStartOfDay();
	    LocalDateTime endOfDay = date.atTime(23, 59, 59);
	    System.out.println(date+"=>date!!!!!!!!!!");
	    System.out.println(startOfDay+"=>startOfDay!!!!!!!!!!");
	    System.out.println(endOfDay+"=>endOfDay!!!!!!!!!!");

	    return devlogRepository.findAllByDate(startOfDay, endOfDay);
	}

}
