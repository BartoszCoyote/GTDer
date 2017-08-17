package pl.jedynakbartosz.backend.task;

import java.util.List;

public interface TaskService {

    Task findByName(String name);

    List<Task> findAll();

    Task save(Task task);

    void delete(Long id);

    Task find(Long id);


}
