package pl.jedynakbartosz.backend.user;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

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
        return userRepository.findAll().stream()
                .map(userMapper::map)
                .collect(Collectors.toList());
    }
}
