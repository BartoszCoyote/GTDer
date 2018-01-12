package pl.jedynakbartosz.backend.task;

import java.security.Principal;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import pl.jedynakbartosz.backend.project.Project;
import pl.jedynakbartosz.backend.project.ProjectRepository;
import pl.jedynakbartosz.backend.user.User;
import pl.jedynakbartosz.backend.user.UserRepository;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class TaskService {

  private final TaskRepository taskRepository;
  private final TaskMapper taskMapper;
  private final UserRepository userRepository;
  private final ProjectRepository projectRepository;

  @Transactional
  public TaskDto create(TaskDto taskDto, Principal principal) {
    User user = userRepository.findByUsername(principal.getName());
    Task task = taskMapper.map(taskDto);
    task.setUser(user);
    Project project = null;

    if (taskDto.getProject() == null) {
      project = projectRepository.findByName("Inbox");
    } else if (!projectRepository.existsByName(taskDto.getProject().getName())) {
      project = new Project(taskDto.getProject().getName());
    } else if (projectRepository.existsByName(taskDto.getProject().getName())) {
      project = projectRepository.findByName(taskDto.getProject().getName());
    }
    task.setProject(project);

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
  public List<TaskDto> findALLToday(Principal principal) {
    LocalDate localDate = LocalDate.now();
    String today = DateTimeFormatter.ofPattern("yyyy/MM/dd").format(localDate).replace("/", "-");

    User user = userRepository.findByUsername(principal.getName());
    return taskRepository
        .findAll()
        .stream()
        .filter(task -> task.getUser() == user)
        .filter(task -> task.getSelectedDay().equals(today))
        .map(taskMapper::map)
        .collect(Collectors.toList());
  }

  @Transactional
  public TaskDto update(Long id, TaskDto dto) {
    Task task = taskRepository.findById(id);
    task.setDescription(dto.getDescription());
    task.setName(dto.getName());
    return taskMapper.map(task);
  }

  @Transactional
  public TaskDto findOne(Long id) {
    Task task = taskRepository.findById(id);
    return taskMapper.map(task);
  }

  @Transactional
  public void delete(Long id) {
    taskRepository.deleteById(id);
  }

  @Transactional
  public TaskDto changeProject(Long id) {

    Long idTrash = Long.valueOf(2);
    Project project = projectRepository.findById(idTrash);
    Task task = taskRepository.findById(id);
    if (task.getProject() == project) {
      taskRepository.deleteById(id);
    }
    task.setProject(project);
    task.setSelectedDay("2118-01-12");
    return taskMapper.map(task);
  }

  @Transactional
  public List<TaskDto> find7days(Principal principal) {


    LocalDate localDate = LocalDate.now();
    String today = DateTimeFormatter.ofPattern("yyyy/MM/dd").format(localDate).replace("/", "-");
    String today1 = DateTimeFormatter.ofPattern("yyyy/MM/dd").format(localDate.plusDays(1)).replace("/", "-");
    String today2 = DateTimeFormatter.ofPattern("yyyy/MM/dd").format(localDate.plusDays(2)).replace("/", "-");
    String today3 = DateTimeFormatter.ofPattern("yyyy/MM/dd").format(localDate.plusDays(3)).replace("/", "-");
    String today4 = DateTimeFormatter.ofPattern("yyyy/MM/dd").format(localDate.plusDays(4)).replace("/", "-");
    String today5 = DateTimeFormatter.ofPattern("yyyy/MM/dd").format(localDate.plusDays(5)).replace("/", "-");
    String today6 = DateTimeFormatter.ofPattern("yyyy/MM/dd").format(localDate.plusDays(6)).replace("/", "-");

    System.out.println(localDate.plusDays(1));
    User user = userRepository.findByUsername(principal.getName());
    return taskRepository
            .findAll()
            .stream()
            .filter(task -> task.getUser() == user)
            .filter(task -> task.getSelectedDay().equals(today)
                    || task.getSelectedDay().equals(today1)
                    || task.getSelectedDay().equals(today2)
                    || task.getSelectedDay().equals(today3)
                    || task.getSelectedDay().equals(today4)
                    || task.getSelectedDay().equals(today5)
                    || task.getSelectedDay().equals(today6))
           .map(taskMapper::map)
            .collect(Collectors.toList());
  }

  }


