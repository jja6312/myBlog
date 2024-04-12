package project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import project.bean.Project;

public interface ProjectRepository extends JpaRepository<Project, Long> {
}
