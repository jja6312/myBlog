package skill.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import devlog.bean.Category;
import devlog.repository.CategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import skill.bean.SkillWrite;
import skill.bean.SkillWriteDTO;
import skill.bean.SkillWriteFilterDTO;
import skill.mapper.SkillWriteMapper;
import skill.repository.SkillRepository;

import java.util.*;

@Service
@RequiredArgsConstructor
public class SkillServiceImpl implements SkillService{

private final SkillRepository skillRepository;
private final CategoryRepository categoryRepository;
private final SkillWriteMapper skillWriteMapper;

    @Override
    public void saveWrite(SkillWriteDTO skillWriteDTO) {
        Optional<Category> category = categoryRepository.findByName(skillWriteDTO.getName());

        SkillWrite skillWrite = SkillWrite.builder()
                .name(skillWriteDTO.getName())
                .type(skillWriteDTO.getType())
                .strength(skillWriteDTO.getStrength())
                .weakness(skillWriteDTO.getWeakness())
                .writeThumbnail(skillWriteDTO.getWriteThumbnail())
                .category(category.orElse(null))
                .build();

        skillRepository.save(skillWrite);
    }

    @Override
    public List<SkillWriteFilterDTO> getSkillList(Map<String, String> allParams) {// 안좋은코드. 앞으론 이렇게 설계하지말자.
        String checkBoxes = allParams.get("checkBoxes");
        List<String> types = new ArrayList<>();

        try {
            // checkBoxes 문자열을 Map 객체로 파싱
            ObjectMapper objectMapper = new ObjectMapper();
            Map<String, Boolean> checkBoxesMap = objectMapper.readValue(checkBoxes, Map.class);

            // "All"을 제외한 각 키에 대해 반복
            checkBoxesMap.forEach((key, value) -> {
                if (!"All".equalsIgnoreCase(key) && value) {//이 때 value는 true false.
                    types.add(key);
                }
            });
        } catch (Exception e) {
            e.printStackTrace();
        }

        Map<String, Object> params = new HashMap<>();
        params.put("types", types);
        params.put("selectedAlignBox", allParams.get("selectedAlignBox"));
        params.put("selectedOrderBy", allParams.get("selectedOrderBy"));



        return skillWriteMapper.selectSkillWrites(params);
    }//getSkillList()


}//SkillService Class
