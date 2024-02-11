package studyTime.mapper;


import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import studyTime.bean.StudyTimeGroupByCategoryDTO;

import java.time.LocalDateTime;
import java.util.List;

@Mapper
public interface StudyTimeMapper {
    List<StudyTimeGroupByCategoryDTO> findStudyTimeGroupByCategory(@Param("startDateTime") LocalDateTime startDateTime);


}
