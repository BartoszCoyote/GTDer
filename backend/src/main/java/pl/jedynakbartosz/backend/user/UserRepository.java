package pl.jedynakbartosz.backend.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    
    void deleteById(String id);

    User save(User user);

    User findByUsername(String username);
}
