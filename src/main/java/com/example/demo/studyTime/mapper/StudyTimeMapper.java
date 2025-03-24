package com.example.demo.studyTime.mapper;


import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import com.example.demo.studyTime.bean.StudyTimeGroupByCategoryDTO;

import java.time.LocalDateTime;
import java.util.List;

@Mapper
public interface StudyTimeMapper {
    List<StudyTimeGroupByCategoryDTO> findStudyTimeGroupByCategory(@Param("startDateTime") LocalDateTime startDateTime);


    String getStudyTimeHourSum();
}
