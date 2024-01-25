package devlog.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import devlog.bean.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {
    Optional<Category> findByName(String name);
}
