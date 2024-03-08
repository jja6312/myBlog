package devlog.mapper;

import devlog.bean.DevlogWrite;
import devlog.bean.DevlogWriteSkillDTO;

import java.util.List;

public interface DevlogWriteMapper {
    List<DevlogWriteSkillDTO> getDevlogWriteListByCategoryName(String name);
}
