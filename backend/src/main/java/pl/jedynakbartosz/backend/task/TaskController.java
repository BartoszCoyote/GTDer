package pl.jedynakbartosz.backend.task;

import java.security.Principal;
import java.util.List;
import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/task")
public class TaskController {

  public static final Logger logger = LoggerFactory.getLogger(TaskController.class);

  @Autowired TaskService taskService;

  @PostMapping
  @ResponseStatus(HttpStatus.CREATED)
  TaskDto create(@Valid @RequestBody TaskDto dto, HttpServletRequest request, Principal principal) {
    return taskService.create(dto, principal);
  }

  @PutMapping("/{id}")
  TaskDto update(@PathVariable("id") Long id, @Valid @RequestBody TaskDto dto) {
    return taskService.update(id, dto);
  }

  @GetMapping("/{id}")
  TaskDto findOne(@PathVariable("id") Long id) {
    return taskService.findOne(id);
  }

  @GetMapping
  List<TaskDto> findAll(Principal principal) {
    return taskService.findALl(principal);
  }

  @GetMapping("/today")
  List<TaskDto> findAllToday(Principal principal) {
    return taskService.findALLToday(principal);
  }

  @DeleteMapping("/{id}")
  @ResponseStatus(HttpStatus.NO_CONTENT)
  void delete(@PathVariable("id") String id) {
    taskService.delete(id);
  }
}
