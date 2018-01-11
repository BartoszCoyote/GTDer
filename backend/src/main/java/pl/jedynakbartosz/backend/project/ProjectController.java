package pl.jedynakbartosz.backend.project;

import java.security.Principal;
import java.util.List;
import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import pl.jedynakbartosz.backend.task.TaskDto;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/project")
public class ProjectController {

  public static final Logger logger =
      LoggerFactory.getLogger(pl.jedynakbartosz.backend.project.ProjectController.class);

  @Autowired ProjectService projectService;

  @PostMapping
  @ResponseStatus(HttpStatus.CREATED)
  ProjectDto create(@Valid @RequestBody ProjectDto dto, HttpServletRequest request) {
    return projectService.create(dto);
  }

  @GetMapping
  List<ProjectDto> findAll() {
    return projectService.findALl();
  }

  @GetMapping("/{name}")
  List<TaskDto> findAllwithTask(@PathVariable("name") String name, Principal principal) {
    return projectService.showAllTask(name,principal);
  }
}
