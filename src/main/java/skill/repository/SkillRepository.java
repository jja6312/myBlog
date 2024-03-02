package skill.repository;

import devlog.bean.DevlogWrite;
import org.springframework.data.jpa.repository.JpaRepository;
import skill.bean.SkillWrite;

public interface SkillRepository extends JpaRepository<SkillWrite, Long> {

}
