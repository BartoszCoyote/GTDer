package pl.jedynakbartosz.backend.task;

import java.security.Principal;
import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class TaskService {

  private final TaskRepository taskRepository;
  private final TaskMapper taskMapper;

  @Transactional
  public TaskDto create(TaskDto taskDto) {

    Task task = taskMapper.map(taskDto);

    task = taskRepository.save(task);
    return taskMapper.map(task);
  }

  public List<TaskDto> findALl(Principal principal) {

    return taskRepository.findAll().stream()

        .filter(task -> task.getUser().equals(""))
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
