package skill.service;

import devlog.bean.Category;
import devlog.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import skill.bean.SkillWrite;
import skill.bean.SkillWriteDTO;
import skill.repository.SkillRepository;

import java.util.Optional;

@Service
public class SkillServiceImpl implements SkillService{
@Autowired
private SkillRepository skillRepository;
@Autowired
private CategoryRepository categoryRepository;

    @Override
    public void saveWrite(SkillWriteDTO skillWriteDTO) {
        System.out.println("service에서 writeThumbnail"+skillWriteDTO.getWriteThumbnail());
        SkillWrite skillWrite = convertToEntity(skillWriteDTO);
        skillRepository.save(skillWrite);
    }

    private SkillWrite convertToEntity(SkillWriteDTO skillWriteDTO){
        SkillWrite skillWrite = new SkillWrite();
        skillWrite.setName(skillWriteDTO.getName());
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
