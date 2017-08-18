package pl.jedynakbartosz.backend.task;

import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class TaskController {

    public static final Logger logger = LoggerFactory.getLogger(TaskController.class);

    @Autowired
    TaskService taskService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    TaskDto create(@Valid @RequestBody TaskDto dto) {
        return taskService.create(dto);
    }

    @PutMapping("/{id}")
    TaskDto update(@PathVariable("id") String id, @Valid @RequestBody TaskDto dto) {
        return taskService.update(id, dto);
    }

    @GetMapping
    List<TaskDto> findAll() {
        return taskService.findALl();
    }


    @DeleteMapping("/{id}")
    void delete(@PathVariable("id") String id) {
        taskService.delete(id);
    }


}




