package pl.jedynakbartosz.backend.project;

import java.security.Principal;
import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import pl.jedynakbartosz.backend.task.TaskDto;
import pl.jedynakbartosz.backend.task.TaskMapper;
import pl.jedynakbartosz.backend.task.TaskRepository;
import pl.jedynakbartosz.backend.user.User;
import pl.jedynakbartosz.backend.user.UserRepository;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class ProjectService {

  private final ProjectRepository projectRepository;
  private final ProjectMapper projectMapper;
  private final UserRepository userRepository;
  private final TaskRepository taskRepository;
  private final TaskMapper taskMapper;

  @Transactional
  public ProjectDto create(ProjectDto projectDto) {

    Project project = projectMapper.map(projectDto);

    projectRepository.save(project);

    return ProjectMapper.map(project);
  }

  @Transactional
  public List<ProjectDto> findALl() {
    return projectRepository
        .findAll()
        .stream()
        .map(ProjectMapper::map)
        .collect(Collectors.toList());
  }

  @Transactional
  public List<TaskDto> showAllTask(String name, Principal principal) {
    User user = userRepository.findByUsername(principal.getName());

    return taskRepository
        .findAll()
        .stream()
        .filter(task -> task.getProject().getName().equals(name))
            .filter(task -> task.getUser() == user)
        .map(taskMapper::map)
        .collect(Collectors.toList());
  }
}
