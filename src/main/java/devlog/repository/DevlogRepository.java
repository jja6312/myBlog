package devlog.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import devlog.bean.DevlogWrite;

public interface DevlogRepository extends JpaRepository<DevlogWrite, Long> {
}
