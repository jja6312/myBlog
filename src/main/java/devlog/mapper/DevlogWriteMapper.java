package devlog.mapper;

import devlog.bean.DevlogWrite;

import java.util.List;

public interface DevlogWriteMapper {
    List<DevlogWrite> getDevlogWriteListByCategoryName(String name);
}
