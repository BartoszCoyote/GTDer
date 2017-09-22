package pl.jedynakbartosz.backend.security.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.jedynakbartosz.backend.model.security.User;


public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
}
