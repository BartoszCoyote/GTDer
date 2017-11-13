package pl.jedynakbartosz.backend.task;

import java.security.Principal;
import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import pl.jedynakbartosz.backend.user.User;
import pl.jedynakbartosz.backend.user.UserRepository;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class TaskService {

  private final TaskRepository taskRepository;
  private final TaskMapper taskMapper;
  private final UserRepository userRepository;

  @Transactional
  public TaskDto create(TaskDto taskDto, Principal principal) {
    User user = userRepository.findByUsername(principal.getName());
    Task task = taskMapper.map(taskDto);
    task.setUser(user);
    task = taskRepository.save(task);
    return taskMapper.map(task);
  }

  @Transactional
  public List<TaskDto> findALl(Principal principal) {
    User user = userRepository.findByUsername(principal.getName());
    return taskRepository
        .findAll()
        .stream()
        .filter(task -> task.getUser() == user)
        .map(taskMapper::map)
        .collect(Collectors.toList());
  }

  @Transactional
  public TaskDto update(String id, TaskDto dto) {
    Task task = taskRepository.findById(id);
    task.setDescription(dto.getDescription());
    task.setName(dto.getName());
    return taskMapper.map(task);
  }

  @Transactional
  public void delete(String id) {
    taskRepository.deleteById(id);
  }
}
