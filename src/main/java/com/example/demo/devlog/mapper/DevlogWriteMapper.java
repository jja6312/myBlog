package com.example.demo.devlog.mapper;

import com.example.demo.devlog.bean.DevlogWriteSkillDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

public interface DevlogWriteMapper {
    List<DevlogWriteSkillDTO> getDevlogWriteListByCategoryName(String name);
}
