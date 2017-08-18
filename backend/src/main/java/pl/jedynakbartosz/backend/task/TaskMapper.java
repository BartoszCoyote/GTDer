package pl.jedynakbartosz.backend.task;

import org.springframework.stereotype.Component;

@Component
public class TaskMapper {

    TaskDto map(Task task) {
        TaskDto dto = new TaskDto();
        dto.setId(task.getId());
        dto.setName(task.getName());
        dto.setCreateDate(task.getCreateDate());
        dto.setDescription(task.getDescription());

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
        task.setCreateDate(dto.getCreateDate());
        task.setDescription(dto.getDescription());
        return task;
    }
}
