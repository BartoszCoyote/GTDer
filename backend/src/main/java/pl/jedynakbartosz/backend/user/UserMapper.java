package pl.jedynakbartosz.backend.user;

import java.sql.Timestamp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class UserMapper {

  @Autowired private PasswordEncoder passwordEncoder;

  UserDto map(User user) {
    UserDto dto = new UserDto();
    dto.setId(user.getId());
    dto.setUsername(user.getUsername());
    dto.setFirstname(user.getFirstname());
    dto.setLastname(user.getLastname());
    dto.setPassword(passwordEncoder.encode(user.getPassword()));
    dto.setEmail(user.getEmail());
   return dto;
  }

  User map(UserDto dto) {
    User user;
    if (dto.getId() != null) {
      user = new User(dto.getId());
    } else {
      user = new User();
    }
    user.setLastname(dto.getLastname());
    user.setUsername(dto.getUsername());
    user.setFirstname(dto.getFirstname());
    user.setPassword(passwordEncoder.encode(dto.getPassword()));
    user.setEmail(dto.getEmail());
    user.setLastPasswordResetDate(new Timestamp(System.currentTimeMillis()));
    user.setEnabled(true);
    return user;
  }
}
