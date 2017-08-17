package pl.jedynakbartosz.backend.task;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskServiceImpl implements TaskService {


    @Autowired
    TaskRepository taskRepository;

    @Override
    public Task findByName(String name) {
        return taskRepository.findByName(name);
    }

    @Override
    public List<Task> findAll() {
        return taskRepository.findAll();
    }

    @Override
    public Task save(Task task) {
        return taskRepository.save(task);
    }

    @Override
    public void delete(Long id) {
        taskRepository.delete(id);
    }

    @Override
    public Task find(Long id) {
        return taskRepository.findOne(id);
    }

}
