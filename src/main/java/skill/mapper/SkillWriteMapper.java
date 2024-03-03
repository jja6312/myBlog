package skill.mapper;

import org.apache.ibatis.annotations.Mapper;
import skill.bean.SkillWriteFilterDTO;

import java.util.List;
import java.util.Map;

@Mapper
public interface SkillWriteMapper {
    /**
     * 선택된 조건에 맞추어 SkillWrite 객체 리스트를 조회.
     *
     * Map<String, Object> params에는 아래 정보들이 담긴다.
     *               "types"는 조회할 타입 리스트,
     *               "selectedAlignBox"는 정렬 기준,
     *               "selectedOrderBy"는 정렬 방향을 지정.
     */
    List<SkillWriteFilterDTO> selectSkillWrites(Map<String, Object> params);
}
