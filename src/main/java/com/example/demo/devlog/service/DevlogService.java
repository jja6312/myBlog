package com.example.demo.devlog.service;

import java.util.List;

import com.example.demo.devlog.bean.*;

public interface DevlogService {



	List<Category> getCategoryList();

	List<Tag> getTagList();

	List<DevlogWrite> getDevlogWriteList();

	List<DevlogWrite> getDevlogWriteListByDate(String clickedDate);

    void saveWrite(DevlogWriteDTO devlogWriteDTO);

    List<DevlogWriteSkillDTO> getDevlogWriteListByCategoryName(String name);
}
