package pl.jedynakbartosz.backend.user;

import java.security.Principal;
import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import pl.jedynakbartosz.backend.task.Task;
import pl.jedynakbartosz.backend.task.TaskDto;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class UserService {
  @Autowired
  private PasswordEncoder passwordEncoder;

  private final UserRepository userRepository;
  private final UserMapper userMapper;

  @Transactional
  public UserDto create(UserDto userDto) {
    User user = userMapper.map(userDto);
    userRepository.save(user);
    return userMapper.map(user);
  }

  @Transactional
  public UserDto update(Long id, UserDto dto) {

    User user;
    user = userRepository.findById(id);

   user.setEmail(dto.getEmail());
   user.setUsername(dto.getUsername());
   user.setFirstname(dto.getFirstname());
   user.setLastname(dto.getLastname());
   user.setPassword(passwordEncoder.encode(dto.getPassword()));
    userRepository.save(user);



    return userMapper.map(user);
  }

  @Transactional
  public List<UserDto> findAll() {
    return userRepository.findAll().stream().map(userMapper::map).collect(Collectors.toList());
  }

  @Transactional
  public String who(Principal principal){
    return principal.getName();
  }
  @Transactional
  public UserDto me(Principal principal) {
    User user = userRepository.findByUsername(principal.getName());

    return userMapper.map(user);
  }

}
