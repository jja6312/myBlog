package devlog.repository;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import devlog.bean.DevlogWrite;

//개발일지 관련 Repository --[24.1.29 정지안]
public interface DevlogRepository extends JpaRepository<DevlogWrite, Long> {

	// 메인 화면에서 선택된 일자에 따른 개발일지 목록을 불러온다.
	@Query("SELECT dw FROM DevlogWrite dw WHERE dw.createdAt >= :startDate AND dw.createdAt < :endDate")
	List<DevlogWrite> findAllByDate(@Param("startDate") LocalDateTime startDate,
			@Param("endDate") LocalDateTime endDate);
}
