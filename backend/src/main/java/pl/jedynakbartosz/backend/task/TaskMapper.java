package pl.jedynakbartosz.backend.task;

import org.springframework.stereotype.Component;

@Component
public class TaskMapper {

  public TaskDto map(Task task) {
    TaskDto dto = new TaskDto();
    dto.setName(task.getName());
    dto.setDescription(task.getDescription());
    dto.setId(task.getId());
    dto.setProject(task.getProject());
    dto.setSelectedDay(task.getSelectedDay().substring(0, 10));

    return dto;
  }

  Task map(TaskDto dto) {

    Task task;
    if (dto.getId() != null) {
      task = new Task(dto.getId());
    } else {
      task = new Task();
    }
    task.setName(dto.getName());
    task.setDescription(dto.getDescription());
    task.setProject(dto.getProject());
    task.setSelectedDay(dto.getSelectedDay().substring(0, 10));
    return task;
  }
}
