package studyTime.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import studyTime.bean.StudyTime;

//스터디 시간과 관련된 repository --[24.01.27 20:41 정지안]
public interface StudyTimeRepository extends JpaRepository<StudyTime, Long> {

}
