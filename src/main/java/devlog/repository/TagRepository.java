package devlog.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import devlog.bean.Tag;

public interface TagRepository extends JpaRepository<Tag, Long> {
    Optional<Tag> findByName(String name);
}
