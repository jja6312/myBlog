package skill.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import devlog.bean.Category;
import devlog.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import skill.bean.SkillWrite;
import skill.bean.SkillWriteDTO;
import skill.bean.SkillWriteFilterDTO;
import skill.mapper.SkillWriteMapper;
import skill.repository.SkillRepository;

import java.util.*;

@Service
public class SkillServiceImpl implements SkillService{
@Autowired
private SkillRepository skillRepository;
@Autowired
private CategoryRepository categoryRepository;
@Autowired
private SkillWriteMapper skillWriteMapper;

    @Override
    public void saveWrite(SkillWriteDTO skillWriteDTO) {
        System.out.println("service에서 writeThumbnail"+skillWriteDTO.getWriteThumbnail());
        SkillWrite skillWrite = convertToEntity(skillWriteDTO);
        skillRepository.save(skillWrite);
    }

    @Override
    public List<SkillWriteFilterDTO> getSkillList(Map<String, String> allParams) {
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

    private SkillWrite convertToEntity(SkillWriteDTO skillWriteDTO){
        SkillWrite skillWrite = new SkillWrite();
        skillWrite.setName(skillWriteDTO.getName());
        skillWrite.setType(skillWriteDTO.getType());
        skillWrite.setStrength(skillWriteDTO.getStrength());
        skillWrite.setWeakness(skillWriteDTO.getWeakness());
        skillWrite.setWriteThumbnail(skillWriteDTO.getWriteThumbnail());

        //name과 일치하는 카테고리가 있다면, 관계설정하기.
        //name과 일치하는 카테고리가 없다면, 없는채로 두자.
        Optional<Category> categoryOptional = categoryRepository.findByName(skillWriteDTO.getName());
        if(categoryOptional.isPresent()){
            Category category = categoryOptional.get();
            skillWrite.setCategory(category);
        }
        System.out.println("skillWrite의 writethumbnail"+skillWrite.getWriteThumbnail());

        return skillWrite;
    }//convertToEntity()


}//SkillService Class
