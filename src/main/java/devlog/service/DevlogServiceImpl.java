package devlog.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import devlog.bean.Category;
import devlog.bean.DevlogWrite;
import devlog.bean.Tag;
import devlog.repository.CategoryRepository;
import devlog.repository.DevlogRepository;
import devlog.repository.TagRepository;

@Service
public class DevlogServiceImpl implements DevlogService {

    @Autowired
    private DevlogRepository devlogRepository;
    @Autowired
    private CategoryRepository categoryRepository;
    @Autowired
    private TagRepository tagRepository;

    @Override
    public void saveWrite(DevlogWrite devlogWrite) {
    	System.out.println("!!서비스");
    	System.out.println(devlogWrite.getCategory().getName());
    	System.out.println("!!넘어감");
        Category category = categoryRepository.findByName(devlogWrite.getCategory().getName())
                .orElseGet(() -> categoryRepository.save(devlogWrite.getCategory()));

        devlogWrite.setCategory(category);

        Tag tag = tagRepository.findByName(devlogWrite.getTag().getName())
                .orElseGet(() -> tagRepository.save(devlogWrite.getTag()));

        devlogWrite.setTag(tag);

        devlogRepository.save(devlogWrite);
    }
}
