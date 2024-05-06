package devlog.service;

import java.io.File;
import java.io.IOException;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

import devlog.bean.*;
import devlog.mapper.DevlogWriteMapper;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import devlog.repository.CategoryRepository;
import devlog.repository.DevlogRepository;
import devlog.repository.TagRepository;
import jakarta.servlet.http.HttpSession;

@Service
@RequiredArgsConstructor
public class DevlogServiceImpl implements DevlogService {


    private final DevlogRepository devlogRepository;
    private final CategoryRepository categoryRepository;
    private final TagRepository tagRepository;
    private final DevlogWriteMapper devlogWriteMapper;


    @Override
    public void saveWrite(DevlogWriteDTO devlogWriteDTO) {
        //1-1. 카테고리가 존재하는지 확인, 없으면 새로 생성
        Category category = categoryRepository.findByName(devlogWriteDTO.getCategoryName())
                .orElseGet(() -> new Category(devlogWriteDTO.getCategoryName(), devlogWriteDTO.getCategoryThumbnail()));

        //1-2. 카테고리가 새로 생성된경우 저장
        if (category.getId() == null) {
            category = categoryRepository.save(category);
        }

        //2-1. 태그가 존재하는지 확인, 없으면 새로 생성
        Category finalCategory = category;
        Tag tag = tagRepository.findByName(devlogWriteDTO.getTagName())
                .orElseGet(() -> new Tag(devlogWriteDTO.getTagName(), finalCategory));

        //2-2. 태그가 새로생성된경우 저장
        if (tag.getId() == null) {
            tag = tagRepository.save(tag);
        }

        //3. builder
        DevlogWrite devlogWrite = DevlogWrite.builder()
                .title(devlogWriteDTO.getTitle())
                .topic(devlogWriteDTO.getTopic())
                .notionPageId(devlogWriteDTO.getNotionPageId())
                .writeThumbnail(devlogWriteDTO.getWriteThumbnail())
                .category(category)
                .tag(tag)
                .build();

        devlogRepository.save(devlogWrite);
    }

    //기술스택에서 선택된 카드의 카테고리 name으로 개발일지 불러오기 --[24.03.07]
    @Override
    public List<DevlogWriteSkillDTO> getDevlogWriteListByCategoryName(String name) {
        return devlogWriteMapper.getDevlogWriteListByCategoryName(name);
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
