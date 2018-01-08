package pl.jedynakbartosz.backend.task;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {

  Task findByName(String name);

  Task findById(Long id);

  void deleteById(Long id);

  boolean existsByName(String name);
}
