package memo.repository;

import memo.bean.Memo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDateTime;
import java.util.List;

public interface MemoRepository extends JpaRepository<Memo, Long> {
    @Query("SELECT m FROM Memo m WHERE m.createdAt >= :startOfDay AND m.createdAt < :endOfDay")
    List<Memo> findMemosByCreatedAtBetween(LocalDateTime startOfDay, LocalDateTime endOfDay);

}
