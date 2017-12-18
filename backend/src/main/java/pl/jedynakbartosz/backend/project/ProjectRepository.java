package pl.jedynakbartosz.backend.project;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Long> {

  Project findByName(String name);

  Project findById(String id);

  void deleteById(String id);

  boolean existsByName(String name);
}
