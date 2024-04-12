package devlog.service;

import java.io.File;
import java.io.IOException;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

import devlog.bean.*;
import devlog.mapper.DevlogWriteMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

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
	@Autowired
	private DevlogWriteMapper devlogWriteMapper;


	@Override
	public void saveWrite(DevlogWriteDTO devlogWriteDTO) {
		DevlogWrite devlogWrite = convertToEntity(devlogWriteDTO);


		devlogRepository.save(devlogWrite);
	}

	//기술스택에서 선택된 카드의 카테고리 name으로 개발일지 불러오기 --[24.03.07]
	@Override
	public List<DevlogWriteSkillDTO> getDevlogWriteListByCategoryName(String name) {
		return devlogWriteMapper.getDevlogWriteListByCategoryName(name);
	}

	private DevlogWrite convertToEntity(DevlogWriteDTO devlogWriteDTO) {
		DevlogWrite devlogWrite = new DevlogWrite();
		devlogWrite.setTitle(devlogWriteDTO.getTitle());
		devlogWrite.setTopic(devlogWriteDTO.getTopic());
		devlogWrite.setNotionPageId(devlogWriteDTO.getNotionPageId());

		// 카테고리 처리
		Category category = categoryRepository.findByName(devlogWriteDTO.getCategoryName())
				.orElseGet(() -> new Category(devlogWriteDTO.getCategoryName()));

		// 썸네일 값이 비어 있지 않은 경우에만 설정
		if (!devlogWriteDTO.getCategoryThumbnail().isEmpty()) {
			category.setCategoryThumbnail(devlogWriteDTO.getCategoryThumbnail());
		}

		// Category 객체가 새로 생성되었을 때만 저장
		if (category.getId() == null) {
			category = categoryRepository.save(category);
		}

		// 태그를 처리합니다. Tag 엔티티에 카테고리를 설정
		Category finalCategory = category;
		Tag tag = tagRepository.findByName(devlogWriteDTO.getTagName())
				.orElseGet(() -> new Tag(devlogWriteDTO.getTagName(), finalCategory));

		// Tag 객체가 새로 생성되었을 때만 저장
		if (tag.getId() == null) {
			tag = tagRepository.save(tag); // Tag 저장 로직 추가
		}

		// DevlogWrite 엔티티에 writeThumbnail을 설정
		devlogWrite.setWriteThumbnail(devlogWriteDTO.getWriteThumbnail());

		// 최종적으로 Category와 Tag를 DevlogWrite 엔티티에 설정
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
		System.out.println(date + "=>date!!!!!!!!!!");
		System.out.println(startOfDay + "=>startOfDay!!!!!!!!!!");
		System.out.println(endOfDay + "=>endOfDay!!!!!!!!!!");

		return devlogRepository.findAllByDate(startOfDay, endOfDay);
	}




}
