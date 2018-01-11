package pl.jedynakbartosz.backend.user;

import java.security.Principal;
import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class UserService {

  private final UserRepository userRepository;
  private final UserMapper userMapper;

  @Transactional
  public UserDto create(UserDto userDto) {
    User user = userMapper.map(userDto);
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
}
