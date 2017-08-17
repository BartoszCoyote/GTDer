package pl.jedynakbartosz.backend.task;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class TaskController {

    public static final Logger logger = LoggerFactory.getLogger(TaskController.class);

    @Autowired
    TaskService taskService;


    @GetMapping(value = "/tasks")
    public List<Task> registration() {
        return taskService.findAll();

    }

    @DeleteMapping("/task/{id}")
    void delete(@PathVariable("id") Long id) {
        taskService.delete(id);
    }

    @GetMapping(value = "/task/{id}")
    public Task findOneTask(@PathVariable Long id) {
        return taskService.find(id);
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(value = "/task")
    public void addTask(Task task) {
        taskService.save(task);

    }


}




